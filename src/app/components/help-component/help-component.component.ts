import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { SendError } from 'src/app/models/home/utils/sendError';
import { MessageModel } from 'src/app/models/login/utils/messageModel';
import { HelpReportService } from 'src/app/services/home/reportes/help-report.service';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';

@Component({
  selector: 'app-help-component',
  templateUrl: './help-component.component.html',
  styleUrls: ['./help-component.component.scss'],
})
export class HelpComponentComponent {
  public sendError: SendError;

  constructor(
    private message: MessageService,
    private spinner: NgxSpinnerService,
    private helpService: HelpReportService,
    private session: SessionStorageService
  ) {
    this.sendError = new SendError();
  }

  selectImage(event: any) {
    this.sendError.image = event.currentFiles[0];
    this.sendError.nameImage = this.sendError.image.name;
  }

  sendErrorEvent() {
    let ses = this.session.getSession();
    this.spinner.show();
    if (this.sendError.asusto && this.sendError.descripcion) {
      this.helpService.sendError(this.sendError, ses.user).subscribe({
        next: (res) => {
          this.spinner.hide();
          let message_model: MessageModel = new MessageModel(
            'success',
            `Accion realizada con exito.`,
            `${res.msg}`
          );
          this.message.add(message_model);
          this.sendError = new SendError();
        },
        error: (error) => {
          this.spinner.hide();
          let message_model: MessageModel = new MessageModel(
            'error',
            `Se ha presentado un error.`,
            `${error.error.msg}`
          );
          this.message.add(message_model);
          this.spinner.hide();
        },
      });
    } else {
      let message_model: MessageModel = new MessageModel(
        'error',
        `Formulario incompleto`,
        `Es necesario completar el formulario`
      );
      this.message.add(message_model);
      this.spinner.hide();
    }
  }
}
