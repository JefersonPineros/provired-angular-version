export class HistorialActuacion {
    constructor(

        public idplanilla?: number,
        public idDesp?: string,
        public radicacion?: string,
        public idNot?: string,
        public proceso?: string,
        public demandante?: string,
        public demandado?: string,
        public descripcion?: string,
        public fechapublicacion?: string,
        public departamento?: string,
        public municipio?: string,
        public corporacion?: string,
        public despacho_a?: string,
        public imagen?: string,
        public ubicacion?: string,
        public despacho?: string,
        public notificacion?: string,
        public auto?: boolean,
        public ruta_auto?: string,

    ) { }
}