import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';
import { CorporacionesService } from 'src/app/services/utils/corporaciones.service';
import { DepartamentosService } from 'src/app/services/utils/departamentos.service';
import { DespachosService } from 'src/app/services/utils/despachos.service';
import { MunicipiosService } from 'src/app/services/utils/municipios.service';

@Component({
  selector: 'app-historial-procesos',
  templateUrl: './historial-procesos.component.html',
  styleUrls: ['./historial-procesos.component.scss']
})
export class HistorialProcesosComponent implements OnInit {

  public ciudadModel: any;

  public municipioModel: any;

  public corporacionesModel: any;

  public despachosModel: any;

  public fb: FormGroup = new FormGroup({});

  public listDepartamentos: Array<any> = [];

  public listMunicipios: Array<any> = [];

  public listCorporaciones: Array<any> = [];

  public listDespachos: Array<any> = [];

  constructor(public breadCrumService: BreadcrumbService,
    private departamentos: DepartamentosService,
    private municipio: MunicipiosService,
    private corporaciones: CorporacionesService,
    private despacho: DespachosService) {

  }

  ngOnInit(): void {
    this.breadCrumService.setItems(
      [
        { label: 'Reportes' },
        { label: 'Historial de procesos' }
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

  consultarHistorial(event: any) {
    console.log(this.ciudadModel);

  }
}
