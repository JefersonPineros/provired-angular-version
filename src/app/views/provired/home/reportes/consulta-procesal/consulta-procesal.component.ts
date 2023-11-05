import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { FilterSolicitudes } from 'src/app/models/home/procesos/FilterSolicitudes';
import { HistorialProcesosModel } from 'src/app/models/home/procesos/historialProcesosFilter';
import { ImpulsoProcesalModel } from 'src/app/models/home/reports/ImpulsoProcesal';
import { MessageModel } from 'src/app/models/login/utils/messageModel';
import { ImpulsoProcesalService } from 'src/app/services/home/reportes/impulso-procesal.service';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-consulta-procesal',
  templateUrl: './consulta-procesal.component.html',
  styleUrls: ['./consulta-procesal.component.scss']
})
export class ConsultaProcesalComponent implements OnInit {

  public filterImpulso: FilterSolicitudes = new FilterSolicitudes();

  public listImpulso: Array<ImpulsoProcesalModel> = new Array<ImpulsoProcesalModel>();

  public rowsFilter: number = 10;

  public totalItems: number = 0;

  public urlFinal: string = "";

  constructor(
    public breadCrumService: BreadcrumbService,
    public session: SessionStorageService,
    private impulsoService: ImpulsoProcesalService,
    private spinner: NgxSpinnerService,
    private message: MessageService
  ) {
  }

  ngOnInit(): void {
    this.breadCrumService.setItems(
      [
        { label: 'Reportes' },
        { label: 'Consulta impulso procesal' }
      ]
    );

    let ses = this.session.getStorage('user', 'json');
    this.filterImpulso.group_users = ses.data.group_users;
    this.filterImpulso.parent = ses.data.parent;
    this.filterImpulso.from = 0;
    this.filterImpulso.rows = this.rowsFilter;

    this.impulsoService.getImpulsoProcesal(this.filterImpulso).subscribe(
      {
        next: (res) => {
          this.listImpulso = res.data;
          this.totalItems = res.count_rows;
          console.log(this.listImpulso);

        },
        error: (error) => {
          console.log(error.error.msg);

        }
      }
    );
  }

  filtrarImpulso(event: HistorialProcesosModel) {
    this.filterImpulso = event;

    let ses = this.session.getStorage('user', 'json');
    this.filterImpulso.group_users = ses.data.group_users;
    this.filterImpulso.parent = ses.data.parent;
    this.filterImpulso.from = 0;
    this.filterImpulso.rows = this.rowsFilter;

    this.impulsoService.getImpulsoProcesal(this.filterImpulso).subscribe(
      {
        next: (res) => {
          console.log(res);

        },
        error: (error) => {
          console.log(error.error.msg);

        }
      }
    );
  }

  downloadReport() {
    this.spinner.show();
    let session = this.session.getStorage('user', 'json');

    this.filterImpulso.username = session.data.username;
    this.filterImpulso.name_user = session.data.nombre
    this.filterImpulso.name_file = 'Impulso_procesal';
    this.filterImpulso.group_users = session.data.group_users;
    this.filterImpulso.parent = session.data.parent;


    this.impulsoService.generateDoc(this.filterImpulso).subscribe(
      {
        next: (res) => {
          if (res.status == 200) {
            let listUrl = res.url.split('/');
            this.urlFinal = environment.apiBaseDocs + res.url;
            this.spinner.hide();
            fetch(this.urlFinal)
              .then(response => {
                console.log(response);
                return response.blob();
              })
              .then(blod => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blod);
                link.download = listUrl[2];
                link.click();
              })
              .catch(console.error).then(
                error => {
                  if (error != undefined) {
                    let message_model: MessageModel = new MessageModel(
                      'error',
                      `Se ha presentado un error`,
                      `No fue posible descargar el documento, estamos trabajando para resolver este error`
                    );
                    this.message.add(message_model);
                  }
                }
              );
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
        error: (error) => {
          console.log(error);
        }
      }
    );
  }
}
