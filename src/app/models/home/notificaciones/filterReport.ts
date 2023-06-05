import { FilterDateModel } from "./filterDate";

export class FilterReport extends FilterDateModel {
    constructor(
        public name_file?: string,
        public name_user?: string
    ) {
        super();
    }
}