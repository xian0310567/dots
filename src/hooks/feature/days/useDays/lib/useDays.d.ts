import {DaysStateCallback} from './useDaysState';
import {DaysServiceCallback} from './useDaysService';

export type DaysCallback = DaysStateCallback & DaysServiceCallback;
