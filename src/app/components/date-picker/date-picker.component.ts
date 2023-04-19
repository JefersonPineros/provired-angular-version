import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/services/core/util.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit, OnChanges {

  @Input() model: Date | string | undefined;

  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();

  @Input() disabled: boolean = false;

  @Input() showIcon: boolean = false;

  @Input() nombre: string = '';

  @Input() placeholder: string = '';

  @Input() grupo: FormGroup = new FormGroup({});

  @Input() requerido: boolean = false;

  @Input() format: string = "dd/mm/yy";

  @Input() buttonBar: boolean = false;

  @Input() label: string = '';

  @Input() valid: boolean = false;

  @Output() validChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.generateFormat();
    this.generarControl();
  }

  ngOnChanges(change: any): void {
    if (change.model) {
        setTimeout(() => this.actualizarControl());
    }

    if(this.grupo.status == 'INVALID'){
      this.valid = true;
      this.validChange.emit(this.valid);
    }
  }

  generateFormat(): void {
    if(!this.grupo) {
      this.grupo = this.fb.group({});
    }
  }

  generarControl(): void{
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
          () => this.generarValidaciones(this.model,this.requerido),
        ])
      )
      UtilService.actualizarControladorYValidar(this.grupo, this.nombre);
  }

  generarValidaciones(modelo: any, requerido: any) {
    if(this.validarRequerido(modelo, requerido)) {
      return { errorRequerido: true };
    }
    return null;
  }

  validarRequerido(modelo: any, requerido: any): boolean {
    console.log(modelo instanceof Date);

    return requerido && modelo instanceof Date;
  }

  actualizarControl(): void {
    if (this.grupo && this.grupo.get(this.nombre)) {
      this.grupo.get(this.nombre)?.setValue(this.model);
    }
  }

}
