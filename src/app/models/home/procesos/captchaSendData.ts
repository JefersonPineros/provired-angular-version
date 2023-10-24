export class CaptchaSendDataModel {
    constructor(
        public id?: number,
        public data?: any,
        public username?: number,
        public group_users?: string,
        public parent?: string,
        public name_user?: string,
        public user_transfer?: number,
        public captcha?: string
    ) { }
}