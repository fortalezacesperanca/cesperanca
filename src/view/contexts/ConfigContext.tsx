import { instanceToPlain, plainToInstance } from 'class-transformer';
import React, { createContext, useContext, useMemo, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { Model } from '../../domain/model';

export type ConfigContextProps = {};

export const ConfigContext = createContext<ConfigContextProps>(
  {} as ConfigContextProps,
);

const KEY = 'config';

export function useConfig(): [
  Model.Config,
  React.Dispatch<React.SetStateAction<Model.Config>>,
] {
  const [config, setConfig] = useLocalStorage<Model.Config>(
    KEY,
    // new Model.Config(),
    plainToInstance(Model.Config, {}),
    {
      serializer: (instance) => {
        // return JSON.stringify(v);
        return JSON.stringify(instanceToPlain(instance));
      },
      deserializer: (plain) => {
        try {
          // const c = new Model.Config(JSON.parse(v));
          // console.log({ c });
          // return c;
          return plainToInstance(Model.Config, JSON.parse(plain));
        } catch (err) {
          return plainToInstance(Model.Config, {});
        }
      },
      raw: false,
    },
  );

  return [config, setConfig] as [
    Model.Config,
    React.Dispatch<React.SetStateAction<Model.Config>>,
  ];
}

export const useConfigContext = () => useContext(ConfigContext);

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useConfig();
  const [isPrivacyAskNextTime, setPrivacyAskNextTime] = useState(false);

  const isMapPrivacyAccepted = useMemo(() => {
    return config.privacy.map.consent == 'accepted';
  }, [config]);

  function acceptMapPrivacy() {
    setConfig((c) => {
      c.privacy.map.accept();
      return c;
    });
  }

  function declineMapPrivacy() {
    setConfig((c) => {
      c.privacy.map.decline();
      return c;
    });
  }

  const value = {
    isMapPrivacyAccepted,
    acceptMapPrivacy,
    declineMapPrivacy,
  };
  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
}
