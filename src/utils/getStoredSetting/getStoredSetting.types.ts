import { ITime } from 'types';

type IGetStoredSettingParam =
  | 'focusTime'
  | 'breakTime'
  | 'longBreakTime'
  | 'longBreakInterval'
  | 'pauseAfterCycle';

type IGetStoredSettingReturn = ITime | boolean | number;

export type { IGetStoredSettingParam, IGetStoredSettingReturn };
