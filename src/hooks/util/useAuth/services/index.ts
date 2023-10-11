import useUserInfoService from './useUserInfo';

import {AuthStateCallback} from '../lib/useAuthState';
import {AuthServiceCallback} from '../lib/useAuthService';

const index = (state: AuthStateCallback): AuthServiceCallback => {
  const {useUserInfo} = useUserInfoService(state);

  return {
    useUserInfo,
  };
};

export default index;
