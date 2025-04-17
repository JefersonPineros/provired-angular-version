import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GeneralConst } from 'src/app/constans/general-const';
import { HistorialProcesosModel } from 'src/app/models/home/procesos/historialProcesosFilter';
import { UserTranfer } from 'src/app/models/home/procesos/userTransfer';
import { RangoModel } from 'src/app/models/home/utils/rango';
import { EliminarProcesosService } from 'src/app/services/home/reportes/eliminar-procesos.service';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';
import { CorporacionesService } from 'src/app/services/utils/corporaciones.service';
import { DepartamentosService } from 'src/app/services/utils/departamentos.service';
import { DespachosService } from 'src/app/services/utils/despachos.service';
import { MunicipiosService } from 'src/app/services/utils/municipios.service';

@Component({
  selector: 'app-filters-dinamics',
  templateUrl: './filters-dinamics.component.html',
  styleUrls: ['./filters-dinamics.component.scss']
})
export class FiltersDinamicsComponent implements OnChanges {

  @Output() eventFilter: EventEmitter<any> = new EventEmitter<any>();

  @Input() showRadicacion: boolean = true;

  @Input() showSuscriptores: boolean = true;

  @Input() showRango: boolean = true;

  @Input() userID: number = 0;

  public listUsers: Array<UserTranfer> = new Array<UserTranfer>();

  public listRango: Array<any> = GeneralConst.RANGO;

  public userSelected: UserTranfer = new UserTranfer();

  public rangoModel: any;

  public ciudadModel: any;

  public municipioModel: any;

  public corporacionesModel: any;

  public despachosModel: any;

  public formProceso: FormGroup = new FormGroup({});

  public listDepartamentos: Array<any> = [];

  public listMunicipios: Array<any> = [];

  public listCorporaciones: Array<any> = [];

  public listDespachos: Array<any> = [];

  public filterProcesos: HistorialProcesosModel = new HistorialProcesosModel();

  constructor(public breadCrumService: BreadcrumbService,
    private departamentos: DepartamentosService,
    private municipio: MunicipiosService,
    private corporaciones: CorporacionesService,
    private despacho: DespachosService,
    private userService: EliminarProcesosService) {
    this.departamentos.getDepartamento().subscribe(
      {
        next: (res) => {
          this.listDepartamentos = res;
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
    this.listUsers = [];
  }

  ngOnChanges(changes) {
    if (changes.userID) {

      if (this.userID > 0) {
        this.userService.getUsersTransfer(this.userID!).subscribe(
          {
            next: (res) => {
              this.listUsers = res;
              console.log(res);
            },
            error: (error) => {
              console.log(error);
            }
          }
        );
      }
    }
  }

  clearFormulario(): void {
    this.despachosModel = null;
    this.corporacionesModel = null;
    this.municipioModel = null;
    this.listMunicipios = [];
    this.listCorporaciones = [];
    this.listDespachos = [];
  }

  departamentoChange(): void {
    if (this.ciudadModel !== null) {
      this.municipio.getMunicipioPorDep(this.ciudadModel.IdDep).subscribe(
        {
          next: (res) => {
            this.listMunicipios = res;
          },
          error: (error) => {
            console.log(error);
          }
        }
      );
    } else {
      this.despachosModel = null;
      this.corporacionesModel = null;
      this.municipioModel = null;
      this.listMunicipios = [];
      this.listCorporaciones = [];
      this.listDespachos = [];
    }
  }

  municipioChange(): void {
    if (this.municipioModel !== null) {
      this.corporaciones.getCorporacionesPorMunicipio(this.municipioModel.IdMun).subscribe(
        {
          next: (res) => {
            this.listCorporaciones = res
          },
          error: (error) => {
            console.log(error);
          }
        }
      );
    } else {
      this.corporacionesModel = null;
      this.despachosModel = null;
      this.listCorporaciones = [];
      this.listDespachos = [];
    }
  }

  corporacionesChange(): void {
    if (this.corporacionesModel !== null) {
      this.despacho.getDespachoPorCorp(this.corporacionesModel.IdCorp).subscribe(
        {
          next: (res) => {
            this.listDespachos = res;
          },
          error: (error) => {
            console.log(error);
          }
        }
      );
    } else {
      this.despachosModel = null;
      this.listDespachos = [];
    }
  }

  consultarHistorial() {
    if (this.userSelected) {
      this.filterProcesos.userChild = this.userSelected.cedula_nit;
    } else {
      this.filterProcesos.userChild = undefined;
    }

    if (this.rangoModel) {
      this.filterProcesos.rango = this.rangoModel.key;
    } else {
      this.filterProcesos.rango = undefined;
    }

    if (this.ciudadModel) {
      this.filterProcesos.depto = this.ciudadModel.IdDep;
    } else {
      this.filterProcesos.depto = undefined;
    }
    if (this.municipioModel) {
      this.filterProcesos.municipio = this.municipioModel.IdMun;
    } else {
      this.filterProcesos.municipio = undefined;
    }
    if (this.corporacionesModel) {
      this.filterProcesos.corporacion = this.corporacionesModel.IdCorp;
    } else {
      this.filterProcesos.corporacion = undefined;
    }
    if (this.despachosModel) {
      this.filterProcesos.despacho = this.despachosModel.IdDes;
    } else {
      this.filterProcesos.despacho = undefined;
    }

    this.eventFilter.emit(this.filterProcesos);

  }
}
