import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { FileUrl } from 'src/app/constans/files-const';
import { GeneralConst } from 'src/app/constans/general-const';
import { FilterProceso } from 'src/app/models/home/procesos/filterProcesos';
import { MessageModel } from 'src/app/models/login/utils/messageModel';
import { RamaJudicialService } from 'src/app/services/home/reportes/rama-judicial.service';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rama-jucial',
  templateUrl: './rama-jucial.component.html',
  styleUrls: ['./rama-jucial.component.scss'],
})
export class RamaJucialComponent implements OnInit {
  public generalConst = GeneralConst;
  public filterType: FilterProceso;
  public urlFinal: string = '';

  constructor(
    public breadCrumService: BreadcrumbService,
    private ramaJudicialService: RamaJudicialService,
    private session: SessionStorageService,
    private spinner: NgxSpinnerService,
    private message: MessageService
  ) {
    this.filterType = new FilterProceso();
  }

  ngOnInit(): void {
    this.breadCrumService.setItems([
      { label: 'Reportes' },
      { label: 'Reporte Rama Judicial' },
    ]);
  }

  dowunloadReportRamaJudicial(type_report: string) {
    this.spinner.show();
    let session = this.session.getStorage('user', 'json');

    this.filterType.type_report = type_report;
    this.filterType.username = session.data.username;
    this.filterType.name_user = session.data.nombre;
    this.filterType.name_file = 'Reporte_rama_judicial';
    this.filterType.group_users = session.data.group_users;
    this.filterType.parent = session.data.parent;
    this.filterType.tipousuario = session.tipousuario;

    this.ramaJudicialService.getRamaJudicialReport(this.filterType).subscribe({
      next: (res: any) => {
        if (res.status === 200) {
          this.urlFinal = environment.apiBaseDocs + '/excelTmp/' + res.nameFile;
          this.spinner.hide();
          window.open(this.urlFinal, '_blank');
        } else {
          let message_model: MessageModel = new MessageModel(
            'error',
            `Error ${res.status}`,
            `${res.msg}`
          );
          this.message.add(message_model);
        }
        this.spinner.hide();
      },
      error: (error: any) => {
        console.error('Error al descargar el reporte:', error);
      },
    });
  }
}
