export class FilterGeneral {
    constructor(
        public group_users?: string,
        public parent?: string,
        public demandante_demandado?: string,
        public radicacion?: string,
        public etiqueta?: string,
        public from?: number,
        public rows?: number
    ) { }
}