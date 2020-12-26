import React from 'react';
import {Meta, storiesOf} from '@storybook/react';
import CustomComponent from 'component-package';

export default {
  title: 'CustomComponent',
  component: CustomComponent,
} as Meta;

storiesOf('CustomComponent Story', module)
  .add('CustomComponent', () => <CustomComponent title="Title" value={42} />)