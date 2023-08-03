import React, { useMemo, useRef, useState } from 'react';
import { useVisualEffect } from '@or.ds.e/hooks';

type HorizontalSide = 'left' | 'right';
type VerticalSide = 'top' | 'bottom';

type FlowMenuProps = {
  children: React.ReactNode;
  isOpen?: boolean;
  isChangeHorizontally?: boolean;
  isChangeVertically?: boolean;
  defaultHorizontalSide?: HorizontalSide;
  defaultVerticalSide?: VerticalSide;
};

function FlowMenu({
  children,
  isOpen,
  isChangeHorizontally,
  isChangeVertically,
  defaultHorizontalSide,
  defaultVerticalSide,
}: FlowMenuProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [HorizontalSide, setHorizontalSide] = useState<
    HorizontalSide | undefined
  >(defaultHorizontalSide);
  const [VerticalSide, setVerticalSide] = useState<VerticalSide | undefined>(
    defaultVerticalSide,
  );

  console.log('render');

  useVisualEffect(() => {
    console.log('happpened');

    if (!ref.current || !isOpen) return;
    const rect = ref.current.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    console.log({
      windowWidth,
      right: rect.right,
    });

    if (
      HorizontalSide &&
      rect[HorizontalSide] > windowWidth &&
      isChangeHorizontally
    ) {
      setHorizontalSide(HorizontalSide === 'left' ? 'right' : 'left');
    }
    if (
      VerticalSide &&
      rect[VerticalSide] > windowHeight &&
      isChangeVertically
    ) {
      setVerticalSide(VerticalSide === 'top' ? 'bottom' : 'top');
    }
  }, [isOpen, isChangeHorizontally, isChangeVertically]);

  const className = useMemo(() => {
    const baseClassName = 'dse-flow-menu';
    const horizontalClassName = HorizontalSide
      ? `dse-horizontal-${HorizontalSide}`
      : '';
    const verticalClassName = VerticalSide
      ? `dse-vertical-${VerticalSide}`
      : '';
    return [baseClassName, horizontalClassName, verticalClassName]
      .join(' ')
      .trim();
  }, [HorizontalSide, VerticalSide, isOpen]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export default FlowMenu;
