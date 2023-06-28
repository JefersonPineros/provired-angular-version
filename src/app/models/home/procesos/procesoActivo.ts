import { Proceso } from "./proceso";

export class ProcesoActivo extends Proceso {
    constructor(
        public usuario?: string,
        public fecha_registro?: Date,
        public codigo_23?: string,
        public etiqueta_suscriptor?: string,
        public expediente_digital?: string,
        public name_ciudad?: string,
        public name_despacho?: string
    ) {
        super();
    }
}