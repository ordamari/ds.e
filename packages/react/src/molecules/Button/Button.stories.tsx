import React from 'react';
import Button from './Button';
import { select, boolean, text } from '@storybook/addon-knobs';
import '@or.ds.e/scss/lib/Button.css';
import '@or.ds.e/scss/lib/Utilities.css';
import { Variant, FontSize, Icon } from '@or.ds.e/foundation';

const variantOptions = Object.keys(Variant) as Array<keyof typeof Variant>;
const sizeOptions = Object.keys(FontSize) as Array<keyof typeof FontSize>;
const iconOptions = Object.keys(Icon) as Array<keyof typeof Icon>;

export default {
  title: 'Molecules/Button',
};

export const Common = () => <Button>{text('Label', 'Button')}</Button>;

export const Variants = () => (
  <Button variant={select('Variant', variantOptions, Variant.primary)}>
    Button
  </Button>
);

export const Sizes = () => (
  <Button size={select('Size', sizeOptions, FontSize.base)}>Button</Button>
);

export const Disabled = () => (
  <Button
    variant={select('Variant', variantOptions, Variant.primary)}
    disabled={boolean('Disabled', true)}
  >
    Button
  </Button>
);

export const WithIcon = () => (
  <Button icon={select('Icon', iconOptions, Icon.caret)}>Button</Button>
);
