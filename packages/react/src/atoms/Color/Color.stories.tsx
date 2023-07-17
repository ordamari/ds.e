import React from 'react';
import Color from './Color';
import { text, select } from '@storybook/addon-knobs';
import '@ds.e/scss/lib/Utilities.css';
import { Spacing } from '@ds.e/foundation';

export default {
  title: 'Atoms/Color',
};

export const Common = () => <Color hexCode={text('Hex Code', '#ff0000')} />;

const SpacingOptions = Object.values(Spacing);

export const CustomDimensions = () => (
  <Color
    hexCode="#ff0000"
    width={select('Width', SpacingOptions, 'xl')}
    height={select('Height', SpacingOptions, 'xl')}
  />
);
