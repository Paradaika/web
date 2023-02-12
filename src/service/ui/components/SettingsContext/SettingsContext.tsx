import { ISettings } from '@/domain/interfaces/ISettings';
import React, { createContext, ReactNode, useState } from 'react';

export const SettingsContext = createContext({
  setSettings: (settings: ISettings) => {},
  settings: {} as ISettings
});

interface IProps {
  children: ReactNode;
}

export const SettingsContextProvider = ({ children }: IProps) => {
  const saveOrDefaultValues: ISettings = JSON.parse(window.localStorage.getItem('settings')!) || { workTime: 25, shortRest: 5, longRest: 20 };
  const [settings, setSettings] = useState<ISettings>(saveOrDefaultValues);

  const changeSettingsHandler = (settings: ISettings) => {
    window.localStorage.setItem('settings', JSON.stringify(settings));

    setSettings(settings);
  };
  return <SettingsContext.Provider value={{ setSettings: changeSettingsHandler, settings: settings }}>{children}</SettingsContext.Provider>;
};
