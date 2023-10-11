import {AuthStateCallback} from './useAuthState';
import {AuthServiceCallback} from './useAuthService';

export type AuthCallback = AuthStateCallback & AuthServiceCallback;
