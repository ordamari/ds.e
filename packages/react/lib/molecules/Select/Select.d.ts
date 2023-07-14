import React from 'react';
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
declare const Select: <T extends unknown>({ options, label: defaultLabel, onOptionSelect: handler, renderOption, }: SelectProps<T>) => JSX.Element;
export default Select;
