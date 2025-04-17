export class EmailModel {
  constructor(
    public IdDes?: string,
    public corporacion_IdCorp?: string,
    public despacho?: string,
    public localizacion?: string,
    public operativo?: string,
    public operativo_gc?: string,
    public email?: string,
    public telefono?: string,
    public url_microservicio?: string,
    public consulta_tiba?: string,
    public tipo_revision?: number,
    public tipo_revision_gc?: number,
    public codigo_samai?: string,
    public name_ciudad?: string,
    public name_corporacion?: string,
    public name_departamento?: string
  ) {}
}
