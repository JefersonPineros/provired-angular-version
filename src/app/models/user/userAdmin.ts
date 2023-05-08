import { User } from "./user";

export class UserAdmin {
  constructor(
    public id?: number,
    public username?: string,
    public tipousuario?: string,
    public registerdate?: Date,
    public lastvisitdate?: Date,
    public gestionar_autos?: string,
    public validar_radicados?: string,
    public cargar_autos?: string,
    public historial_de_procesos?: string,
    public digitar_notificaciones?: string,
    public solicitud_vigilancia?: string,
    public reporte_diario?: string,
    public guia_de_captura?: string,
    public editar_notificaciones?: string,
    public sincronizar_autos?: string,
    public juzgados_activos?: number,
    public consulta_manual?: string,
    public asigna_revision?: number,
  ) {
  }
}
