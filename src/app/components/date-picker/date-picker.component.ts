import { Component, OnInit, Input, Output, EventEmitter, OnChanges,LOCALE_ID} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/services/core/util.service';
import localeEs from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common';
import { PrimeNGConfig } from 'primeng/api';

registerLocaleData(localeEs);
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [{provide:LOCALE_ID, useValue: 'es'}]
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

  constructor(private fb: FormBuilder, private confing: PrimeNGConfig) {

  }
  ngOnInit(): void {
    this.generateFormat();
    this.generarControl();

    this.confing.setTranslation(
      {
        dayNames: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
        dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
        dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
        monthNames: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agostos","Septiembre","Octubre","Noviembre","Diciembre"],
        monthNamesShort: ["Ene", "Feb", "Mar", "ABr", "May", "Jun","Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
      }
    );
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
