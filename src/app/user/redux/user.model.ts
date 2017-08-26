
export interface IUser {
  id?: number;
  name?: string;
  age?: number;
  dc?: object;
}

export class UserState {
  users: IUser[];
  user: IUser;
}

export const USER_STATE_INITIAL: UserState = <UserState>{
}
