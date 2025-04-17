import { Proceso } from "./proceso";

export class UpProcesoActivo extends Proceso {
    constructor(
        public username?: string,
        public ciudad?: string,
        public fecha_vence_terminos?: String,
        public descripcion_vence_terminos?: string,
        public idplanilla?: string
    ) {
        super();
    }
}