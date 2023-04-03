import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/services/core/util.service';

@Component({
  selector: 'input-text',
  templateUrl: './input-text-component.component.html',
  styleUrls: ['./input-text-component.component.scss']
})
export class InputTextComponentComponent implements OnInit, OnChanges {

  @Input() placeHolderActive: boolean = false;

  @Input() placeHolder: string = '';

  @Input() model: string | undefined = '';

  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();

  @Input() grupo: FormGroup = new FormGroup({});

  @Input() requerido: boolean = false;

  @Input() nombre: string = '';

  @Input() disabledInputText: boolean = false;

  @Input() tipo: string = 'text';

  @Input() valid: boolean = false;

  @Output() validChange: EventEmitter<any> = new EventEmitter();

  @Input() patron: RegExp = new RegExp('');

  @Input() styleInput: string = "float";

  @Input() iconOrientation: string = "left";

  @Input() icon: string = "pi-search";

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.generateFormat();
    this.generarControl();
  }

  ngOnChanges(change: any):void {
    if(change.model) {
      setTimeout(() => this.actualizarControl());
    }

    if(this.grupo.status == 'INVALID') {
      this.valid = true;
      this.validChange.emit(this.valid);
    }
  }

  generateFormat(): void {
    if(!this.grupo) {
      this.grupo = this.fb.group({});
    }
  }

  generarControl(): void {
    if(this.grupo) {
      if(!this.grupo.get(this.nombre )) {
        this.nombre = UtilService.getControlNombre();
        this.grupo.addControl(this.nombre,this.fb.control({}));
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
  }

  generarValidaciones() {
    if (this.validarPatron()) {
      return { errorPatron: true };
    }
    if (this.validarRequerido()) {
      return { errorRequerido: true };
    }
    return null;
  }

  validarPatron(): boolean {
    return (
      this.patron != undefined &&
      this.model != null &&
      !new RegExp(this.patron).test(this.model)
    );
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
