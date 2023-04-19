import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-component',
  templateUrl: './tabla-component.component.html',
  styleUrls: ['./tabla-component.component.scss']
})
export class TablaComponentComponent implements OnInit {

  @Input() cols: Array<any> = [];

  @Input() data: Array<any> = [];

  @Input() fixStyleTable: boolean = false;

  @Input() stripedTable: boolean = false;


  constructor() {}

  ngOnInit(): void {
  }

}
