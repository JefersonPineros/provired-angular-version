import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/services/core/util.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit, OnChanges {

  @Input() tamanio: string = '200';

  @Input() placeholder: string = '';

  @Input() model: string | undefined = '';

  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();

  @Input() grupo: FormGroup = new FormGroup({});

  @Input() requerido: boolean = false;

  @Input() nombre: string = '';

  @Input() disabledInputText: boolean = false;

  @Input() valid: boolean = false;

  @Output() validChange: EventEmitter<any> = new EventEmitter();

  @Input() disabled: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.generarFormat();
    this.generarValidaciones();
  }

  ngOnChanges(changes: any): void {
    if(changes.model){
      setTimeout(() => this.actualizarControl());
    }

    if(this.grupo.status == 'INVALID') {
      this.valid = true;
      this.validChange.emit(this.valid);
    }
  }

  generarFormat(): void {
    if(this.grupo) {
      if(!this.grupo.get(this.nombre)) {
        this.nombre = UtilService.getControlNombre();
        this.grupo.addControl(this.nombre, this.fb.control({}));
      }
    }

    this.grupo
      .get(this.nombre)
      ?.setValidators(
        Validators.compose([
          this.grupo.get(this.nombre)?.validator,
          () => this.generarValidaciones(),
        ])
      );
    UtilService.actualizarControladorYValidar(this.grupo, this.nombre);
  }

  generarValidaciones() {
    if(this.validarRequerido()) {
      return { errorRequerido: true }
    }
    return null;
  }

  validarRequerido(): boolean {
    return this.requerido && !String(this.model || '').trim();
  }

  actualizarControl(): void {
    if (this.grupo && this.grupo.get(this.nombre)) {
      this.grupo.get(this.nombre)?.setValue(this.model);
    }
  }
}
