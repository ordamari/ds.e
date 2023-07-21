import React, { useEffect } from 'react';
import useToggle from '../useToggle';
const useFocusWithin = (ref: React.RefObject<HTMLElement>) => {
  const [isFocusWithin, toggleIsFocusWithin] = useToggle();

  useEffect(() => {
    if (
      ref?.current &&
      (ref.current.contains(document.activeElement) ||
        ref.current === document.activeElement)
    ) {
      toggleIsFocusWithin(true);
    } else {
      toggleIsFocusWithin(false);
    }
  }, [document.activeElement]);

  return isFocusWithin;
};

export default useFocusWithin;
