import { useEffect } from 'react';
import { JSONService } from '../../infra/services/json.service';
import { usePromise } from './usePromise';

export function useJSON<T>({
  json,
  defaultValue,
}: {
  json: string;
  defaultValue: any;
}) {
  var service = JSONService.getInstance();
  const [data, trigger, _] = usePromise<T>({
    fn: () => service.getByPath(json),
    defaultValue: defaultValue,
  });

  useEffect(() => {
    trigger();
  }, []);

  return [data];
}
export function useJSONData<T>(json: string, defaultValue: any) {
  var service = JSONService.getInstance();
  const [data, trigger, _] = usePromise<T>({
    fn: () => service.getByPath(json),
    defaultValue: defaultValue,
  });

  useEffect(() => {
    trigger();
  }, []);

  return data;
}
