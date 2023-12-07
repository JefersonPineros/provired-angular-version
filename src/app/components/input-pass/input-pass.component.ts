import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/services/core/util.service';

@Component({
  selector: 'app-input-pass',
  templateUrl: './input-pass.component.html',
  styleUrls: ['./input-pass.component.scss'],
})
export class InputPassComponent implements OnInit, OnChanges {
  @Input() modelNew: string | undefined = '';

  @Input() modelConfirm: string | undefined = '';

  @Output() modelNewChange: EventEmitter<any> = new EventEmitter<any>();

  @Output() modelConfirmChange: EventEmitter<any> = new EventEmitter<any>();

  @Input() feedBackNew: boolean = false;

  @Input() feedBackConfirm: boolean = false;

  @Input() disabled: boolean = false;

  @Input() nombreNew: string = '';

  @Input() nombreConfirm: string = '';

  @Input() valid: boolean = false;

  @Output() validChange: EventEmitter<any> = new EventEmitter();

  @Input() validConfirm: boolean = false;

  @Output() validConfirmChange: EventEmitter<any> = new EventEmitter();

  public requeridoNew: boolean = true;

  public requeridoConfirm: boolean = true;

  public formGroup: any = {};

  public grupo: FormBuilder = new FormBuilder();

  public grupoConfirm: FormBuilder = new FormBuilder();

  constructor(private fb: FormBuilder) {
    this.formGroup.fgNew = this.grupo.group({});
    this.formGroup.fgConfirm = this.grupoConfirm.group({});
  }

  ngOnInit(): void {
    this.generarControl();
  }

  ngOnChanges(change: any): void {
    if (change.modelNew || change.modelConfirm) {
      setTimeout(() => this.actualizarControl());
    }

    if (this.formGroup.fgNew.status == 'INVALID') {
      this.valid = true;
      this.validChange.emit(this.valid);
    }

    if (this.formGroup.fgConfirm.status == 'INVALID') {
      this.validConfirm = true;
      this.validConfirmChange.emit(this.valid);
    }
  }

  generarControl(): void {
    if (this.formGroup.fgNew) {
      if (!this.formGroup.fgNew.get(this.nombreNew)) {
        this.nombreNew = UtilService.getControlNombre();
        this.formGroup.fgNew.addControl(this.nombreNew, this.fb.control({}));
      }

      this.formGroup.fgNew
        .get(this.nombreNew)
        ?.setValidators(
          Validators.compose([
            this.formGroup.fgNew.get(this.nombreNew)?.validator,
            () => this.generarValidaciones(),
          ])
        );

      if (this.formGroup.fgConfirm) {
        if (!this.formGroup.fgConfirm.get(this.nombreConfirm)) {
          this.nombreConfirm = UtilService.getControlNombre();
          this.formGroup.fgConfirm.addControl(
            this.nombreConfirm,
            this.fb.control({})
          );
        }
      }

      this.formGroup.fgConfirm
        .get(this.nombreConfirm)
        ?.setValidators(
          Validators.compose([
            this.formGroup.fgConfirm.get(this.nombreConfirm)?.validator,
            () => this.generarValidacionesConfirm(),
          ])
        );

      UtilService.actualizarControladorYValidar(
        this.formGroup.fgNew,
        this.nombreNew
      );
      UtilService.actualizarControladorYValidar(
        this.formGroup.fgConfirm,
        this.nombreConfirm
      );
      console.log(this.formGroup);
    }
  }

  generarValidaciones() {
    if (this.validarRequeridoNew) {
      return { errorRequerido: true };
    }

    return null;
  }

  generarValidacionesConfirm() {
    if (this.validarIgualdad()) {
      return { errorIgualdad: true };
    }

    if (this.validarRequeridoConfirm) {
      return { errorRequerido: true };
    }

    return null;
  }

  validarRequeridoNew(): boolean {
    return this.requeridoNew && !String(this.modelNew || '').trim();
  }

  validarRequeridoConfirm(): boolean {
    return this.requeridoConfirm && !String(this.modelConfirm || '').trim();
  }

  validarIgualdad(): boolean {
    return this.modelNew !== this.modelConfirm;
  }

  actualizarControl(): void {
    if (this.formGroup.fgNew && this.formGroup.fgNew.get(this.nombreNew)) {
      this.formGroup.fgNew.get(this.nombreNew)?.setValue(this.modelNew);
    }

    if (
      this.formGroup.fgConfirm &&
      this.formGroup.fgConfirm.get(this.nombreConfirm)
    ) {
      this.formGroup.fgConfirm
        .get(this.nombreConfirm)
        ?.setValue(this.modelConfirm);
    }
  }
}
