import React from 'react';
import Paginator from './Paginator';
import { number } from '@storybook/addon-knobs';
import '@or.ds.e/scss/lib/Paginator.css';

export default {
  title: 'Organisms/Paginator',
};

export const Common = () => (
  <Paginator
    selectedPage={number('selectedPage', 0, {
      range: true,
      min: 0,
    })}
    pages={10}
  />
);
