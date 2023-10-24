import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { EliminarProcesoModel } from 'src/app/models/home/procesos/eliminarProceso';
import { FilterProceso } from 'src/app/models/home/procesos/filterProcesos';
import { SearchProcesos } from 'src/app/models/interfaces/filterProcesosGenerales';
import { EliminarProcesosService } from 'src/app/services/home/reportes/eliminar-procesos.service';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';
import { Token } from 'src/app/constans/token-const';
import { SendCaptcha } from 'src/app/models/home/utils/sendCaptcha';
import { MessageModel } from 'src/app/models/login/utils/messageModel';
import { CaptchaSendDataModel } from 'src/app/models/home/procesos/captchaSendData';

@Component({
  selector: 'app-eliminar-procesos',
  templateUrl: './eliminar-procesos.component.html',
  styleUrls: ['./eliminar-procesos.component.scss']
})
export class EliminarProcesosComponent implements OnInit {

  public formSearchProcess: SearchProcesos = {} as SearchProcesos;

  public fb: FormGroup;

  public genericFilter: FilterProceso = new FilterProceso();

  public listEliminar: Array<EliminarProcesoModel> = new Array<EliminarProcesoModel>;

  public selectedItemList: Array<EliminarProcesoModel> = new Array<EliminarProcesoModel>;

  public showModalD: boolean = false;

  public siteKey: string = "";

  public sendCaptcha: SendCaptcha = new SendCaptcha();

  constructor(
    public breadCrumService: BreadcrumbService,
    private session: SessionStorageService,
    private spinner: NgxSpinnerService,
    private message: MessageService,
    private eliminarSerivces: EliminarProcesosService
  ) {
    this.fb = new FormGroup({});
  }

  ngOnInit(): void {

    this.siteKey = Token.TOKEN_AUTHORIZATION.API_KEY;
    this.breadCrumService.setItems(
      [
        { label: 'Reportes' },
        { label: 'Eliminación masiva de procesos' }
      ]
    );

    this.spinner.show();

    let ses = this.session.getStorage('user', 'json');
    this.genericFilter = new FilterProceso();

    this.genericFilter.group_users = ses.data.group_users;
    this.genericFilter.parent = ses.data.parent;
    this.genericFilter.demandante_demandado = "";
    this.genericFilter.radicacion = "";

    this.eliminarSerivces.getListEliminarProcesos(this.genericFilter).subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.listEliminar = res;
        }
        this.spinner.hide();
      },
      error: (error) => {
        this.spinner.hide();
        console.log(error);

      }
    });
  }

  consultarProcesos(): void {
    this.spinner.show();
    let ses = this.session.getStorage('user', 'json');
    this.genericFilter = new FilterProceso();

    this.genericFilter.group_users = ses.data.group_users;
    this.genericFilter.parent = ses.data.parent;
    this.genericFilter.demandante_demandado = this.formSearchProcess.demandante ? this.formSearchProcess.demandante : "";
    this.genericFilter.radicacion = this.formSearchProcess.radicado ? this.formSearchProcess.radicado : "";

    this.eliminarSerivces.getListEliminarProcesos(this.genericFilter).subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.listEliminar = res;
        }
        this.spinner.hide();
      },
      error: (error) => {
        console.log(error);
        this.spinner.hide();

      }
    });
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

  selectedItems(selecteditems: Array<EliminarProcesoModel>) {
    this.selectedItemList = selecteditems;
  }

  eliminarProcesos() {
    this.spinner.show();
    let sendData = new CaptchaSendDataModel();
    if (this.sendCaptcha.captcha) {

      let ses = this.session.getStorage('user', 'json');
      let listIdData: Array<any> = new Array<any>;

      this.selectedItemList.forEach(item => {
        let objectId = {
          id: item.id_userope
        }
        listIdData.push(objectId);
      });
      sendData.data = listIdData;
      sendData.captcha = this.sendCaptcha.captcha;
      sendData.group_users = ses.data.group_users;
      sendData.parent = ses.data.parent;
      sendData.name_user = ses.data.nombre;
      sendData.username = ses.data.username;

      this.eliminarSerivces.deleteProcesos(sendData).subscribe(
        {
          next: (res) => {
            this.spinner.hide();
            console.log(res);

          },
          error: (error) => {
            this.spinner.hide();
            console.log(error);

          }
        }
      );
      this.showModalD = false;
      this.sendCaptcha = new SendCaptcha();

    } else {
      this.spinner.hide();
      let message_model: MessageModel = new MessageModel(
        'error',
        `No ha completado el formulario.`,
        `Por es necesario completar el formlario para continuar.`
      );
      this.message.add(message_model);
    }

  }

}
