import { Env } from '../../config/env';
import { useJSON } from './useJSON';

export const useImageJSON = ({ path }: { path: string }) => {
  const [paths] = useJSON<string[]>({ json: path, defaultValue: [] });
  const basename = Env.getEnv().HOST;
  const images = paths.map((path) => {
    return `${basename}${path}`;
  });
  return [images];
};

export const useImage = (path: string) => {
  const basename = Env.getEnv().HOST;
  return `${basename}${path}`;
};
