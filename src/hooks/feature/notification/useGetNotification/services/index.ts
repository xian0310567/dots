import {useEffect} from 'react';

import {GetNotificationStateCallback} from '../types/useGetNotificationState.types';
import {GetNotificationServiceCallback} from '../types/useGetNotificationService.types';

import getNoticeService from './getNotice';

const index = (
  state: GetNotificationStateCallback,
): GetNotificationServiceCallback => {
  const {getNotice} = getNoticeService(state);

  useEffect(() => {
    getNotice();
  }, []);

  return {getNotice};
};

export default index;
