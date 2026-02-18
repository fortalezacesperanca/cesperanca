import { useActionState, useEffect } from 'react';

/**
 * Usa useActionState
 * mas consome o dispatchAction imediatamente ao montar o componente
 */
export function useAction<State>(
  action: () => State,
  initialState: Awaited<State>,
): [state: Awaited<State>, isPending: boolean] {
  const [data, dispatchAction, isPending] = useActionState(
    action,
    initialState,
  );
  useEffect(() => {
    dispatchAction();
  }, []);

  return [data, isPending];
}
