
export interface IUser {
  id?: number;
  name?: string;
  age?: number;
  dc?: object;
}

export class IUserState {
  users: IUser[];
  user: IUser;
  addUser: object;
  updateUser: IUser;
  deletedUserId: number;
}

export const USER_STATE_INITIAL: IUserState = <IUserState>{
}
