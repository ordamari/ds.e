import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

function useVisualEffect(effect: EffectCallback, deps: DependencyList) {
  const resizeObserver = useRef<ResizeObserver>();
  const mutationObserver = useRef<MutationObserver>();

  useEffect(() => {
    effect();
    resizeObserver.current = new ResizeObserver(effect);
    mutationObserver.current = new MutationObserver(effect);
    return () => {
      resizeObserver.current?.disconnect();
      mutationObserver.current?.disconnect();
    };
  }, [deps]);
}

export default useVisualEffect;
