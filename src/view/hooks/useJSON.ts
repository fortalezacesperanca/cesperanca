import { useEffect } from 'react';
import { JSONProvider } from '../../infra/services/json.provider';
import { usePromise } from './usePromise';

export function useJSON<T>({
  json,
  defaultValue,
}: {
  json: string;
  defaultValue: any;
}) {
  var service = JSONProvider.getInstance();
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
  var service = JSONProvider.getInstance();
  const [data, trigger, _] = usePromise<T>({
    fn: () => service.getByPath(json),
    defaultValue: defaultValue,
  });

  useEffect(() => {
    trigger();
  }, []);

  return data;
}
