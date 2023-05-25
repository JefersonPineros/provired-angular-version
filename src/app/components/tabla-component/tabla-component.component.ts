import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
  QueryList,
  ContentChildren,
  AfterContentInit,
  LOCALE_ID
} from '@angular/core';
import localeEs from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common';
import { PrimeTemplate } from 'primeng/api';
import { Table } from 'primeng/table';

registerLocaleData(localeEs);
@Component({
  selector: 'app-tabla-component',
  templateUrl: './tabla-component.component.html',
  styleUrls: ['./tabla-component.component.scss'],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }]
})
export class TablaComponentComponent implements OnInit, OnChanges, AfterContentInit {

  @Input() rowsPerPage: Array<any> = [10, 20, 30];

  @Input() totalRecords: number = 0;

  @Input() rows: number = 10;

  @Input() lazy: boolean = false;

  @Input() isSortTable: boolean = false;

  @Input() multipleSort: boolean = false;

  @Input() filtroGeneral: boolean = true;

  @Input() paginador: boolean = false;

  @Input() cols: Array<any> = [];

  @Input() data: Array<any> = [];

  @Input() fixStyleTable: boolean = false;

  @Input() stripedTable: boolean = false;

  @Input() idElement: string = '';

  @Input() multiSelect: boolean = false;

  @Input() actionsShow: boolean = false;

  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  @Output() onChangePage: EventEmitter<any> = new EventEmitter<any>();

  @ContentChildren(PrimeTemplate) plantillas: QueryList<PrimeTemplate> | undefined;

  public selectedElement: Array<any> = [];

  public checkElement: any;

  public actions: any;

  constructor() { }


  ngOnInit(): void {
  }

  ngOnChanges(changes: any): void {

    if (changes.selectedElement) {
      this.selected.emit(this.selectedElement);
    }
  }

  onRowSelect(event: any) {
    this.selected.emit(this.selectedElement);
  }

  ngAfterContentInit(): void {
    this.plantillas?.forEach((plantilla) => {
      switch (plantilla.getType()) {
        case 'actions':
          this.actions = plantilla.template;
          break;

        default:
          break;
      }
    });
  }
  // verCambios(event:any) {
  //   console.log(event);

  // }

  clear(table: Table) {
    table.clear();
  }

  loadCustom(even: any) {
    console.log(even);
  }

  onPageChange(event: any) {
    this.onChangePage.emit(event);
  }
}
