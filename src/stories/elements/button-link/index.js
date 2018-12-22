// @flow
import React from 'react';
import './button-link.scss';

export type IButtonLinkProps = {
	title?: string;
	href?: string;
	className?: string;
	children?: string | any;
}

export default function ButtonLink (props: IButtonLinkProps) {
	return (
		<a
			{...props}
			href={props.href && props.href}
			className={props.className + ' button-link'}
			title={props.title}>{props.children ? props.children : props.title ? props.title : 'button title'}</a>
	);
}
