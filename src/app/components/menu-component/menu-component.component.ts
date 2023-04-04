import { Component, OnInit } from '@angular/core';
import { HomeComponent } from 'src/app/views/provired/home/home.component';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponentComponent implements OnInit{
    model: any[]= [];

    constructor(public app: HomeComponent) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Notificaciones', icon: 'pi pi-fw pi-star-fill', routerLink: ['/']
            },
            {
                label:'Reportes', icon:'pi pi-fw pi-prime', routerLink: ['/']
            },
            {
                label: 'Procesos', icon: 'pi pi-fw pi-compass', routerLink: ['/']
            },
            {
                label: 'Email despachos', icon: 'pi pi-fw pi-briefcase', routerLink: ['/'],
            },
            {
                label: 'Documentos', icon: 'pi pi-fw pi-align-left', routerLink: ['/']

            },
            {
                label: 'Configuración', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/']
            }
        ];
    }
}
