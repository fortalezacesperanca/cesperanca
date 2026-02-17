import { instanceToPlain, plainToInstance } from 'class-transformer';
import React, { createContext, useContext, useMemo } from 'react';
import { useLocalStorage } from 'react-use';
import { Model } from '../../domain/model';

export type ConfigContextProps = {
  isMapPrivacyAccepted: boolean;
  acceptMapPrivacy: () => void;
  declineMapPrivacy: () => void;
};

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
    plainToInstance(Model.Config, {}),
    {
      serializer: (instance) => {
        return JSON.stringify(instanceToPlain(instance));
      },
      deserializer: (plain) => {
        try {
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

  const isMapPrivacyAccepted = useMemo<boolean>(() => {
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
