import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { MessageModel } from 'src/app/models/login/utils/messageModel';
import { UpdatePass } from 'src/app/models/user/updatePass';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public ses: any;

  public showChangePass: boolean = false;

  public changePass: UpdatePass = new UpdatePass();

  public siteKey: string = '';

  constructor(
    public breadCrumService: BreadcrumbService,
    private sesion: SessionStorageService,
    private userService: UserServiceService,
    private spinner: NgxSpinnerService,
    private message: MessageService
  ) {}

  ngOnInit(): void {
    this.breadCrumService.setItems([
      { label: 'Usuarios' },
      { label: 'Perfil' },
    ]);

    this.ses = this.sesion.getStorage('user', 'json');
  }

  changeMenu(event): void {
    switch (event.label) {
      case 'Cambiar contraseña':
        this.showChangePass = true;
        break;
      default:
        break;
    }
  }

  updatePassword(): void {
    this.spinner.show();
    this.changePass.tipousuario = this.ses.tipousuario;
    this.changePass.user = this.ses.user;

    this.userService.updatePass(this.changePass).subscribe({
      next: (res) => {
        let message_model: MessageModel = new MessageModel(
          'success',
          `!Exito`,
          `${res.msg}`
        );
        this.message.add(message_model);
        this.spinner.hide();
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
}
