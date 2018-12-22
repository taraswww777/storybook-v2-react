// @flow
import React from 'react';
import './button-base.scss';

export type IButtonBaseProps = {
	title?: string;
	className?: string;
	children?: string | any;
}

export default function ButtonBase (props: IButtonBaseProps) {

	return (
		<button
			{...props}
			className={props.className + ' button-base'}
			title={props.title}>{props.children ? props.children : props.title ? props.title : 'button title'}</button>
	);
}
