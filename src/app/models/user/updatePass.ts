export class UpdatePass {
  constructor(
    public user?: string,
    public tipousuario?: string,
    public password_actual?: string,
    public password_new?: string,
    public password_confirm?: string
  ) {}
}
