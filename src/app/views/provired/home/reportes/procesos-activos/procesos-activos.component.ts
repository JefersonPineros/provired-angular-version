import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterProceso } from 'src/app/models/home/procesos/filterProcesos';
import { ProcesosActivosService } from 'src/app/services/home/reportes/procesos-activos.service';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';
import { Token } from 'src/app/constans/token-const';
import { ProcesoActivo } from 'src/app/models/home/procesos/procesoActivo';
import { Audiencias } from 'src/app/models/audiencias/audiencias';
import { AudienciaService } from 'src/app/services/home/audiencia/audiencia.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { MessageModel } from 'src/app/models/login/utils/messageModel';
import { environment } from 'src/environments/environment';
import { FilterGeneral } from 'src/app/models/home/reports/filterGeneral';
import { InformeProcesal } from 'src/app/models/home/reports/informeProcesal';
import { MultiData } from 'src/app/models/home/reports/multiData';
import { DataInfoProcesal } from 'src/app/models/home/reports/dataInfoProcesal';
import { CmpInfoProcesal } from 'src/app/models/home/reports/cmpInfoProcesal';
import { SendCaptcha } from 'src/app/models/home/utils/sendCaptcha';
import { CaptchaSendDataModel } from 'src/app/models/home/procesos/captchaSendData';

import * as moment from 'moment';
@Component({
  selector: 'app-procesos-activos',
  templateUrl: './procesos-activos.component.html',
  styleUrls: ['./procesos-activos.component.scss'],
})
export class ProcesosActivosComponent implements OnInit {
  public data: Array<any> = new Array<any>();

  public fb: FormGroup;

  public fbDelete: FormGroup;

  public fbProgramar: FormGroup;

  public startPage: Object = { first: 0, rows: 30 };

  public genericFilter: FilterProceso = new FilterProceso();

  public totalRecords: number = 0;

  public loadingTable: boolean = true;

  public siteKey: string = '';

  public showModalD: boolean = false;

  public showModalInfo: boolean = false;

  public selectedItem: ProcesoActivo = new ProcesoActivo();

  public updateProceso: Audiencias = new Audiencias();

  public showModalProgramar: boolean = false;

  public filterProceso: FilterProceso = new FilterProceso();

  public urlFinal: string = '';

  public infoProcesal: InformeProcesal = new InformeProcesal();

  public nameDespachoModal: string = '';

  public radicadoModal: string = '';

  public fbInfProcesal: FormGroup;

  public formularioBuilder: FormBuilder;

  public formGroup: any = {};

  public formValid: any = {
    vistaForm: false,
  };

  public sendCaptcha: SendCaptcha = new SendCaptcha();

  constructor(
    public breadCrumService: BreadcrumbService,
    private procesoActivoService: ProcesosActivosService,
    private session: SessionStorageService,
    private audienciaService: AudienciaService,
    private spinner: NgxSpinnerService,
    private message: MessageService
  ) {
    this.formularioBuilder = new FormBuilder();
    this.infoProcesal.cmpInfoProcesal = new Array<CmpInfoProcesal>();
    this.fb = new FormGroup({});
    this.fbDelete = new FormGroup({});
    this.fbProgramar = new FormGroup({});
    this.formGroup.fbProgramar = this.formularioBuilder.group({});
    this.formGroup.fbInfProcesal = this.formularioBuilder.group({});
  }

  ngOnInit(): void {
    this.breadCrumService.setItems([
      { label: 'Reportes' },
      { label: 'Listado procesos activos' },
    ]);
    this.siteKey = Token.TOKEN_AUTHORIZATION.API_KEY;
    this.searchActivos(this.startPage);
  }

  consultarProcesos(): void {
    this.searchActivos(this.startPage);
  }

  searchActivos(page: any): void {
    this.loadingTable = true;
    let ses = this.session.getStorage('user', 'json');

    this.genericFilter.from = page.first;
    this.genericFilter.group_users = ses.data.group_users;
    this.genericFilter.parent = ses.data.parent;
    this.genericFilter.rows = page.rows;
    this.genericFilter.demandante_demandado = this.genericFilter
      .demandante_demandado
      ? this.genericFilter.demandante_demandado
      : '';
    this.genericFilter.radicacion = this.genericFilter.radicacion
      ? this.genericFilter.radicacion
      : '';
    this.procesoActivoService
      .getListProcesoActivo(this.genericFilter)
      .subscribe({
        next: (res) => {
          this.loadingTable = false;
          this.totalRecords = res.count_rows;
          this.data = res.data;
        },
        error: (error) => {
          this.loadingTable = false;
          console.log(error);
        },
      });
  }

  changePage(event: any): void {
    this.searchActivos(event);
  }

  deleteItem(item: any) {
    this.showModalD = true;
    this.sendCaptcha.id = item.id_userope;
  }

  programarProceso(proceso: ProcesoActivo) {
    this.selectedItem = proceso;
    let sesion = this.session.getStorage('user', 'json');

    this.updateProceso.demandante = proceso.demandante;
    this.updateProceso.demandado = proceso.demandado;
    this.updateProceso.username = sesion.data.username;
    this.updateProceso.despacho = proceso.despacho;
    this.updateProceso.radicacion = proceso.radicacion;
    this.updateProceso.username = sesion.data.username;
    this.updateProceso.ciudad = proceso.municipio;
    this.updateProceso.proceso = proceso.proceso;
    this.updateProceso.idplanilla = 0;

    this.showModalProgramar = true;
  }

  programarAudiencia() {
    this.spinner.show();
    this.audienciaService.createAudiencia(this.updateProceso).subscribe({
      next: (res) => {
        this.spinner.hide();
        let message_model: MessageModel = new MessageModel(
          'success',
          `!Exito`,
          `${res.msg}`
        );
        this.message.add(message_model);
        this.showModalProgramar = false;
      },
      error: (error) => {
        this.spinner.hide();
        let message_model: MessageModel = new MessageModel(
          'error',
          `!Upss`,
          `${error.error.msg}`
        );
        this.message.add(message_model);
      },
    });
  }

  downloadReport() {
    this.spinner.show();
    let session = this.session.getStorage('user', 'json');

    this.filterProceso.username = session.data.username;
    this.filterProceso.name_user = session.data.nombre;
    this.filterProceso.name_file = 'Reporte_listado_activos';
    this.filterProceso.group_users = session.data.group_users;
    this.filterProceso.parent = session.data.parent;
    this.filterProceso.demandante_demandado = '';
    this.filterProceso.radicacion = '';

    console.log(this.filterProceso);

    this.procesoActivoService.getReportActivos(this.filterProceso).subscribe({
      next: (res) => {
        if (res.status == 200) {
          let listUrl = res.url.split('/');
          this.urlFinal = environment.apiBaseDocs + res.url;
          this.spinner.hide();

          fetch(this.urlFinal)
            .then((response) => response.blob())
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
        this.spinner.hide();
        let message_model: MessageModel = new MessageModel(
          'error',
          `Error ${error.error.status}`,
          `${error.error.msg}`
        );
        this.message.add(message_model);
        console.log(error);
      },
    });
  }

  downloadReportInfP() {
    this.spinner.show();
    let session = this.session.getStorage('user', 'json');

    this.filterProceso.username = session.data.username;
    this.filterProceso.name_user = session.data.nombre;
    this.filterProceso.name_file = 'Reporte_Informe_procesal';
    this.filterProceso.group_users = session.data.group_users;
    this.filterProceso.parent = session.data.parent;
    this.filterProceso.radicacion = this.infoProcesal.radicado;
    this.filterProceso.despacho = this.infoProcesal.despacho;

    console.log(this.filterProceso);

    this.procesoActivoService
      .getReportInfoProcesal(this.filterProceso)
      .subscribe({
        next: (res) => {
          if (res.status == 200) {
            let listUrl = res.url.split('/');
            this.urlFinal = environment.apiBaseDocs + res.url;
            this.spinner.hide();

            fetch(this.urlFinal)
              .then((response) => response.blob())
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
          this.spinner.hide();
          let message_model: MessageModel = new MessageModel(
            'error',
            `Error ${error.error.status}`,
            `${error.error.msg}`
          );
          this.message.add(message_model);
          console.log(error);
        },
      });
  }

  openInformeProcesal(value: any) {
    this.spinner.show();
    this.showModalInfo = true;
    let filter = new FilterGeneral();
    filter.radicacion = value.radicacion;
    filter.despacho = value.despacho;
    this.nameDespachoModal = value.name_despacho;
    this.radicadoModal = value.radicacion;

    this.procesoActivoService.getStructureInfoProcesal(filter).subscribe({
      next: (res) => {
        this.infoProcesal = res;

        this.infoProcesal.despacho = value.despacho;
        this.infoProcesal.radicado = value.radicacion;

        if (this.infoProcesal.multiData?.length == 0) {
          this.infoProcesal.cmpInfoProcesal!.forEach((element) => {
            if (element.multi_data == 1) {
              let itemMultidata = new MultiData();
              itemMultidata.id_cmp_informe_procesal = element.id;
              this.infoProcesal.multiData?.push(itemMultidata);
            }
          });
        }

        if (!this.infoProcesal.data) {
          this.infoProcesal.data = new DataInfoProcesal();
        }
        console.log(this.infoProcesal);

        this.spinner.hide();
      },
      error: (error) => {
        console.log(error);
        this.spinner.hide();
      },
    });
  }

  convertToList(value: string): Array<any> {
    return value.split(';');
  }

  createMultiDataObject(cmp_informe_procesal: number) {
    let itemMultidata = new MultiData();
    itemMultidata.id_cmp_informe_procesal = cmp_informe_procesal;

    this.infoProcesal.multiData?.push(itemMultidata);
  }

  deleteMultiDataObject(index: any, idCmp: any) {
    let isDelete = this.infoProcesal.multiData.filter((item) => {
      return item.id_cmp_informe_procesal == idCmp;
    });

    if (isDelete.length > 1) {
      this.infoProcesal.multiData.splice(index, 1);
    }
  }

  sendDinamycForm() {
    if (this.validarFormulario()) {
      let getSession = this.session.getSession();
      this.infoProcesal.usuario = getSession.user;

      this.infoProcesal.multiData.forEach((item) => {
        if (item.id_cmp_informe_procesal == 1) {
          item.value = moment(item.value).format('yyyy-MM-DD');
        }
      });
      this.procesoActivoService
        .insertInformeProcesal(this.infoProcesal)
        .subscribe({
          next: (res) => {
            if (res.status == 200) {
              let message_model: MessageModel = new MessageModel(
                'success',
                `Proceso realizado exitosamente.`,
                `${res.msg}`
              );
              this.message.add(message_model);
            } else {
              let message_model: MessageModel = new MessageModel(
                'error',
                `Error: se ha presentado un error `,
                `${res.msg}`
              );
              this.message.add(message_model);
            }
          },
          error: (error) => {
            let message_model: MessageModel = new MessageModel(
              'error',
              `Error: se ha presentado un error `,
              `${error.error.msg}`
            );
            this.message.add(message_model);
          },
        });
    }
  }

  validarFormulario(campoForm = 'vistaForm'): boolean {
    if (this.formGroup.fbInfProcesal.valid) {
      return true;
    } else {
      this.formValid[campoForm] = true;
      let message_model: MessageModel = new MessageModel(
        'error',
        `Error: Completa los campos requeridos `,
        `El sistema validó que te faltan campos por completar, por favor intenta de nuevo.`
      );
      this.message.add(message_model);

      return false;
    }
  }

  expireCaptchat(event: any) {
    let message_model: MessageModel = new MessageModel(
      'error',
      `Token expirado `,
      `Tiempo minimo del token a expirado.`
    );
    this.message.add(message_model);
  }

  acceptedCaptcha(event: any) {
    this.sendCaptcha.captcha = event;
  }

  deleteProcesoActivo() {
    if (this.sendCaptcha.captcha) {
      let ses = this.session.getStorage('user', 'json');
      let sendData = new CaptchaSendDataModel();
      sendData.captcha = this.sendCaptcha.captcha;
      sendData.id = this.sendCaptcha.id;
      sendData.group_users = ses.data.group_users;
      sendData.parent = ses.data.parent;
      sendData.name_user = ses.data.nombre;
      sendData.username = ses.data.username;

      this.procesoActivoService.deleteProcesoActivo(sendData).subscribe({
        next: (res) => {
          let message_model: MessageModel = new MessageModel(
            'success',
            `Accion realizada correctamente: ${res.status}`,
            `${res.msg}`
          );
          this.message.add(message_model);
          this.showModalD = false;
          window.location.reload();
        },
        error: (error) => {
          let message_model: MessageModel = new MessageModel(
            'error',
            `Error `,
            `${error.error.msg}`
          );
          this.message.add(message_model);
        },
      });
    } else {
      let message_model: MessageModel = new MessageModel(
        'warn',
        `Formulario incompleto.`,
        `Es necesario completar el formulario para continuar.`
      );
      this.message.add(message_model);
    }
  }
}
