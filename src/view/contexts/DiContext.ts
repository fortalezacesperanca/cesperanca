import type { Container } from 'inversify';
import { createContext } from 'react';

export type DiContextProps = {
  container: Container;
};

export const DiContext = createContext<DiContextProps>({} as DiContextProps);
