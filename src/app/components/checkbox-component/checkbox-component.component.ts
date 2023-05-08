import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox-component',
  templateUrl: './checkbox-component.component.html',
  styleUrls: ['./checkbox-component.component.scss']
})
export class CheckboxComponentComponent implements OnInit, OnChanges {

  @Input() model: any;

  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();

  @Input() name: string = '';

  @Input() grupo: FormGroup = new FormGroup({});

  @Input() label: string = '';

  @Input() requerido: boolean = false;

  @Input() deshabilitado: boolean = false;


  constructor() {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
}
