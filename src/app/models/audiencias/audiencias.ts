export class Audiencias {
  constructor(
    public ciudad?: string,
    public name_ciudad?: string,
    public demandado?: string,
    public demandante?: string,
    public descripcion_vence_terminos?: string,
    public despacho?: string,
    public fecha_registro?: Date,
    public fecha_vence_terminos?: Date | string,
    public id_vencimiento?: number,
    public idevents?: number,
    public idplanilla?: number,
    public name_despacho?: string,
    public proceso?: string,
    public radicacion?: string,
    public username?: string,
    public usuario?: string
  ) {}
}
