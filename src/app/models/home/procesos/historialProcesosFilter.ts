export class HistorialProcesosModel {
    constructor(
        public group_users?: string,
        public parent?: string,
        public depto?: string,
        public municipio?: string,
        public corporacion?: string,
        public despacho?: string,
        public radicacion?: string,
        public from?: number,
        public rows?: number,
        public userChild?: string,
        public rango?: string,
        public codigo_23?: string
    ) { }
}