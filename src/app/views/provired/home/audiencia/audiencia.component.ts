import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { Audiencias } from 'src/app/models/audiencias/audiencias';
import { ConsultarAudiencia } from 'src/app/models/audiencias/getAudiencia';
import { ResponseLogin } from 'src/app/models/login/responseLogin';
import { MessageModel } from 'src/app/models/login/utils/messageModel';
import { AudienciaService } from 'src/app/services/home/audiencia/audiencia.service';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';

@Component({
  selector: 'app-audiencia',
  templateUrl: './audiencia.component.html',
  styleUrls: ['./audiencia.component.scss']
})
export class AudienciaComponent implements OnInit {

  public formConsultar: FormGroup = new FormGroup({});

  public fechaDesde: Date | undefined;

  public fechaHasta: Date | undefined;

  public consultarAud = new ConsultarAudiencia();

  public sesion: ResponseLogin = new ResponseLogin();

  public listAudiencias: Array<Audiencias> = new Array<Audiencias>();

  public visibleModal: boolean = false;

  public formAudiencia: FormGroup = new FormGroup({});

  public audiencia: Audiencias = new Audiencias();

  constructor(
    public breadCrumService: BreadcrumbService,
    private sessionService: SessionStorageService,
    private audiencias: AudienciaService,
    private spinner: NgxSpinnerService,
    private message: MessageService
  ) {
    this.sesion = this.sessionService.getSession();
  }

  ngOnInit(): void {
    this.breadCrumService.setItems(
      [
        { label: 'Mis audienciencias y vencimientos' }
      ]
    );
  }

  modelChange(even: any, model: string): void {
    if (model == 'fi') {
      this.consultarAud.fi = this.fechaDesde;
    } else {
      this.consultarAud.ff = this.fechaHasta;
    }
  }

  consultarAudiencia(): void {
    this.spinner.show();
    this.consultarAud.username = this.sesion.user;
    this.audiencias.getListAudiencias(this.consultarAud).subscribe(
      {
        next: (res) => {
          this.spinner.hide()
          if (res.length > 0) {
            this.listAudiencias = res;
          } else {
            this.listAudiencias = [];
            let message_model: MessageModel = new MessageModel(
              'warn',
              `No hay registros`,
              `No se encontraron resultado en las fechas señaladas`
            );
            this.message.add(message_model);
          }
        },
        error: (error) => {
          this.spinner.hide()
          console.log(error);
        }
      }
    );
  }

  eliminarRegistro(event: any): void {
    this.spinner.show();
    this.audiencias.deleteAudiencia({ username: event.username, id_vencimiento: event.id_vencimiento }).subscribe(
      {
        next: (res) => {
          this.spinner.hide();
          console.log(res);
          let message_model: MessageModel = new MessageModel(
            'success',
            `Exito!`,
            `Se ha realizado la accion de manera exitosa.`
          );
          this.consultarAudiencia();
          this.message.add(message_model);
        },
        error: (error) => {
          console.log(error);

          this.spinner.hide();
          let message_model: MessageModel = new MessageModel(
            'error',
            `Error ${error.error.status} `,
            `${error.error.msg}`
          );
          this.message.add(message_model);
        }
      }
    );
  }

  openRegistro(element: any): void {
    this.audiencia = element;
    this.visibleModal = true;
  }

  actualizarRegistro(): void {
    this.spinner.show();
    let updateItem = {
      username: '',
      fecha_vence_terminos: new Date(),
      id_vencimiento: 0,
      descripcion_vence_terminos: ''
    };
    updateItem.username = this.audiencia.username!;
    updateItem.fecha_vence_terminos = this.audiencia.fecha_vence_terminos!;
    updateItem.id_vencimiento = this.audiencia.id_vencimiento!;
    updateItem.descripcion_vence_terminos = this.audiencia.descripcion_vence_terminos!;

    this.audiencias.updateAudiencia(updateItem).subscribe(
      {
        next: (res) => {
          this.spinner.hide();
          let message_model: MessageModel = new MessageModel(
            'success',
            `Exito!`,
            `${res.msg}`
          );
          this.message.add(message_model);
          this.consultarAudiencia();
          this.visibleModal = false;
        },
        error: (error) => {
          this.spinner.hide();
          let message_model: MessageModel = new MessageModel(
            'error',
            `Error ${error.error.status}`,
            `${error.error.msg}`
          );
          this.message.add(message_model);
        }
      }
    );

  }

  cancelarModal(): void {
    this.visibleModal = false;
  }

}
