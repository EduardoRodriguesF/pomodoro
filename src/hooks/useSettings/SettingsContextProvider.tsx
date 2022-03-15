import React, { useState } from 'react';
import { SettingsContext } from '.';
import { IPreset } from './useSettings.types';

const SettingsContextProvider: React.FC = ({ children }) => {
  const [preset, setPreset] = useState<IPreset>();

  return (
    <SettingsContext.Provider value={preset}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
