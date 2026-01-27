import type { OptionalGetOptions, ServiceIdentifier } from 'inversify';
import { useEffect } from 'react';
import type { IUseCase } from '../../app/iusecase';
import { useDiInjection } from './useDiInjection';
import { usePromise } from './usePromise';

export function useUseCase<T>(
  serviceIdentifier: ServiceIdentifier<IUseCase<unknown, T>>,
  options?: OptionalGetOptions,
): [T] {
  const usecase = useDiInjection(serviceIdentifier, options);
  const [data, trigger, _] = usePromise<T>({
    fn: () => usecase.execute(),
    defaultValue: [],
  });

  useEffect(() => {
    trigger();
  }, []);

  return [data];
}
