import React from 'react';
import Toggle from './Toggle';

export default {
  title: 'Molecules/Toggle',
};

export const CommonCheckbox = () => <Toggle type="checkbox" />;
export const CommonCheckboxDisabled = () => <Toggle disabled type="checkbox" />;
export const CommonSwitch = () => <Toggle type="switch" />;
