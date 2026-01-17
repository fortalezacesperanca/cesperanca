import { useState } from "react";
import type { ErrorType } from "../types/types";
import { waitPromise } from "../util/util";

type UsePromise<T> = [T, () => Promise<any | null>, ErrorType];

export function usePromise<T = unknown>({
  fn,
  defaultValue = null,
}: {
  fn: () => any | null;
  defaultValue: any | null;
}): UsePromise<T> {
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T>(defaultValue);

  const trigger = async () => {
    const [response, err] = await waitPromise<T>(() => fn());
    err && setError(err);
    setData(response);
  };

  return [data, trigger, error];
}
