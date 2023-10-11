import React from 'react';
import device from 'react-native-device-info';

import {AuthStateCallback} from '../lib/useAuthState';
import {UserInfoCallback} from '../lib/serviceInterface/useUserInfo';

const service = (state: AuthStateCallback): UserInfoCallback => {
  const useUserInfo = () => {
    device.getUniqueId().then(res => {
      state.setId(res);
    });

    return {
      type: state.type,
      id: state.id,
    };
  };

  return {useUserInfo};
};

export default service;
