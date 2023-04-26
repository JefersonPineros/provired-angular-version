import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.scss']
})
export class ButtonComponentComponent implements OnInit {

  @Input() type: string = 'button';

  @Output() eventEmiter: EventEmitter<any> = new EventEmitter<any>();

  @Input() nameButton: string = '';

  @Input() clase: string = 'p-button-raised';

  @Input() icon: boolean = false;

  @Input() iconClass: string = '';

  @Input() showTooltip: boolean = false;

  @Input() messageTooltip: string = '';

  constructor() {}

  ngOnInit(): void {

  }

  onEvent(event: any): void {
    this.eventEmiter.emit(event);
  }

}
