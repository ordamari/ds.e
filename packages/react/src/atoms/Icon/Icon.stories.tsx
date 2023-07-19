import React from 'react';
import Icon from './Icon';
import '@or.ds.e/scss/lib/Utilities.css';
import { Icon as IconOptions, Spacing } from '@or.ds.e/foundation';
import { select } from '@storybook/addon-knobs';

export default {
  title: 'Atoms/Icon',
};
const IconsOptions = Object.values(IconOptions);
const SpacingOptions = Object.values(Spacing);

export const Common = () => (
  <Icon icon={select('icon', IconsOptions, 'caret')} />
);

export const CustomDimensions = () => (
  <Icon icon="caret" size={select('Size', SpacingOptions, 'xl')} />
);
