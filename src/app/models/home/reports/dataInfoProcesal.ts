export class DataInfoProcesal {

    constructor(
        public id?: number,
        public despacho?: string,
        public radicacion?: string,
        public usuario_registra?: string,
        public fecha_registro?: Date,
        public fecha_radicacion?: Date,
        public abogado_coordinador?: string,
        public abogado_externo?: string,
        public adjuntar_f46?: string,
        public demandados?: string,
        public tiene_grupo_riesgo?: string,
        public datos_contacto_demandado?: string,
        public obligaciones_judiciales?: string,
        public clase_proceso?: string,
        public juzgado_radicado?: string,
        public indicador_avance_procesal?: string,
        public etapa_procesal?: string,
        public garantias?: string,
        public medidas_cautelares?: string,
        public avaluos?: string,
        public fecha_valor_liquidacion?: Date,
        public fondos?: string,
        public subrogo?: string,
        public riesgo_juridico?: string,
        public expectativa_recuperacion_procentaje?: string,
        public expectativa_recuperacion_tiempo?: string,
        public existencia_titulos?: string,
        public honorarios_pendientes?: string,
        public pacto_honorarios?: string,
        public new_cmp?: string,
        public new_cmp_table?: string,
    ) { }

}