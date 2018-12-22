// @flow
import React from 'react';
import ButtonBase from './index';
import { action } from '@storybook/addon-actions';

export default function ExampleButtonBase (props) {
	return (<ButtonBase onClick={action('clicked')} {...props}/>);
}
