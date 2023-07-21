import React from 'react';
import {
  callFnsInSequence,
  findCharIndexesBetweenIndexes,
} from '@or.ds.e/helpers';
import { useToggle } from '@or.ds.e/hooks';
import { FontSize } from '@or.ds.e/foundation';
import { useMemo } from 'react';
import Text from '../../atoms/Text/Text';

export type ReadMoreLessProps = {
  children: string;
  max: number;
  sideEffect?: (isShowFullText: boolean) => void;
  className?: string;
  min?: number;
  size?: keyof typeof FontSize;
};

function ReadMoreLess({
  children,
  max,
  min = 0,
  className: customClassName = '',
  size,
  sideEffect,
}: ReadMoreLessProps) {
  const [isShowFullText, toggleIsShowFullText] = useToggle();
  // const t = useTranslation();
  const isNeeded = children.length > max;
  const shortText = useMemo(() => {
    const spaceIndexes =
      min >= max ? [] : findCharIndexesBetweenIndexes(children, ' ', min, max);
    return children.slice(
      0,
      spaceIndexes.length ? spaceIndexes[spaceIndexes.length - 1] : max,
    );
  }, [children, max, min]);

  const handleToggleIsShowFullText = sideEffect
    ? callFnsInSequence(toggleIsShowFullText, sideEffect)
    : toggleIsShowFullText;

  const className = `dse-read-more-less ${customClassName}`;

  if (!isNeeded)
    return (
      <Text size={size} className={className}>
        {children}
      </Text>
    );

  return (
    <Text size={size} className={className}>
      {isShowFullText ? children : shortText}
      <button onClick={handleToggleIsShowFullText.bind(null, !isShowFullText)}>
        {isShowFullText ? ' ' : '... '}
        {/* <span
          className={`${classes.highlight} ${highlightClassName}`}
          style={highlightStyle}
        >
          {t(`general.${isShowFullText ? 'read-less' : 'read-more'}`)}
        </span> */}
      </button>
    </Text>
  );
}
export default ReadMoreLess;
