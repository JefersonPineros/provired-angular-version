import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-steps-component',
  templateUrl: './steps-component.component.html',
  styleUrls: ['./steps-component.component.scss'],
})
export class StepsComponentComponent {
  @Input() items: MenuItem[];

  @Input() activeIndex: number = 0;

  @Input() readonly: boolean = true;
}
