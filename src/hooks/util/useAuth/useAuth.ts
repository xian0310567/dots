import useAuthState from './useAuthState';
import useAuthService from './services';

import {AuthCallback} from './lib/useAuth';

const useAuth = (): AuthCallback => {
  const state = useAuthState();
  const service = useAuthService(state);

  return {
    ...state,
    ...service,
  };
};

export default useAuth;
