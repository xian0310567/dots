import {useState, useEffect} from 'react';

import {AuthStateCallback, UserType} from './lib/useAuthState';

const useAuthState = (): AuthStateCallback => {
  const [type, setType] = useState<UserType>('anonymous');
  const [id, setId] = useState('');

  return {
    type,
    setType,
    id,
    setId,
  };
};

export default useAuthState;
