import {
  IGetStoredSettingParam,
  IGetStoredSettingReturn,
} from './getStoredSetting.types';

const defaultSettings = {
  focusTime: {
    hours: 0,
    minutes: 25,
    seconds: 0,
  },
  breakTime: {
    hours: 0,
    minutes: 5,
    seconds: 0,
  },
  longBreakTime: {
    hours: 0,
    minutes: 15,
    seconds: 0,
  },
  longBreakInterval: 4,
  pauseAfterCycle: true,
};

function getStoredSetting(
  name: IGetStoredSettingParam,
): IGetStoredSettingReturn {
  let result: IGetStoredSettingReturn;

  const storedSetting = localStorage.getItem(`${name}@Pomodoro.Settings`);

  if (!storedSetting) {
    result = defaultSettings[name];
  } else {
    result = JSON.parse(storedSetting);
  }

  return result;
}

export default getStoredSetting;
