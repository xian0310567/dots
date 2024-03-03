import {supabase} from '@/hooks/collection';

import {
  GetNotificationStateCallback,
  Notice,
} from '../types/useGetNotificationState.types';
import {GetNoticeCallback} from '../types/services/getNotice.types';

const service = (state: GetNotificationStateCallback): GetNoticeCallback => {
  const getNotice = async () => {
    const {data} = await supabase.from('notice').select().returns<Notice[]>();

    if (data) state.setNotice(data);
  };

  return {getNotice};
};

export default service;
