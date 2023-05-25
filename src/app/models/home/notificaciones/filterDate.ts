export class FilterDateModel {
    constructor(
        public username?: string,
        public fi?: string,
        public ff?: string,
        public group_users?: string,
        public parent?: string,
        public from?: number,
        public rows?: number
    ) { }
}