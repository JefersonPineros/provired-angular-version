import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tab-menu-component',
  templateUrl: './tab-menu-component.component.html',
  styleUrls: ['./tab-menu-component.component.scss'],
})
export class TabMenuComponentComponent implements OnInit {
  @Input() items: MenuItem[];

  @Output() eventChangeMenu: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {}

  activeChange(event: any): void {
    this.eventChangeMenu.emit(event);
  }
}
