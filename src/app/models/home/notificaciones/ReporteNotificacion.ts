export class ReporteNotificaciones {
    constructor(
        public auto?: boolean,
        public corporacion?: string,
        public idplanilla?: number,
        public despacho?: string,
        public radicacion?: string,
        public notificacion?: string,
        public proceso?: string,
        public demandante?: string,
        public demandado?: string,
        public descripcion?: string,
        public fechapublicacion?: string,
        public departamento?: string,
        public municipio?: string,
        public despacho_a?: string,
        public nota?: string,
        public ubicacion?: string,
        public name_ciudad?: string,
        public name_despacho?: string,
        public name_notificacion?: string,
        public nota_status?: number,
        public etiqueta_suscriptor?: string,
        public ruta_auto?: string,

    ) { }
}