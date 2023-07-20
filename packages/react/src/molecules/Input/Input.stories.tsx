import React from 'react';
import Input from './Input';
import '@or.ds.e/scss/lib/Input.css';

export default {
  title: 'Molecules/Input',
};

export const Common = () => <Input />;

export const WithIcon = () => <Input icon="caret" />;
