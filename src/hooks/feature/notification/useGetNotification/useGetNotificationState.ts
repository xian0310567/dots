import {useState} from 'react';

import {
  GetNotificationStateCallback,
  Notice,
} from './types/useGetNotificationState.types';

const useGetNotificationState = (): GetNotificationStateCallback => {
  const [notice, setNotice] = useState<Notice[]>([]);

  return {notice, setNotice};
};

export default useGetNotificationState;
