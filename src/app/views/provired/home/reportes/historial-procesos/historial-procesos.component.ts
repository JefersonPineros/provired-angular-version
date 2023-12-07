import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { HistorialModel } from 'src/app/models/home/procesos/historialProcesos';
import { HistorialProcesosModel } from 'src/app/models/home/procesos/historialProcesosFilter';
import { HistorialActuacion } from 'src/app/services/home/reportes/historial-actuación';
import { HistorialProcesosService } from 'src/app/services/home/reportes/historial-procesos.service';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';
import { CorporacionesService } from 'src/app/services/utils/corporaciones.service';
import { DepartamentosService } from 'src/app/services/utils/departamentos.service';
import { DespachosService } from 'src/app/services/utils/despachos.service';
import { MunicipiosService } from 'src/app/services/utils/municipios.service';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-historial-procesos',
  templateUrl: './historial-procesos.component.html',
  styleUrls: ['./historial-procesos.component.scss'],
})
export class HistorialProcesosComponent implements OnInit {
  public filter: HistorialProcesosModel = new HistorialProcesosModel();

  public generalRows: number = 30;

  public totalItems: number = 0;

  public listHistorico: Array<HistorialModel> = new Array<HistorialModel>();

  public listActuacion: Array<HistorialActuacion> =
    new Array<HistorialActuacion>();

  public itemSelected: HistorialModel = new HistorialModel();

  public showModal: boolean = false;

  public totalRows: number = 0;

  public showDescriptionData: boolean = false;

  public actuacionSelected: HistorialActuacion = new HistorialActuacion();

  constructor(
    public breadCrumService: BreadcrumbService,
    public historialService: HistorialProcesosService,
    public session: SessionStorageService,
    private spinner: NgxSpinnerService,
    private message: MessageService
  ) {}

  ngOnInit(): void {
    this.breadCrumService.setItems([
      { label: 'Reportes' },
      { label: 'Historial de procesos' },
    ]);
  }

  filterProceso(event: HistorialProcesosModel) {
    console.log(event);

    this.spinner.show();
    this.filter = event;
    let ses = this.session.getStorage('user', 'json');

    this.filter.group_users = ses.data.group_users;
    this.filter.parent = ses.data.parent;
    this.filter.from = 0;
    this.filter.rows = this.generalRows;

    this.historialService.filterHistorial(this.filter).subscribe({
      next: (res) => {
        this.listHistorico = res.data;
        this.totalItems = res.count_rows;
        this.spinner.hide();
      },
      error: (error) => {
        console.log(error);
        this.spinner.hide();
      },
    });
  }

  changePage(event: any) {
    this.spinner.show();
    this.filter = event;
    let ses = this.session.getStorage('user', 'json');

    this.filter.group_users = ses.data.group_users;
    this.filter.parent = ses.data.parent;
    this.filter.from = event.first;
    this.filter.rows = this.generalRows;

    this.historialService.filterHistorial(this.filter).subscribe({
      next: (res) => {
        this.listHistorico = res.data;
        this.totalItems = res.count_rows;
        this.spinner.hide();
      },
      error: (error) => {
        console.log(error);
        this.spinner.hide();
      },
    });
  }

  consultarActuacion(event?: any, page?: any): void {
    this.showDescriptionData = false;

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

  downloadDoc(url: string) {
    if (url) {
      let finalUrl = url.substring(0);
      window.open(environment.apiBaseDocs + '/autos/' + finalUrl);
    }
  }

  showDescription(event?: any): void {
    console.log(event);

    if (event) {
      this.actuacionSelected = event;
    }

    if (this.showDescriptionData) {
      this.showDescriptionData = false;
    } else {
      this.showDescriptionData = true;
    }
  }
}
