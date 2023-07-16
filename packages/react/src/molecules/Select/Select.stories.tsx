import React from "react";
import Select from "./Select";
import '@ds.e/scss/lib/Select.css';

export default {
    title: "Molecules/Select",
}

const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

export const Common = () => <Select options={options} />;


export const RenderOption = () => <Select options={options}
renderOption={({getOptionRecommendedProps,option,isSelected}) => {

    return (
      <li {...getOptionRecommendedProps()} >
        <p>
        {option.value}
        </p>

        {
            isSelected? <span>Selected</span> : null
        }
      </li>
    );
}}
/>;

export const CostumeLabel = () => <Select options={options} label="Select an option" />;