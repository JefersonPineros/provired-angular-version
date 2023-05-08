export class Vencimientos {
  constructor(
    public ciudad?: string,
    public demandado?: string,
    public demandante?: string,
    public descripcion_vence_terminos?: string,
    public despacho?: string,
    public fecha_registro?: Date,
    public fecha_vence_terminos?: Date,
    public id_vencimiento?: number,
    public idevents?: number,
    public idplanilla?: number,
    public nameCiudad?: string,
    public nameDespacho?: string,
    public proceso?: string,
    public radicacion?: string,
    public username?: string,
    public usuario?: string
  ){}
}
