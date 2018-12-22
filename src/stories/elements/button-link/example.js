// @flow
import React from 'react';
import { action } from '@storybook/addon-actions';
import ButtonLink from './index';

export default function ExampleButtonLink (props) {
	return (<ButtonLink onClick={action('clicked')} {...props}/>);
}
