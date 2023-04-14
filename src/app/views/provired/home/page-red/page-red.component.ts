import { Component, OnInit } from '@angular/core';
import { ResponseLogin } from 'src/app/models/login/responseLogin';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';

@Component({
  selector: 'app-page-red',
  templateUrl: './page-red.component.html',
  styleUrls: ['./page-red.component.scss']
})
export class PageRedComponent implements OnInit {
  public sessionReq: ResponseLogin = new ResponseLogin;

  public redirect: boolean  = false;

  public terminos: boolean = false;

  constructor(public breadCrumService: BreadcrumbService, private session: SessionStorageService) {}

  ngOnInit(): void {

    try {

      this.sessionReq = this.session.getSession();

      this.redirect = this.sessionReq.redirect!;

      this.terminos = this.sessionReq.terminos_ok!;

    } catch (error) {

      console.log(error);

    }



    this.breadCrumService.setItems(
      [
        {label: 'Inicio'}
      ]
    );

  }

}
