import { useEffect } from 'react';
import { JsonService } from '../../infra/services/json.service';
import { usePromise } from './usePromise';

export function useJSON<T>({
  json,
  defaultValue,
}: {
  json: string;
  defaultValue: any;
}) {
  var service = JsonService.getInstance();
  const [data, trigger, _] = usePromise<T>({
    fn: () => service.getByPath(json),
    defaultValue: defaultValue,
  });

  useEffect(() => {
    trigger();
  }, []);

  return [data];
}
