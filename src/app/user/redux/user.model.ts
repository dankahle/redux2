
export interface IUser {
  id?: number;
  name?: string;
  age?: number;
  dc?: object;
}

export class IUserState {
  loadedUser: boolean;
  addedUser: boolean;
  users: IUser[];
  user: IUser;
  addUser: object;
}

export const USER_STATE_INITIAL: IUserState = <IUserState>{
}
