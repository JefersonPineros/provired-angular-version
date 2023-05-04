import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button-component.component.html',
  styleUrls: ['./radio-button-component.component.scss']
})
export class RadioButtonComponentComponent implements OnInit, OnChanges {

  @Input() listRadioButtons: Array<any> = [];

  @Input() model: any;

  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();

  @Input() orientation: string = 'horizontal';

  @Input() defaultValue: number | null = null;


  constructor() { }

  ngOnInit(): void {
    if (this.defaultValue !== null) {
      this.model = this.listRadioButtons[this.defaultValue];
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['defaultValue'].currentValue) {
    //   console.log(this.defaultValue);
    // }
  }

}
