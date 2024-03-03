import useGetNotificationState from './useGetNotificationState';
import useGetNotificationService from './services';

import {GetNotificationCallback} from './types/useGetNotification.types';

const useGetNotification = (): GetNotificationCallback => {
  const state = useGetNotificationState();
  const service = useGetNotificationService(state);

  return {...state, ...service};
};

export default useGetNotification;
