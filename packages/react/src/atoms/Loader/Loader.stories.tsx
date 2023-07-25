import React from 'react';
import Loader from './Loader';
import '@or.ds.e/scss/lib/Loader.css';
import '@or.ds.e/scss/lib/Utilities.css';
import { Spacing } from '@or.ds.e/foundation';
import { select } from '@storybook/addon-knobs';
export default {
  title: 'Atoms/Loader',
};

const SpacingOptions = Object.keys(Spacing) as Array<keyof typeof Spacing>;

export const Common = () => <Loader />;

export const Size = () => (
  <Loader
    thickness={select('Thickness', SpacingOptions, 'xxs')}
    size={select('Size', SpacingOptions, 'xl')}
  />
);
