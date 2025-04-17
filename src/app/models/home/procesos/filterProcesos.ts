export class FilterProceso {
  constructor(
    public username?: string,
    public name_user?: string,
    public name_file?: string,
    public group_users?: string,
    public parent?: string,
    public demandante_demandado?: string,
    public radicacion?: string,
    public etiqueta?: string,
    public from?: number,
    public rows?: number,
    public despacho?: string
  ) {}
}
