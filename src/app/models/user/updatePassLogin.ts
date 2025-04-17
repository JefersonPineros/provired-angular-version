export class UpdatePassLogin {
  constructor(
    public user?: string,
    public newPassword?: string,
    public newPasswordConfirm?: string,
    public token?: string,
    public captcha?: string
  ) {}
}
