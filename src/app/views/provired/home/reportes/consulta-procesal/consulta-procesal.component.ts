import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { FilterSolicitudes } from 'src/app/models/home/procesos/FilterSolicitudes';
import { HistorialModel } from 'src/app/models/home/procesos/historialProcesos';
import { HistorialProcesosModel } from 'src/app/models/home/procesos/historialProcesosFilter';
import { ImpulsoProcesalModel } from 'src/app/models/home/reports/ImpulsoProcesal';
import { MessageModel } from 'src/app/models/login/utils/messageModel';
import { HistorialActuacion } from 'src/app/services/home/reportes/historial-actuación';
import { HistorialProcesosService } from 'src/app/services/home/reportes/historial-procesos.service';
import { ImpulsoProcesalService } from 'src/app/services/home/reportes/impulso-procesal.service';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-consulta-procesal',
  templateUrl: './consulta-procesal.component.html',
  styleUrls: ['./consulta-procesal.component.scss'],
})
export class ConsultaProcesalComponent implements OnInit {
  public filterImpulso: FilterSolicitudes = new FilterSolicitudes();

  public listImpulso: Array<ImpulsoProcesalModel> =
    new Array<ImpulsoProcesalModel>();

  public rowsFilter: number = 10;

  public totalItems: number = 0;

  public urlFinal: string = '';

  public showModal: boolean = false;

  public showDataDescription: boolean = false;

  public itemSelected: HistorialModel = new HistorialModel();

  public actuacionSelected: HistorialActuacion = new HistorialActuacion();

  public filter: HistorialProcesosModel = new HistorialProcesosModel();

  public listActuacion: Array<HistorialActuacion> =
    new Array<HistorialActuacion>();

  public totalRows: number = 0;

  public generalRows: number = 30;

  constructor(
    public breadCrumService: BreadcrumbService,
    public session: SessionStorageService,
    private impulsoService: ImpulsoProcesalService,
    private historialService: HistorialProcesosService,
    private spinner: NgxSpinnerService,
    private message: MessageService
  ) {}

  ngOnInit(): void {
    this.breadCrumService.setItems([
      { label: 'Reportes' },
      { label: 'Consulta impulso procesal' },
    ]);

    let ses = this.session.getStorage('user', 'json');
    this.filterImpulso.group_users = ses.data.group_users;
    this.filterImpulso.parent = ses.data.parent;
    this.filterImpulso.from = 0;
    this.filterImpulso.rows = this.rowsFilter;

    this.impulsoService.getImpulsoProcesal(this.filterImpulso).subscribe({
      next: (res) => {
        this.listImpulso = res.data;
        this.totalItems = res.count_rows;
        console.log(this.listImpulso);
      },
      error: (error) => {
        console.log(error.error.msg);
      },
    });
  }

  filtrarImpulso(event?: HistorialProcesosModel, page?: any) {
    this.spinner.show();

    if (event) {
      this.filterImpulso = event;

      let ses = this.session.getStorage('user', 'json');
      this.filterImpulso.group_users = ses.data.group_users;
      this.filterImpulso.parent = ses.data.parent;
    }

    if (page) {
      this.filterImpulso.from = page.first;
      this.filterImpulso.rows = this.rowsFilter;
    } else {
      this.filterImpulso.from = 0;
      this.filterImpulso.rows = this.rowsFilter;
    }

    this.impulsoService.getImpulsoProcesal(this.filterImpulso).subscribe({
      next: (res) => {
        this.spinner.hide();
        this.listImpulso = res.data;
        this.totalItems = res.count_rows;
      },
      error: (error) => {
        this.spinner.hide();
        console.log(error.error.msg);
      },
    });
  }

  downloadReport() {
    this.spinner.show();
    let session = this.session.getStorage('user', 'json');

    this.filterImpulso.username = session.data.username;
    this.filterImpulso.name_user = session.data.nombre;
    this.filterImpulso.name_file = 'Impulso_procesal';
    this.filterImpulso.group_users = session.data.group_users;
    this.filterImpulso.parent = session.data.parent;

    this.impulsoService.generateDoc(this.filterImpulso).subscribe({
      next: (res) => {
        if (res.status == 200) {
          let listUrl = res.url.split('/');
          this.urlFinal = environment.apiBaseDocs + res.url;
          this.spinner.hide();
          fetch(this.urlFinal)
            .then((response) => {
              console.log(response);
              return response.blob();
            })
            .then((blod) => {
              const link = document.createElement('a');
              link.href = URL.createObjectURL(blod);
              link.download = listUrl[2];
              link.click();
            })
            .catch(console.error)
            .then((error) => {
              if (error != undefined) {
                let message_model: MessageModel = new MessageModel(
                  'error',
                  `Se ha presentado un error`,
                  `No fue posible descargar el documento, estamos trabajando para resolver este error`
                );
                this.message.add(message_model);
              }
            });
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
      },
    });
  }

  consultarActuacion(event?: any, page?: any): void {
    this.showDataDescription = false;

    let ses = this.session.getStorage('user', 'json');

    this.itemSelected = event;

    if (event) {
      this.filter = new HistorialProcesosModel();
      this.filter.group_users = ses.data.group_users;
      this.filter.parent = ses.data.parent;
      this.filter.despacho = this.itemSelected.despacho;
      this.filter.radicacion = this.itemSelected.radicacion;
      this.filter.codigo_23 = this.itemSelected.codigo_23;
    }

    if (page) {
      this.filter.from = page.first;
    } else {
      this.filter.from = 0;
    }

    this.filter.rows = this.generalRows;

    this.historialService.getActuacion(this.filter).subscribe({
      next: (res) => {
        this.listActuacion = res.data;
        this.totalRows = res.count_rows;
        console.log(this.listActuacion);
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.showModal = true;
  }

  showDescription(event?: any): void {
    console.log(event);

    if (event) {
      this.actuacionSelected = event;
    }

    if (this.showDataDescription) {
      this.showDataDescription = false;
    } else {
      this.showDataDescription = true;
    }
  }

  downloadDoc(url: string) {
    if (url) {
      let finalUrl = url.substring(0);
      window.open(environment.apiBaseDocs + '/autos/' + finalUrl);
    }
  }
}
