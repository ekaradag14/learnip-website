import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import styles from 'assets/jss/material-kit-pro-react/components/infoStyle.js';

const useStyles = makeStyles(styles);

export default function InfoArea(props) {
	const {
		title,
		description,
		iconColor,
		vertical,
		className,
		isIconSVG,
		iconWidth,
		iconHeight,
		iconOnRight = false,
	} = props;
	const classes = useStyles();
	const iconWrapper = classNames({
		[classes.iconWrapper]: true,
		[classes[iconColor]]: true,
		[classes.iconWrapperVertical]: vertical,
	});
	const iconClasses = classNames({
		[classes.icon]: true,
		[classes.iconVertical]: vertical,
	});
	const infoAreaClasses = classNames({
		[classes.infoArea]: true,
		[className]: className !== undefined,
	});
	let icon = null;
	switch (typeof props.icon) {
		case 'string':
			icon = <Icon className={iconClasses}>{props.icon}</Icon>;
			break;
		default:
			icon = <props.icon className={iconClasses} />;
			break;
	}
	return (
		<div className={infoAreaClasses}>
			<h4 className={classes.title}>{title}</h4>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignContent: 'center',
				}}
			>
				{iconOnRight && (
					<div className={classes.description} style={{ alignSelf: 'center' }}>
						{description}
					</div>
				)}
				<div style={{ padding: 10, margin: 'auto' }}>
					{isIconSVG ? (
						<img
							style={{ width: iconWidth, height: iconHeight, margin: 'auto' }}
							src={props.icon}
						/>
					) : (
						icon
					)}
				</div>
				{!iconOnRight && (
					<div className={classes.description} style={{ alignSelf: 'center' }}>
						{description}
					</div>
				)}
			</div>
		</div>
	);
}

InfoArea.defaultProps = {
	iconColor: 'gray',
};

InfoArea.propTypes = {
	icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.node.isRequired,
	iconColor: PropTypes.oneOf([
		'primary',
		'warning',
		'danger',
		'success',
		'info',
		'rose',
		'gray',
	]),
	vertical: PropTypes.bool,
	className: PropTypes.string,
};
