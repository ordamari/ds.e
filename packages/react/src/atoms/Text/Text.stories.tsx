import React from 'react';
import Text from './Text';
import { FontSize } from '@ds.e/foundation';
import { select } from '@storybook/addon-knobs';
import '@ds.e/scss/lib/Text.css';

export default {
  title: 'Atoms/Text',
};

const fontSizeOptions = Object.values(FontSize);

export const Common = () => <Text>Text</Text>;

export const CustomFontSize = () => (
  <Text size={select('Font size', fontSizeOptions, 'xl')}>Text</Text>
);
