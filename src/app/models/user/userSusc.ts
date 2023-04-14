import { UserSuscriptor } from "./userSuscriptor";

export class User {
  constructor(
    public user: string,
    public tipousuario: string,
    public status: number,
    public data: UserSuscriptor
  ) {
  }
}
