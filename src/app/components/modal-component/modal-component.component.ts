import { Component, Input, Output, OnInit, ContentChildren, QueryList, AfterContentInit, EventEmitter } from '@angular/core';
import { PrimeTemplate } from 'primeng/api';

@Component({
  selector: 'modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss']
})
export class ModalComponentComponent implements AfterContentInit {

  @Input() visible: boolean = false;

  @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();

  @Input() tamanio: string = '50vw';

  @Input() maximizable: boolean = false;

  @ContentChildren(PrimeTemplate) plantillas: QueryList<PrimeTemplate> | undefined;

  public title: any;

  public content: any;

  public footer: any

  constructor() { }

  ngAfterContentInit(): void {
    this.plantillas?.forEach((plantilla) => {
      switch (plantilla.getType()) {
        case 'title':
          this.title = plantilla.template;
          break;
        case 'content':
          this.content = plantilla.template
          break;
        case 'footer':
          this.footer = plantilla.template;
          break;
        default:
          break;
      }
    });
  }

  changeVisible(): void {
    this.closeModal.emit();
  }
}
