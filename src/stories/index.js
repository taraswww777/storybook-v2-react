import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import ExampleButtonBase from './elements/button-base/example';
import ExampleButtonLink from './elements/button-link/example';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);

storiesOf('Buttons', module)
	.add('base', () => <ExampleButtonBase/>)
	.add('link', () => <ExampleButtonLink/>)
;

