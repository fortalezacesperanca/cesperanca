import axios from "axios";
import { useState } from "react";
import type { ErrorType } from "../types/types";
import { waitPromise } from "../util/util";

type UseHttp<T> = [T, () => Promise<void>, ErrorType];

export function useHttp<T = unknown>({
  baseURL = "/",
  url = "/",
  defaultValue = null,
}: {
  baseURL: string;
  url: string;
  defaultValue: any;
}): UseHttp<T> {
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T>(defaultValue);

  const trigger = async () => {
    const client = axios.create({
      baseURL: baseURL,
    });
    const [response, err] = await waitPromise<{ data: any }>(() =>
      client.get(url)
    );
    err && setError(err);
    setData(response.data);
  };

  return [data, trigger, error];
}
