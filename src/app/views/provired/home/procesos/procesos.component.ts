import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Proceso } from 'src/app/models/home/procesos/proceso';
import { ProcesosService } from 'src/app/services/home/procesos/procesos.service';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';
import { CorporacionesService } from 'src/app/services/utils/corporaciones.service';
import { DepartamentosService } from 'src/app/services/utils/departamentos.service';
import { DespachosService } from 'src/app/services/utils/despachos.service';
import { MunicipiosService } from 'src/app/services/utils/municipios.service';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';

@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.component.html',
  styleUrls: ['./procesos.component.scss']
})
export class ProcesosComponent implements OnInit {

  public ciudadModel: any;

  public municipioModel: any;

  public corporacionesModel: any;

  public despachosModel: any;

  public formProceso: FormGroup = new FormGroup({});

  public listDepartamentos: Array<any> = [];

  public listMunicipios: Array<any> = [];

  public listCorporaciones: Array<any> = [];

  public listDespachos: Array<any> = [];

  public newProceso: Proceso = new Proceso();


  constructor(
    public breadCrumService: BreadcrumbService,
    private departamentos: DepartamentosService,
    private municipio: MunicipiosService,
    private corporaciones: CorporacionesService,
    private despacho: DespachosService,
    private procesoService: ProcesosService,
    private sesion: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.breadCrumService.setItems(
      [
        { label: 'Procesos' }
      ]
    );

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
  }

  crearProceso(eve: any): void {
    this.newProceso.depto = this.ciudadModel.IdDep;
    this.newProceso.municipio = this.municipioModel.IdMun;
    this.newProceso.corporacion = this.corporacionesModel.IdCorp;
    this.newProceso.despacho = this.despachosModel.IdDes;
    this.newProceso.suscriptor = this.sesion.getSession().user;

    this.procesoService.createProceso(this.newProceso).subscribe(
      {
        next: (res) => {
          console.log(res);
        },
        error: (error) => {
          console.log(error);
        }
      }
    )
  }

  clearFormulario(): void {
    this.newProceso = new Proceso();
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
}
