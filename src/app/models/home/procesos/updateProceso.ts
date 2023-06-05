import { Proceso } from "./proceso";

export class UpdateProceso extends Proceso {
    constructor(
        public etiqueta_suscriptor?: string,
        public expediente_digital?: string,
        public username?: string
    ) {
        super();
    }
}