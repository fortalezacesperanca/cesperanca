import type { OptionalGetOptions, ServiceIdentifier } from 'inversify';
import { useContext } from 'react';
import { DiContext } from '../contexts/DiContext';

export function useDiInjection<T>(
  serviceIdentifier: ServiceIdentifier<T>,
  options?: OptionalGetOptions,
) {
  const { container } = useContext(DiContext);
  const dep = container.get(serviceIdentifier, options);
  return dep;
}
