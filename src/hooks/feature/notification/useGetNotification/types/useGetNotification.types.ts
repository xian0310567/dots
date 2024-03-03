import {GetNotificationStateCallback} from './useGetNotificationState.types';
import {GetNotificationServiceCallback} from './useGetNotificationService.types';

export type GetNotificationCallback = GetNotificationStateCallback &
  GetNotificationServiceCallback;
