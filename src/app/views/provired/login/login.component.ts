import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorLogin } from 'src/app/models/login/error_login';
import { Login } from 'src/app/models/login/login';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { MessageModel } from 'src/app/models/login/utils/messageModel';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup = new FormGroup({});

  public loginModel: Login = new Login();

  public error_login: ErrorLogin = new ErrorLogin();

  constructor(
    private accessLogin: LoginServiceService,
    private route: Router,
    private spinner: NgxSpinnerService,
    private message: MessageService,
    private session: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.session.clearAllSession();
  }

  login(): void {
    this.spinner.show();
    this.accessLogin.login(this.loginModel).subscribe({

      next: (resp) => {
        this.spinner.hide();
        setTimeout(() => {
          this.route.navigate(['provired/home-provired']);
        }, 500);
      },
      error: (error) => {
        if (error instanceof HttpErrorResponse) {
          this.spinner.hide();
          let message_model: MessageModel = new MessageModel(
            'error',
            `${error.error.status}`,
            error.error.msg
          );
          this.message.add(message_model);
        }
      }
    }
    );
  }

}
