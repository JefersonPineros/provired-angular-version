import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';
import * as moment from 'moment';
import { FilterDateModel } from 'src/app/models/home/notificaciones/filterDate';
import { ReporteNotificacionesService } from 'src/app/services/home/notificaciones/reporte-notificaciones.service';
import { ReporteNotificaciones } from 'src/app/models/home/notificaciones/ReporteNotificacion';

@Component({
  selector: 'app-report-notificaciones',
  templateUrl: './report-notificaciones.component.html',
  styleUrls: ['./report-notificaciones.component.scss']
})
export class ReportNotificacionesComponent implements OnInit {

  constructor(
    public breadCrumService: BreadcrumbService,
    private sessionService: SessionStorageService,
    private spinner: NgxSpinnerService,
    private reporte: ReporteNotificacionesService,
    private message: MessageService
  ) { }

  public modelFilter: FilterDateModel = new FilterDateModel();

  public fi: Date = new Date();

  public ff: Date = new Date();

  public listReport: Array<ReporteNotificaciones> = new Array<ReporteNotificaciones>();

  public totalRecords: number = 0;

  public today: string = '';

  ngOnInit(): void {

    this.breadCrumService.setItems(
      [
        { label: 'Reporte de notificaciones' }
      ]
    );

  }

  findReport(): void {

    let sesion = this.sessionService.getStorage('user', 'json');
    this.modelFilter.parent = sesion.data.parent;
    this.modelFilter.from = 0;
    this.modelFilter.rows = 30;
    this.modelFilter.username = sesion.user;
    this.modelFilter.group_users = sesion.data.group_users;
    this.modelFilter.fi = moment(this.fi).format('yyyy-MM-DD');
    this.modelFilter.ff = moment(this.ff).format('yyyy-MM-DD');

    this.reporte.getReporteNotificaciones(this.modelFilter).subscribe(
      {
        next: (res) => {
          this.totalRecords = res.count_rows;
          this.listReport = res.data
        },
        error: (res) => {
          console.log(res);
        }
      }
    );
  }

  changePageAction(event: any): void {

    this.modelFilter.from = event.first;

    this.reporte.getReporteNotificaciones(this.modelFilter).subscribe(
      {
        next: (res) => {
          this.totalRecords = res.count_rows;
          this.listReport = res.data
        },
        error: (res) => {
          console.log(res);
        }
      }
    );

  }

}
