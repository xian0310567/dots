import {UserType} from '../useAuthState';

export type UserInfoCallback = {
  useUserInfo: () => UserInfo;
};

type UserInfo = {
  type: UserType;
  id: string;
};
