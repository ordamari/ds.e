import React from 'react';
import '@or.ds.e/scss/lib/Utilities.css';
import '@or.ds.e/scss/lib/Margin.css';

import Margin from './Margin';
import { Spacing } from '@or.ds.e/foundation';
import { select, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Atoms/Margin',
};
const SpacingOptions = Object.values(Spacing);

export const Common = () => (
  <div
    style={{
      border: '1px solid black',
      height: 'max-content',
      width: 'max-content',
    }}
  >
    <Margin
      space={select('Space', SpacingOptions, 'xl')}
      bottom={boolean('Bottom', false)}
      top={boolean('Top', false)}
      start={boolean('Start', false)}
      end={boolean('End', false)}
    >
      Text
    </Margin>
  </div>
);
