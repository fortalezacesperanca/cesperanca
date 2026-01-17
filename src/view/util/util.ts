import type { ErrorType } from "../types/types";

export const waitPromise = async <T extends unknown>(
  promise: () => Promise<any>,
): Promise<[T, ErrorType]> => {
  try {
    const response: T = await promise();
    return [response, null];
  } catch (err) {
    console.error(err);
    return [null as T, err as unknown as Error];
  }
};

export function groupBy<T>(list: any[], key: string) {
  var obj = list.reduce<Record<string, T[]>>((acc, item) => {
    acc[item[key]] ??= [];
    acc[item[key]].push(item);
    return acc;
  }, {});

  return Object.entries(obj);
}
