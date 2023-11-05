import { HistorialProcesosModel } from "./historialProcesosFilter";

export class FilterSolicitudes extends HistorialProcesosModel {

    constructor(
        public username?: string,
        public name_user?: string,
        public name_file?: string
    ) {
        super();
    }

}