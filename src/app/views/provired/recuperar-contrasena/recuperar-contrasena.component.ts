import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { Token } from 'src/app/constans/token-const';
import { MessageModel } from 'src/app/models/login/utils/messageModel';
import { UpdatePassLogin } from 'src/app/models/user/updatePassLogin';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.scss'],
})
export class RecuperarContrasenaComponent implements OnInit {
  public itemActive: number;

  public objectUpdate: UpdatePassLogin = new UpdatePassLogin();

  public siteKey: string = '';

  constructor(
    private spinner: NgxSpinnerService,
    private message: MessageService,
    private loginService: LoginServiceService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.siteKey = Token.TOKEN_AUTHORIZATION.API_KEY;
    this.itemActive = 0;
  }

  validarCorreo() {
    this.spinner.show();
    this.loginService.enviarCorreoToken(this.objectUpdate.user).subscribe({
      next: (res) => {
        this.spinner.hide();
        this.itemActive = 1;
        let message_model: MessageModel = new MessageModel(
          'success',
          `Proceso exitoso.`,
          res.msg
        );
        this.message.add(message_model);
      },
      error: (error) => {
        this.spinner.hide();
        let message_model: MessageModel = new MessageModel(
          'error',
          `${error.error.status}`,
          error.error.msg
        );
        this.message.add(message_model);
      },
    });
  }

  validarToken() {
    this.spinner.show();
    this.loginService.validarToken(this.objectUpdate).subscribe({
      next: (res) => {
        this.spinner.hide();
        this.itemActive = 2;
        let message_model: MessageModel = new MessageModel(
          'success',
          `Proceso exitoso.`,
          res.msg
        );
        this.message.add(message_model);
      },
      error: (error) => {
        this.spinner.hide();
        let message_model: MessageModel = new MessageModel(
          'error',
          `${error.error.status}`,
          error.error.msg
        );
        this.message.add(message_model);
      },
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
    this.objectUpdate.captcha = event;
  }

  actualizarUsuario() {
    this.spinner.show();
    this.loginService.updatePass(this.objectUpdate).subscribe({
      next: (res) => {
        this.spinner.hide();
        let message_model: MessageModel = new MessageModel(
          'success',
          `Proceso exitoso.`,
          res.msg
        );
        this.message.add(message_model);
        setTimeout(() => {
          this.route.navigate(['provired/access-provired/login']);
        }, 2500);
      },
      error: (error) => {
        this.spinner.hide();
        let message_model: MessageModel = new MessageModel(
          'error',
          `${error.error.status}`,
          error.error.msg
        );
        this.message.add(message_model);
      },
    });
  }
  cancelarProceso() {
    this.route.navigate(['provired/access-provired/login']);
  }
}
