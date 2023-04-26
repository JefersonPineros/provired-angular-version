import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { PrimeTemplate } from 'primeng/api';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit, AfterContentInit {

  @Input() footer: boolean = false;

  @ContentChildren(PrimeTemplate) plantillas: QueryList<PrimeTemplate> | undefined;

  public titulo: any;

  public contenido: any;

  public pie: any;

  constructor() {

  }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
    this.plantillas?.forEach((plantilla) => {
      switch (plantilla.getType()) {
        case 'header':
          this.titulo = plantilla.template;
          break;
        case 'content':
          this.contenido = plantilla.template;
          break;
        case  'footer':
          this.pie = plantilla.template;
          break;
        default:
          break;
      }
    });
  }

}
