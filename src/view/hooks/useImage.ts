import { useEffect, useState } from 'react';
import { ImageService } from '../../infra/services/image.service';
import { usePromise } from './usePromise';

export function useImageList<T = string | string[]>({
  path,
  defaultValue,
}: {
  path: string | string[];
  defaultValue: any;
}) {
  var service = ImageService.getInstance();

  const isArrayOfPaths = Array.isArray(path);

  const [data, trigger, _] = usePromise<T>({
    fn: () =>
      isArrayOfPaths ? service.getByPaths(path) : service.getByPath(path),
    defaultValue: defaultValue,
  });

  useEffect(() => {
    trigger();
  }, []);

  return [data];
}
export function useImage(): [string, (path: string) => Promise<void>] {
  var service = ImageService.getInstance();
  //@ts-ignore
  const [src, setSrc] = useState<string>(null);

  const trigger = async (path: string) => {
    const base64 = await service.getByPath(path);
    setSrc(base64);
  };

  return [src, trigger];
}
