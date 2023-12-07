import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { EmailModel } from 'src/app/models/home/email/emailModel';
import { HistorialProcesosModel } from 'src/app/models/home/procesos/historialProcesosFilter';
import { MessageModel } from 'src/app/models/login/utils/messageModel';
import { EmailDespachosService } from 'src/app/services/home/email/email-despachos.service';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';

@Component({
  selector: 'app-email-despachos',
  templateUrl: './email-despachos.component.html',
  styleUrls: ['./email-despachos.component.scss'],
})
export class EmailDespachosComponent implements OnInit {
  public filter: HistorialProcesosModel = new HistorialProcesosModel();

  public emailList: Array<any> = new Array<any>();

  public totalItems: number = 0;

  constructor(
    public breadCrumService: BreadcrumbService,
    private emailServices: EmailDespachosService,
    private sesion: SessionStorageService,
    private spinner: NgxSpinnerService,
    private message: MessageService
  ) {}

  ngOnInit(): void {
    this.breadCrumService.setItems([{ label: 'Email despachos' }]);
  }

  filterEmail(filterData?: HistorialProcesosModel, pageChange?: any) {
    this.spinner.show();
    let ses = this.sesion.getStorage('user', 'json');
    this.filter.group_users = ses.data.group_users;
    this.filter.parent = ses.data.parent;
    if (pageChange) {
      this.filter.from = pageChange.first;
      this.filter.rows = pageChange.rows;
    } else {
      this.filter.from = 0;
      this.filter.rows = 30;
    }

    this.emailServices.getEmailDespacho(this.filter).subscribe({
      next: (res) => {
        this.spinner.hide();
        this.totalItems = res.count_rows;
        this.emailList = res.data;
      },
      error: (error) => {
        this.spinner.hide();
        let message_model: MessageModel = new MessageModel(
          'error',
          `Se ha presentado un error!`,
          `${error.error.msg}`
        );
        this.message.add(message_model);
      },
    });
  }
}
