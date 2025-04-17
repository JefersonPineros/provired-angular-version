export class CmpInfoProcesal {

    constructor(
        public id?: number,
        public name_cmp?: string,
        public name_label?: string,
        public type_cmp?: number,
        public value_cmp?: string,
        public require_cmp?: number,
        public request_table?: number,
        public table_reference?: string,
        public conditional_reference?: string,
        public table_reference_value?: string,
        public table_reference_label?: string,
        public multi_data?: number,
        public fecha_creacion?: Date,
        public activo?: number,
    ) { }

}