import React, { useMemo, useState, useEffect } from 'react';
import Text from '../../atoms/Text/Text';

interface SelectOption<T> {
  label: string;
  value: T;
}

interface RenderOptionProps<T> {
  isSelected: boolean;
  option: SelectOption<T>;
  getOptionRecommendedProps: (overrideProps?: Object) => Object;
}

interface SelectProps<T> {
  options?: SelectOption<T>[];
  label?: string;
  onOptionSelect?: (option: SelectOption<T>, optionIndex: number) => void;
  renderOption?: (props: RenderOptionProps<T>) => React.ReactNode;
}

const KEY_CODES = {
  ENTER: 13,
  SPACE: 32,
  UP_ARROW: 38,
  DOWN_ARROW: 40,
  ESC: 27,
};

const Select = <T extends unknown>({
  options = [],
  label: defaultLabel = 'Please select an option...',
  onOptionSelect: handler,
  renderOption,
}: SelectProps<T>): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [highLightOptionIndex, setHighLightOptionIndex] = useState<
    number | null
  >(0);
  const [optionsRefs, setOptionsRefs] = useState<
    React.RefObject<HTMLLIElement>[]
  >([]);
  const [selectedOptionIndex, setSelectedOptionIdx] = useState<number | null>(
    null,
  );

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const highLightOption = (optionIndex: number | null) => {
    setHighLightOptionIndex(optionIndex);
  };

  const getNextOptionIndex = (currentOptionIndex: number | null) => {
    if (currentOptionIndex === null) return 0;
    if (currentOptionIndex === options.length - 1) return 0;
    return currentOptionIndex + 1;
  };

  const getPreviousOptionIndex = (currentOptionIndex: number | null) => {
    if (!currentOptionIndex) return options.length - 1;
    return currentOptionIndex - 1;
  };

  const onLabelKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    event.preventDefault();
    switch (event.keyCode) {
      case KEY_CODES.ENTER:
      case KEY_CODES.SPACE:
      case KEY_CODES.DOWN_ARROW:
        setIsOpen(true);
        setHighLightOptionIndex(0);
        break;
    }
  };

  const onOptionKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    switch (event.keyCode) {
      case KEY_CODES.ESC:
        setIsOpen(false);
        break;
      case KEY_CODES.DOWN_ARROW:
        setHighLightOptionIndex(getNextOptionIndex);
        break;
      case KEY_CODES.UP_ARROW:
        setHighLightOptionIndex(getPreviousOptionIndex);
        break;
      case KEY_CODES.ENTER:
      case KEY_CODES.SPACE:
        if (highLightOptionIndex === null) return;
        const option = options[highLightOptionIndex];
        if (!option) return;
        onOptionSelect(option, highLightOptionIndex);
    }
  };

  const onOptionSelect = (option: SelectOption<T>, optionIndex: number) => {
    if (handler) handler(option, optionIndex);
    setSelectedOptionIdx(optionIndex);
    setIsOpen(false);
  };

  const onLabelClick = () => {
    toggleIsOpen();
  };

  useEffect(() => {
    setOptionsRefs(options.map(() => React.createRef<HTMLLIElement>()));
  }, [options.length]);

  useEffect(() => {
    if (!isOpen) {
      setHighLightOptionIndex(null);
      return;
    }
    if (highLightOptionIndex === null) {
      setHighLightOptionIndex(0);
      return;
    }
    if (highLightOptionIndex === null || !isOpen) return;
    const ref = optionsRefs[highLightOptionIndex];
    if (ref && ref.current) ref.current.focus();
  }, [isOpen, highLightOptionIndex]);

  const label = useMemo(() => {
    if (selectedOptionIndex === null) return defaultLabel;
    const selectedOption = options[selectedOptionIndex];
    if (selectedOption) return selectedOption.label;
    return defaultLabel;
  }, [selectedOptionIndex]);

  const caretClassName = useMemo(() => {
    if (isOpen) return 'dse-select__caret--open';
    return 'ds-select__caret--closed';
  }, [isOpen]);

  return (
    <div className="dse-select">
      <button
        aria-haspopup={true}
        aria-expanded={isOpen ? true : undefined}
        aria-controls="dse-select-list"
        data-testid="DseSelectButton"
        className="dse-select__label"
        onClick={onLabelClick}
        onKeyDown={onLabelKeyDown}
      >
        <Text>{label}</Text>
        <svg
          fill="none"
          className={`dse-select__caret ${caretClassName}`}
          stroke="currentColor"
          strokeWidth="1.5"
          width="1rem"
          height="1rem"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <ul
        role="menu"
        id="dse-select-list"
        className={`dse-select__overlay ${
          isOpen ? 'dse-select__overlay--open' : ''
        }`}
      >
        {options.map((option, index) => {
          const isSelected = selectedOptionIndex === index;
          const isHighLighted = highLightOptionIndex === index;
          const className = `dse-select__option ${
            isSelected ? 'dse-select__option--selected' : ''
          } ${isHighLighted ? 'dse-select__option--highlighted' : ''}`;
          const key = option.label + index;
          const ref = optionsRefs[index];
          const onClick = () => onOptionSelect(option, index);
          const renderOptionProps = {
            isSelected,
            option,
            getOptionRecommendedProps: (overrideProps = {}) => {
              {
                return {
                  className,
                  onClick,
                  key,
                  ref,
                  tabIndex: isHighLighted ? -1 : 0,
                  'area-checked': isSelected ? true : undefined,
                  'area-label': option.label,
                  role: 'menuitemradio',
                  onKeyDown: onOptionKeyDown,
                  onMouseEnter: highLightOption.bind(null, index),
                  onMouseLeave: highLightOption.bind(null, null),
                  ...overrideProps,
                };
              }
            },
          } as RenderOptionProps<T>;

          if (renderOption) return renderOption(renderOptionProps);
          return (
            <li {...renderOptionProps.getOptionRecommendedProps()}>
              <Text>{option.label}</Text>
              {isSelected ? (
                <svg
                  fill="none"
                  width="1rem"
                  height="1rem"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
