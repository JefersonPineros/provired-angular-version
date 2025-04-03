import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { Vencimientos } from 'src/app/models/home/vencimientos/vencimientos';
import { ResponseLogin } from 'src/app/models/login/responseLogin';
import { VencimientosService } from 'src/app/services/home/vencimientos/vencimientos.service';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';

@Component({
  selector: 'app-page-red',
  templateUrl: './page-red.component.html',
  styleUrls: ['./page-red.component.scss'],
  providers: [MessageService],
})
export class PageRedComponent implements OnInit {
  public sessionReq: ResponseLogin = new ResponseLogin();

  public redirect: boolean = false;

  public terminos: boolean = false;

  public vencimientosList: Array<Vencimientos> = [];

  constructor(
    public breadCrumService: BreadcrumbService,
    private session: SessionStorageService,
    private vencimientos: VencimientosService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    try {
      this.sessionReq = this.session.getSession();
      this.redirect = this.sessionReq.redirect!;
      this.terminos = this.sessionReq.terminos_ok!;
    } catch (error) {
      console.log(error);
    }

    this.breadCrumService.setItems([{ label: 'Inicio' }]);
    this.spinner.show();
    this.vencimientos.getVencimientos().subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.vencimientosList = res;
        }
        this.spinner.hide();
      },
      error: (error) => {
        this.spinner.hide();
        console.log(error);
      },
    });
  }

  actionSeeMore(): void {
    this.router.navigate(['provired/home-provired/home/inicio/audiencia']);
  }
}
