export class UtilService {

  public static indexNombre = 0;

  constructor() { }

  public static getControlNombre() {
    UtilService.indexNombre++;
    return `nombre-${new Date().getTime()}${new Date().getUTCMilliseconds()}-${UtilService.indexNombre}`
  }

  public static actualizarControladorYValidar(grupoForm: any, controlName: any) {
    setTimeout(() => {
      if(grupoForm && grupoForm.get(controlName)) {
        grupoForm.controls[controlName].updateValueAndValidity();
      }
    });
  }
}
