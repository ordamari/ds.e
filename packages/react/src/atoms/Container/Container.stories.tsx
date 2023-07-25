import React from 'react';
import Container from './Container';
import { text, select, boolean } from '@storybook/addon-knobs';
import Text from '../Text/Text';
import '@or.ds.e/scss/lib/Container.css';
import { Variant, Spacing, Align, Justify } from '@or.ds.e/foundation';

export default {
  title: 'Atoms/Container',
};

const VariantOptions = Object.keys(Variant) as Array<keyof typeof Variant>;
const SpacingOptions = Object.keys(Spacing) as Array<keyof typeof Spacing>;
const AlignOptions = Object.keys(Align) as Array<keyof typeof Align>;
const JustifyOptions = Object.keys(Justify) as Array<keyof typeof Justify>;

export const Common = () => (
  <Container>
    <Text>{text('Text', 'Hello World')}</Text>
  </Container>
);

export const Variants = () => (
  <>
    <Container variant={select('Variant', VariantOptions, 'none')}>
      <Text>Hello World</Text>
    </Container>
  </>
);

export const Positioning = () => (
  <Container
    flex={boolean('Flex', true)}
    center={boolean('Center', false)}
    direction={select('Direction', ['row', 'column'], 'column')}
    gap={select('Gap', SpacingOptions, 'none')}
    align={select('Align', AlignOptions, 'flex-start')}
    justify={select('Justify', JustifyOptions, 'flex-start')}
  >
    <Text>First Child</Text>
    <Text>Second Child</Text>
    <Text>Third Child</Text>
  </Container>
);
