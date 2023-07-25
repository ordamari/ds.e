import React, { useMemo } from 'react';
import { Spacing } from '@or.ds.e/foundation';

type LoaderProps = {
  size?: keyof typeof Spacing;
  thickness?: keyof typeof Spacing;
};

function Loader({ size = 'xl', thickness = 'xxs' }: LoaderProps) {
  const [widthClass, heightClass] = useMemo(() => {
    return ['width', 'height'].map((prop) => `dse-${prop}-${size}`);
  }, [size]);

  const thicknessClass = useMemo(
    () => `dse-thickness-${thickness}`,
    [thickness],
  );

  return (
    <span
      className={`dse-loader ${widthClass} ${heightClass} ${thicknessClass}`}
    />
  );
}

export default Loader;
