import { useToggle } from '@or.ds.e/hooks';
import React, { useCallback, useRef } from 'react';
import Container from '../../atoms/Container/Container';
import Loader from '../../atoms/Loader/Loader';

export type InfinityScrollProps = {
  children: React.ReactNode;
  isHasMore: boolean;
  load: () => void | Promise<void>;
  loader?: React.ReactNode;
  errorComponent?: React.ReactNode;
};

function InfinityScroll({
  isHasMore,
  load,
  errorComponent = <Container variant="danger">Error</Container>,
  loader = <Loader />,
  children,
}: InfinityScrollProps) {
  const [isLoad, toggleIsLoad] = useToggle();
  const [isError, toggleIsError] = useToggle();
  const observer = useRef<IntersectionObserver>();

  const onLoad = useCallback(async () => {
    if (!isHasMore || isError || isLoad) return;
    try {
      toggleIsLoad(true);
      await load();
      toggleIsLoad(false);
    } catch (e: any) {
      toggleIsError(true);
      toggleIsLoad(false);
    }
  }, [isLoad, isHasMore, isError, load, toggleIsLoad]);

  const endElementRef = useCallback(
    (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && isHasMore) {
          onLoad();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isHasMore, onLoad],
  );

  const onErrorClick = () => {
    toggleIsError(false);
    onLoad();
  };

  return (
    <>
      {children}
      <div style={{ paddingBottom: 1, paddingTop: 1 }} ref={endElementRef} />
      {(isLoad || isHasMore) && !isError && loader}
      {isError && <div onClick={onErrorClick}>{errorComponent}</div>}
    </>
  );
}

export default InfinityScroll;
