
export interface IUser {
  id?: number;
  name?: string;
  age?: number;
  dc?: object;
}

export class IUserState {
  loadedUser: boolean;
  users: IUser[];
  user: IUser;
}

export const USER_STATE_INITIAL: IUserState = <IUserState>{
}
