import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login/login';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup = new FormGroup({});

  public loginModel: Login = new Login();

  constructor(private accessLogin: LoginServiceService, private route: Router) {}

  ngOnInit(): void {

  }

  login():void {

    this.accessLogin.login(this.loginModel).subscribe({

      next: (resp) => {
        this.route.navigate(['provired/home-provired/home']);
      },
      error: (error) => {
        console.log(error);
      }
    }
    );
  }

}
