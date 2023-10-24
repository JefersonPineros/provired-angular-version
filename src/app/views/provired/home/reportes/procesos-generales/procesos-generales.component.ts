import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProcesoGeneral } from 'src/app/models/home/reports/procesoGeneral';
import { FilterGeneral } from 'src/app/models/home/reports/filterGeneral';
import { SearchProcesos } from 'src/app/models/interfaces/filterProcesosGenerales';
import { ProcesosGeneralesService } from 'src/app/services/home/reportes/procesos-generales.service';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';
import { Proceso } from 'src/app/models/home/procesos/proceso';
import { UpdateProceso } from 'src/app/models/home/procesos/updateProceso';
import { MessageModel } from 'src/app/models/login/utils/messageModel';
import { MessageService } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';
import { FilterProceso } from 'src/app/models/home/procesos/filterProcesos';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-procesos-generales',
  templateUrl: './procesos-generales.component.html',
  styleUrls: ['./procesos-generales.component.scss']
})
export class ProcesosGeneralesComponent implements OnInit {

  public formSearchProcess: SearchProcesos = {} as SearchProcesos;

  public fb: FormGroup;

  public fbUpdate: FormGroup;

  public filterGeneral: FilterGeneral = new FilterGeneral();

  public listProceso: Array<Proceso> = new Array<Proceso>();

  public itemSelected: UpdateProceso = new UpdateProceso();

  public showModal: boolean = false;

  public totalRecords: number = 0;

  public loadingTable: boolean = false;

  public startPage: Object = { first: 0, rows: 30 };

  public filterProceso: FilterProceso = new FilterProceso();

  public urlFinal: string = '';

  constructor(
    public breadCrumService: BreadcrumbService,
    private procesosGeneralesService: ProcesosGeneralesService,
    private session: SessionStorageService,
    private message: MessageService,
    private spinner: NgxSpinnerService
  ) {
    this.fb = new FormGroup({});
    this.fbUpdate = new FormGroup({});
  }

  ngOnInit(): void {
    this.breadCrumService.setItems(
      [
        { label: 'Reportes' },
        { label: 'Listado procesos generales' }
      ]
    );
    this.servicePage(this.startPage);
  }

  changePage(event: any) {
    this.servicePage(event);
  }

  consultarProcesos(): void {
    this.servicePage(this.startPage);
  }

  registroSeleccionado(event: any): void {
    this.itemSelected = event;
    this.showModal = true;
  }

  servicePage(page: any) {
    this.loadingTable = true;
    let sessionUser = this.session.getStorage('user', 'json');
    this.filterGeneral.group_users = sessionUser.data.group_users;
    this.filterGeneral.parent = sessionUser.data.parent;
    this.filterGeneral.etiqueta = this.filterGeneral.etiqueta ? this.filterGeneral.etiqueta : '';
    this.filterGeneral.radicacion = this.filterGeneral.radicacion ? this.filterGeneral.radicacion : '';
    this.filterGeneral.demandante_demandado = this.filterGeneral.demandante_demandado ? this.filterGeneral.demandante_demandado : '';
    this.filterGeneral.from = page.first;
    this.filterGeneral.rows = page.rows;

    this.procesosGeneralesService.getListProcesos(this.filterGeneral).subscribe(
      {
        next: (res) => {
          this.loadingTable = false;
          this.listProceso = res.data;
          this.totalRecords = res.count_rows;
          console.log(this.totalRecords);
        },
        error: (error) => {
          this.loadingTable = false;
          console.log(error);
        }
      }
    )
  }

  actualizarProceso(): void {
    if (this.fbUpdate.status == 'VALID') {

      this.spinner.show();
      this.procesosGeneralesService.updateProceso(this.itemSelected).subscribe(
        {
          next: (res) => {
            this.spinner.hide();
            if (res.status == 200) {
              let message_model: MessageModel = new MessageModel(
                'success',
                `Exito!`,
                `${res.msg}`
              );
              this.message.add(message_model);
            } else {
              let message_model: MessageModel = new MessageModel(
                'error',
                `Error ${res.status} `,
                `${res.msg}`
              );
              this.message.add(message_model);
            }
            this.showModal = false;
          },
          error: (error) => {
            console.log(error);
            this.showModal = false;
            this.spinner.hide();
          }
        }
      );
    } else {

      let message_model: MessageModel = new MessageModel(
        'error',
        `Formulario incompleto `,
        `Los campos Demandante y demandado son obligatorios`
      );
      this.message.add(message_model);

    }

  }

  downloadReport() {
    this.spinner.show();
    let session = this.session.getStorage('user', 'json');

    this.filterProceso.username = session.data.username;
    this.filterProceso.name_user = session.data.nombre
    this.filterProceso.name_file = 'Reporte_listado_general';
    this.filterProceso.group_users = session.data.group_users;
    this.filterProceso.parent = session.data.parent;
    this.filterProceso.demandante_demandado = '';
    this.filterProceso.radicacion = '';
    this.filterProceso.etiqueta = '';

    this.procesosGeneralesService.getReportListProcesos(this.filterProceso).subscribe(
      {
        next: (res) => {
          if (res.status == 200) {
            let listUrl = res.url.split('/');
            this.urlFinal = environment.apiBaseDocs + '/' + res.url;
            this.spinner.hide();

            fetch(this.urlFinal)
              .then(response => response.blob())
              .then(blod => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blod);
                link.download = listUrl[2];
                link.click();
              })
              .catch(console.error).then(
                error => {
                  let message_model: MessageModel = new MessageModel(
                    'error',
                    `Se ha presentado un error`,
                    `No fue posible descargar el documento, estamos trabajando para resolver este error`
                  );
                  this.message.add(message_model);
                }
              );
          } else {
            let message_model: MessageModel = new MessageModel(
              'error',
              `Error ${res.status}`,
              `${res.msg}`
            );
            this.message.add(message_model);
          }
          this.spinner.hide();
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }
}
