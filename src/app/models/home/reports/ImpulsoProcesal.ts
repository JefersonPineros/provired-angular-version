export class ImpulsoProcesalModel {
    constructor(
        public id_userope?: number,
        public user_operativo?: string,
        public despacho?: string,
        public radicacion?: string,
        public fecha_registro?: string,
        public usuario?: string,
        public proceso?: string,
        public demandante?: string,
        public demandado?: string,
        public codigo_23?: string,
        public fecha_ultima_actuacion?: string,
        public name_ciudad?: string,
        public name_despacho?: string,
    ) { }
}