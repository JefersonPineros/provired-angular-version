import { CmpInfoProcesal } from "./cmpInfoProcesal";
import { DataInfoProcesal } from "./dataInfoProcesal";
import { MultiData } from "./multiData";

export class InformeProcesal {

    constructor(
        public status?: number,
        public cmpInfoProcesal?: Array<CmpInfoProcesal>,
        public data?: DataInfoProcesal,
        public multiData?: Array<MultiData>
    ) { }
}