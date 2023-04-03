export class ResponseLogin {
  constructor(
    public status?: number,
    public redirect?: boolean,
    public tipousuario?: string,
    public terminos_ok?: boolean
  ) {}
}
