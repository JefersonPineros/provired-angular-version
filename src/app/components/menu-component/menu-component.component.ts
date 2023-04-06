import { Component, OnInit } from '@angular/core';
import { HomeComponent } from 'src/app/views/provired/home/home.component';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponentComponent implements OnInit {
  model: any[] = [];

  constructor(public app: HomeComponent) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Mis audiencias', icon: 'pi pi-fw pi-star-fill', routerLink: ['inicio/audiencia']
      },
      {
        label: 'Notificaciones', icon: 'pi pi-fw pi-star-fill', routerLink: ['notificaciones'],
      },
      {
        label: 'Reportes', icon: 'pi pi-fw pi-prime', routerLink: ['reportes'],
        items: [
          { label: 'Listado procesos generales', icon: 'pi pi-fw pi-star-fill', routerLink: ['reportes/procesos_generales'] },
          { label: 'Listado procesos activos', icon: 'pi pi-fw pi-star-fill', routerLink: ['reportes/procesos_activos'] },
          { label: 'Eliminacion masiva de procesos', icon: 'pi pi-fw pi-star-fill', routerLink: ['reportes/eliminar_procesos'] },
          { label: 'Historial de procesos', icon: 'pi pi-fw pi-star-fill', routerLink: ['reportes/historial_procesos'] },
          { label: 'Mis Solicitudes', icon: 'pi pi-fw pi-star-fill', routerLink: ['reportes/mis_solicitudes'] },
          { label: 'Consulta impulso procesal', icon: 'pi pi-fw pi-star-fill', routerLink: ['reportes/consulta_procesal'] }
        ]
      },
      {
        label: 'Procesos', icon: 'pi pi-fw pi-compass', routerLink: ['procesos']
      },
      {
        label: 'Email despachos', icon: 'pi pi-fw pi-briefcase', routerLink: ['email_despachos']
      },
      {
        label: 'Documentos', icon: 'pi pi-fw pi-align-left', routerLink: ['documentos'],
        items: [
          { label: 'Autorizaciones', icon: 'pi pi-fw pi-star-fill', routerLink: ['documentos/autorizaciones'] },
          { label: 'Tutoriales', icon: 'pi pi-fw pi-star-fill', routerLink: ['documentos/tutoriales'] },
          { label: 'Terminos y condiciones', icon: 'pi pi-fw pi-star-fill', routerLink: ['documentos/terminos_condiciones'] }
        ]
      }
    ];
  }
}
