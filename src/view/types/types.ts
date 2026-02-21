export type ErrorType = Error | null;

export type Instantiable<T = any> = {
  new (...args: any[]): T;
};
