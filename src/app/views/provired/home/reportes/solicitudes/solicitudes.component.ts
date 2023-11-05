import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { FilterSolicitudes } from 'src/app/models/home/procesos/FilterSolicitudes';
import { HistorialProcesosModel } from 'src/app/models/home/procesos/historialProcesosFilter';
import { SolicitudesModel } from 'src/app/models/home/reports/solicitudes';
import { UpdateSolicitud } from 'src/app/models/home/reports/updateSolicitud';
import { MessageModel } from 'src/app/models/login/utils/messageModel';
import { SolicitudesService } from 'src/app/services/home/reportes/solicitudes.service';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent {

  public fb: FormGroup = new FormGroup({});

  public listSolicitudes: Array<SolicitudesModel> = Array<SolicitudesModel>();

  public filterProcesos: HistorialProcesosModel = new HistorialProcesosModel();

  public userIDSession: number = 0;

  public showModal: boolean = false;

  public itemSelected: SolicitudesModel = new SolicitudesModel;

  public filterSolicitudes: FilterSolicitudes = new FilterSolicitudes();

  public urlFinal: string = '';

  public isParent: boolean = false;

  constructor(
    public breadCrumService: BreadcrumbService,
    private solicitudesService: SolicitudesService,
    private session: SessionStorageService,
    private spinner: NgxSpinnerService,
    private message: MessageService
  ) {

    this.breadCrumService.setItems(
      [
        { label: 'Reportes' },
        { label: 'Mis solicitudes' }
      ]
    );

    let ses = this.session.getStorage('user', 'json');
    this.userIDSession = ses.user;

  }

  consultarSolicitudes(event: any) {
    this.spinner.show();
    this.filterProcesos = event;

    let ses = this.session.getStorage('user', 'json');
    this.filterProcesos.group_users = ses.data.group_users;
    this.filterProcesos.parent = ses.data.parent;

    this.solicitudesService.getListSolicitudes(this.filterProcesos).subscribe(
      {
        next: (res) => {
          this.spinner.hide();
          this.isParent = res.isParent;
          this.listSolicitudes = res.data;
          console.log(this.listSolicitudes);
        },
        error: (error) => {
          this.spinner.hide();
          console.log(error);
        }
      }
    );
  }

  showEditItem(event: any): void {

    this.itemSelected = event;
    this.showModal = true;

  }

  actualizarSolicitud() {

    this.spinner.show();
    let update: UpdateSolicitud = new UpdateSolicitud();

    update.sp_id_proceso = this.itemSelected.sp_id_proceso;
    update.sp_radicacion = this.itemSelected.sp_radicacion.toString();
    update.sp_rad_23 = this.itemSelected.sp_rad_23;

    this.solicitudesService.updateSolicitud(update).subscribe(
      {
        next: (res) => {
          let message_model: MessageModel = new MessageModel(
            'success',
            `Proceso exitoso!`,
            `${res.msg}`
          );
          this.message.add(message_model);
          this.spinner.hide();
          this.showModal = false;
        },
        error: (error) => {
          this.spinner.hide();
          let message_model: MessageModel = new MessageModel(
            'error',
            `Se ha presentado un error!`,
            `${error.error.msg}`
          );
          this.message.add(message_model);
        }
      }
    );
  }

  downloadReport() {
    this.spinner.show();
    let session = this.session.getStorage('user', 'json');

    this.filterSolicitudes.username = session.data.username;
    this.filterSolicitudes.name_user = session.data.nombre
    this.filterSolicitudes.name_file = 'Mis_procesos';
    this.filterSolicitudes.group_users = session.data.group_users;
    this.filterSolicitudes.parent = session.data.parent;
    this.filterSolicitudes.depto = this.filterProcesos.depto;
    this.filterSolicitudes.municipio = this.filterProcesos.municipio;
    this.filterSolicitudes.corporacion = this.filterProcesos.corporacion;
    this.filterSolicitudes.despacho = this.filterProcesos.despacho;
    this.filterSolicitudes.userChild = this.filterProcesos.userChild;


    this.solicitudesService.getReportListProcesos(this.filterSolicitudes).subscribe(
      {
        next: (res) => {
          if (res.status == 200) {
            let listUrl = res.url.split('/');
            this.urlFinal = environment.apiBaseDocs + res.url;
            this.spinner.hide();
            fetch(this.urlFinal)
              .then(response => {
                return response.blob();
              })
              .then(blod => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blod);
                link.download = listUrl[2];
                link.click();
              })
              .catch(console.error).then(
                (error: any) => {
                  if (error != undefined) {

                    let message_model: MessageModel = new MessageModel(
                      'error',
                      `Se ha presentado un error`,
                      `No fue posible descargar el documento, estamos trabajando para resolver este error`
                    );
                    this.message.add(message_model);
                  }
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
