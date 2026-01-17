import { useEffect } from "react";
import { JsonService } from "../../infra/services/json.service";
import { usePromise } from "./usePromise";

export function useJSON<T>({
  path,
  defaultValue,
}: {
  path: string;
  defaultValue: any;
}) {
  var service = JsonService.getInstance();
  const [data, trigger, _] = usePromise<T>({
    fn: () => service.getByPath(path),
    defaultValue: defaultValue,
  });

  useEffect(() => {
    trigger();
  }, []);

  return [data];
}
