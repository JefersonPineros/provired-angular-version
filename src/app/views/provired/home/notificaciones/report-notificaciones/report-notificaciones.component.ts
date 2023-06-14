import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';
import * as moment from 'moment';
import { FilterDateModel } from 'src/app/models/home/notificaciones/filterDate';
import { ReporteNotificacionesService } from 'src/app/services/home/notificaciones/reporte-notificaciones.service';
import { ReporteNotificaciones } from 'src/app/models/home/notificaciones/ReporteNotificacion';
import { MessageModel } from 'src/app/models/login/utils/messageModel';
import { AudienciaService } from 'src/app/services/home/audiencia/audiencia.service';
import { Audiencias } from 'src/app/models/audiencias/audiencias';
import { environment } from 'src/environments/environment';
import { FilterReport } from 'src/app/models/home/notificaciones/filterReport';

@Component({
  selector: 'app-report-notificaciones',
  templateUrl: './report-notificaciones.component.html',
  styleUrls: ['./report-notificaciones.component.scss']
})
export class ReportNotificacionesComponent implements OnInit {

  public modelFilter: FilterDateModel = new FilterDateModel();

  public fi: Date = new Date();

  public ff: Date = new Date();

  public listReport: Array<ReporteNotificaciones> = new Array<ReporteNotificaciones>();

  public totalRecords: number = 0;

  public today: string = '';

  public loadingTable: boolean = false;

  public showModal: boolean = false;

  public showModalEdit: boolean = false;

  public detailModal: ReporteNotificaciones = new ReporteNotificaciones();

  public audiencia: Audiencias = new Audiencias();

  public filterReport: FilterReport = new FilterReport();

  constructor(
    public breadCrumService: BreadcrumbService,
    private sessionService: SessionStorageService,
    private spinner: NgxSpinnerService,
    private reporte: ReporteNotificacionesService,
    private message: MessageService,
    private audienciasService: AudienciaService,
  ) { }

  ngOnInit(): void {

    this.breadCrumService.setItems(
      [
        { label: 'Reporte de notificaciones' }
      ]
    );

  }

  findReport(): void {

    if (this.fi.getTime() > this.ff.getTime()) {
      let message_model: MessageModel = new MessageModel(
        'error',
        `Error al filtrar por fechas`,
        `Fecha hasta no puede ser menor a fecha desde`
      );
      this.message.add(message_model);

    } else {
      let sesion = this.sessionService.getStorage('user', 'json');
      this.modelFilter.parent = sesion.data.parent;
      this.modelFilter.from = 0;
      this.modelFilter.rows = 30;
      this.modelFilter.username = sesion.user;
      this.modelFilter.group_users = sesion.data.group_users;
      this.modelFilter.fi = moment(this.fi).format('yyyy-MM-DD');
      this.modelFilter.ff = moment(this.ff).format('yyyy-MM-DD');
      this.spinner.show();
      this.reporte.getReporteNotificaciones(this.modelFilter).subscribe(
        {
          next: (res) => {
            this.totalRecords = res.count_rows;
            this.listReport = res.data;
            this.spinner.hide();
          },
          error: (res) => {
            this.spinner.hide();
            console.log(res);
          }
        }
      );
    }
  }

  changePageAction(event: any): void {
    this.loadingTable = true;

    this.modelFilter.from = event.first;

    this.reporte.getReporteNotificaciones(this.modelFilter).subscribe(
      {
        next: (res) => {
          this.loadingTable = false;
          this.totalRecords = res.count_rows;
          this.listReport = res.data
        },
        error: (res) => {
          this.loadingTable = false;
          console.log(res);
        }
      }
    );
  }

  openDetail(event: any, modal: number): void {
    switch (modal) {
      case 1:
        this.showModal = true;
        break;
      case 2:
        this.showModalEdit = true;
        break;

      default:
        break;
    }

    this.detailModal = event;
  }

  updateAudiencia(): void {
    this.spinner.show();
    let sesion = this.sessionService.getStorage('user', 'json');
    this.audiencia.ciudad = this.detailModal.municipio;
    this.audiencia.demandado = this.detailModal.demandado;
    this.audiencia.demandante = this.detailModal.demandante;
    this.audiencia.radicacion = this.detailModal.radicacion;
    this.audiencia.proceso = this.detailModal.proceso;
    this.audiencia.despacho = this.detailModal.despacho;
    this.audiencia.username = sesion.user;
    this.audiencia.idplanilla = this.detailModal.idplanilla;

    this.audiencia.fecha_vence_terminos = moment(this.audiencia.fecha_vence_terminos).format('YYYY-MM-DD');

    this.audienciasService.createAudiencia(this.audiencia).subscribe(
      {
        next: (res) => {
          let message_model: MessageModel = new MessageModel('', '', '');
          if (res.status == 200) {
            message_model = new MessageModel(
              'success',
              `Proceso exitoso`,
              `${res.msg}`
            );
          } else if (res.status == 400) {
            message_model = new MessageModel(
              'error',
              `Estructura erronea`,
              `${res.msg}`
            );
          }

          this.message.add(message_model);
          this.spinner.hide();
        },
        error: (error) => {
          let message_model: MessageModel = new MessageModel(
            'success',
            `Proceso exitoso`,
            `${error.msg}`
          );
          this.message.add(message_model);
          this.spinner.hide();
        }
      }
    );
    this.showModalEdit = false;
  }

  downloadDoc(url: string) {
    if (url) {
      let finalUrl = url.substring(0);
      window.open(environment.apiBaseDocs + 'autos/' + finalUrl);
    }
  }

  downloadReport() {
    this.spinner.show();
    let session = this.sessionService.getStorage('user', 'json')
    this.filterReport.username = session.data.username;
    this.filterReport.group_users = session.data.group_users;
    this.filterReport.parent = session.data.parent;
    this.filterReport.fi = moment(this.fi).format('yyyy-MM-DD');
    this.filterReport.ff = moment(this.ff).format('yyyy-MM-DD');
    this.filterReport.name_user = session.data.nombre;
    this.filterReport.name_file = 'Reporte_notificaciones';

    this.reporte.getExcelNotificaciones(this.filterReport).subscribe(
      {
        next: (res) => {
          window.open(environment.apiBaseDocs + res.url);
          // this.reporte.downloadExcel(environment.apiBaseDocs + res.url).subscribe({
          //   next: (blob) => {
          //     console.log(blob);

          //   },
          //   error: (error) => {
          //     console.log(error);

          //   }
          // });
          this.spinner.hide();
        },
        error: (error) => {
          console.log(error);
          this.spinner.hide();
        }
      }
    );

  }
}
