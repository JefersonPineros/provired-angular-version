import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/services/core/util.service';

@Component({
  selector: 'app-dropdown-component',
  templateUrl: './dropdown-component.component.html',
  styleUrls: ['./dropdown-component.component.scss']
})
export class DropdownComponentComponent implements OnInit, OnChanges{

  @Input() options: Array<any> = [];

  @Input() model: any;

  @Output() modelChange: EventEmitter<any>= new EventEmitter<any>();

  @Input() grupo: FormGroup = new FormGroup({});

  @Input() name: string = '';

  @Input() keyOptionName: string = '';

  @Input() showClear: boolean = false;

  @Input() placeholder: string = '';

  @Input() selectLabel: string = '';

  @Input() filter: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.generateForm();
    this.generarControl();
  }

  ngOnChanges(change: any): void {
    if(change.model) {
      setTimeout(() => this.actualizarControl());
    }
  }

  generateForm(): void {
    if(!this.grupo) {
      this.grupo = this.fb.group({});
    }
  }

  generarControl(): void {
    if (this.grupo && !this.grupo.get(this.name)) {
      this.name = UtilService.getControlNombre();
      this.grupo.addControl(this.name, this.fb.control({}));
      this.actualizarControl();
    }
  }

  actualizarControl(): void {
    if (this.grupo && this.grupo.get(this.name)) {
      this.grupo.get(this.name)?.setValue(this.model);
    }
  }

  emitirModelo(elemento:any, actualizarModelo?:any) {
    setTimeout(() => {
      this.model = elemento;
      this.actualizarControl();
    });
  }

  seleccionarElemento(event: any) {

    if (event.value) {
      this.emitirModelo(event.value);
    }

    setTimeout(() => {
      this.modelChange.emit(this.model);
    });
  }

  limpiarModelo(){
    this.emitirModelo([]);
  }
}
