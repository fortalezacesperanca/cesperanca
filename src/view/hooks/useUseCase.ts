import type { OptionalGetOptions, ServiceIdentifier } from 'inversify';
import type { IUseCase } from '../../app/iusecase';
import { useDiInjection } from './useDiInjection';
import { usePromise } from './usePromise';

export function useUseCase<I, O>(
  serviceIdentifier: ServiceIdentifier<IUseCase<I, O>>,
  options?: OptionalGetOptions,
): [O, (input?: I) => Promise<O>] {
  const usecase = useDiInjection(serviceIdentifier, options);

  const [data, trigger, _] = usePromise<O>({
    fn: (...args) => usecase.execute(...args),
    defaultValue: [],
  });

  // useEffect(() => {
  //   trigger();
  // }, []);

  return [data, trigger];
}
