
export interface IUser {
  id?: number;
  name?: string;
  age?: number;
  dc?: object;
}

export class IUserState {
  loadedUser: boolean;
  addedUser: boolean;
  updatedUser: boolean;
  deletedUser: boolean;
  deletedUserId: number;
  users: IUser[];
  user: IUser;
  addUser: object;
  updateUser: IUser;
  numDeleted: number
}

export const USER_STATE_INITIAL: IUserState = <IUserState>{
}
