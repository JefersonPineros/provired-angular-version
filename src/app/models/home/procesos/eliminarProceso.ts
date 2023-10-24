export class EliminarProcesoModel {
    constructor(
        public id_userope?: number,
        public user_operativo?: string,
        public despacho?: string,
        public radicacion?: string,
        public fecha_registro?: Date,
        public usuario?: string,
        public proceso?: string,
        public demandante?: string,
        public demandado?: string,
        public codigo_23?: string,
        public municipio?: string,
        public name_ciudad?: string,
        public name_despacho?: string,
        public name_departamento?: string,
        public name_usuario?: string,
    ) { }
}