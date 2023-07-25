import React from 'react';
import ReactDOM from 'react-dom';

import { Margin, Select, Input, Loader } from '@or.ds.e/react';

import '@or.ds.e/scss/lib/Utilities.css';
import '@or.ds.e/scss/lib/Text.css';
import '@or.ds.e/scss/lib/Margin.css';
import '@or.ds.e/scss/lib/global.css';
import '@or.ds.e/scss/lib/Select';
import '@or.ds.e/scss/lib/Input';
import '@or.ds.e/scss/lib/Loader.css';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

ReactDOM.render(
  <Margin space="xxxl">
    <Input icon="caret" />
    <Loader />
  </Margin>,
  document.getElementById('root'),
);
