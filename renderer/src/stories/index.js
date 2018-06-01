import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import Button from '@material-ui/core/Button';

import TestLine from '../TestLine';
import Counters from '../Counters';

storiesOf('TestLine', module)
  .add('label and custom type', () => <TestLine label="Label only" type="custom" />)
  .add('label and type', () => <TestLine label="Label and type" type="mocha" />)
  .add('label, type and links', () => (
    <TestLine
      label="Label only"
      type="mocha"
      links={[{ name: 'test1', url: 'test1url' }, { name: 'test2', url: 'test2url' }]}
    />
  ))
  .add('label, type and results', () => (
    <TestLine label="Label only" type="mocha" counters={{ total: 100, success: 98, error: 2 }} />
  ));

storiesOf('Counters', module).add('counters', () => <Counters counters={{ total: 100, success: 98, error: 2 }} />);
