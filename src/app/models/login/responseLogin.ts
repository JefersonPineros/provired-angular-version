export class ResponseLogin {
  constructor(
    public user?: string,
    public status?: number,
    public redirect?: boolean,
    public tipousuario?: string,
    public terminos_ok?: boolean,
    public msg?: string,
    public token?: string
  ) {}
}
