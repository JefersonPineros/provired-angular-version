import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() itemsMenu: MenuItem[] | undefined;

  constructor() {}

  ngOnInit(): void {

  }
}
