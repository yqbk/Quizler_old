import React, {PureComponent, PropTypes} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import ImageSpin from '../../components/image-spin/ImageSpin';
import styles from './style';

const bookIcons = [
	[
		require('./img/primaryDefaultBook.png'),
		require('./img/primaryLoadingBook.png'),
	],
	[
		require('./img/secondaryDefaultBook.png'),
		require('./img/secondaryLoadingBook.png'),
	],
];

const searchIcons = [
	[
		require('./img/primaryDefaultSearch.png'),
		require('./img/primaryLoadingBook.png'),
	],
];

const groupExerciseIcons = [
	[
		require('./img/primaryDefaultGroupExercise.png'),
		require('./img/primaryLoadingBook.png'),
	],
];

const centerIcons = [
	[
		require('./img/primaryDefaultCenter.png'),
		require('./img/primaryLoadingBook.png'),
	],
];

const timeIcons = [
	[
		require('./img/primaryDefaultTime.png'),
		require('./img/primaryLoadingBook.png'),
	],
];

const loginIcons = [
	[
		require('./img/primaryDefaultLogin.png'),
		require('./img/primaryLoadingBook.png'),
	],
];

const backgroundColorStyles = [
	[
		styles.primaryDefaultBackgroundColor,
		styles.primaryLoadingBackgroundColor,
		styles.primaryDisabledBackgroundColor,
		styles.primaryFailureBackgroundColor,
	],
	[
		styles.secondaryDefaultBackgroundColor,
		styles.secondaryLoadingBackgroundColor,
		styles.secondaryDisabledBackgroundColor,
	],
];

const textColorStyles = [
	[
		styles.primaryDefaultTextColor,
		styles.primaryLoadingTextColor,
		styles.primaryDisabledTextColor,
		styles.primaryFailureTextColor,
	],
	[
		styles.secondaryDefaultTextColor,
		styles.secondaryLoadingTextColor,
		styles.secondaryDisabledTextColor,
	],
];

const borderColorStyles = [
	[
		styles.primaryDefaultBorderColor,
		styles.primaryLoadingBorderColor,
		styles.primaryDisabledBorderColor,
		styles.primaryFailureBorderColor,
	],
	[
		styles.secondaryDefaultBorderColor,
		styles.secondaryLoadingBorderColor,
		styles.secondaryDisabledBorderColor,
	],
];

class Button extends PureComponent {

	static state = {
		default: 0,
		loading: 1,
		disabled: 2,
		failure: 3,
	};

	static appearance = {
		primary: 0,
		secondary: 1,
	};

	static iconFamily = {
		book: 'book',
		search: 'search',
		groupExercise: 'groupExercise',
		center: 'center',
		time: 'time',
		login: 'login',
	};

	static propTypes = {
		state: PropTypes.number.isRequired,
		appearance: PropTypes.number.isRequired,
		onPress: PropTypes.func,
		text: PropTypes.string,
		iconFamily: PropTypes.string,
		backgroundColor: PropTypes.string,
		borderColor: PropTypes.string,
		textColor: PropTypes.string,
		width: PropTypes.number,
	};

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.appearance !== nextProps.appearance
			|| this.props.state !== nextProps.state
			|| this.props.text !== nextProps.text
			|| this.props.iconFamily !== nextProps.iconFamily
			|| this.props.backgroundColor !== nextProps.backgroundColor
			|| this.props.borderColor !== nextProps.borderColor
			|| this.props.textColor !== nextProps.textColor
			|| this.props.width !== nextProps.width;
	}

	render() {

		// If only text or image, then this is a small button
		const containerHeight = this.props.iconFamily === undefined || this.props.text === undefined ? 40 : 48;
		let containerStyle = {height: containerHeight};
		if (this.props.width !== undefined) {
			containerStyle.push = [containerStyle, {width: this.props.width}];
		}

		// Set background and border colors
		let backgroundColorStyle = backgroundColorStyles[this.props.appearance][this.props.state];
		if (this.props.backgroundColor !== undefined) {
			backgroundColorStyle = {backgroundColor: this.props.backgroundColor};
		}
		let borderColorStyle = borderColorStyles[this.props.appearance][this.props.state];
		if (this.props.borderColor !== undefined) {
			borderColorStyle = {borderColor: this.props.borderColor};
		}
		let buttonContainerStyle = [styles.buttonContainer, backgroundColorStyle, borderColorStyle];

		// Set text style
		let textColorStyle = textColorStyles[this.props.appearance][this.props.state];
		if (this.props.textColor !== undefined) {
			textColorStyle = {color: this.props.textColor};
		}
		let textStyle = [styles.text, textColorStyle];
		const text = this.props.text;

		let imageSource = this.getIcon(this.props.appearance, this.props.state, this.props.iconFamily);
		let iconStyle = styles.icon;

		// If no specific disabled icon, then use the default and tint it
		if (imageSource === undefined && this.props.state === Button.state.disabled) {
			imageSource = this.getIcon(Button.appearance.primary, Button.state.default, this.props.iconFamily);
			iconStyle = [iconStyle, styles.disabledIcon];
		}

		// If no specific failure icon, then use the default
		if (imageSource === undefined && this.props.state === Button.state.failure) {
			imageSource = this.getIcon(Button.appearance.primary, Button.state.default, this.props.iconFamily);
		}

		// If no icon, then center the text
		if (imageSource === undefined) {
			textStyle = [textStyle, {textAlign: 'center', marginLeft: 8, marginRight: 8}];
		}

		// If no text, then center the image
		if (text === undefined) {
			buttonContainerStyle = [buttonContainerStyle, {justifyContent: 'center'}];
			iconStyle = [iconStyle, {marginRight: 0}];
		}

		// Entire button is disabled when state is disabled, and also while loading
		const isDisabled = this.props.state === Button.state.disabled || this.props.state === Button.state.loading;

		return (
			<TouchableOpacity style={containerStyle} disabled={isDisabled} onPress={this.props.onPress}>
				<View style={buttonContainerStyle}>
					{text && <Text style={textStyle} numberOfLines={2}>{text}</Text>}

					{/* Animated loader image */}
					{imageSource && this.props.state === Button.state.loading
					&& <ImageSpin source={imageSource} style={iconStyle}/>}

					{/* Normal image */}
					{imageSource && this.props.state !== Button.state.loading
					&& <Image style={iconStyle} source={imageSource}/>}
				</View>
			</TouchableOpacity>
		);
	}

	getIcon(appearance, state, iconFamily) {
		if (iconFamily === undefined) {
			return undefined;
		}
		if (iconFamily === Button.iconFamily.book) {
			return bookIcons[appearance][state];
		}
		if (iconFamily === Button.iconFamily.search) {
			return searchIcons[appearance][state];
		}
		if (iconFamily === Button.iconFamily.groupExercise) {
			return groupExerciseIcons[appearance][state];
		}
		if (iconFamily === Button.iconFamily.center) {
			return centerIcons[appearance][state];
		}
		if (iconFamily === Button.iconFamily.time) {
			return timeIcons[appearance][state];
		}
		if (iconFamily === Button.iconFamily.login) {
			return loginIcons[appearance][state];
		}
	}
}

export default Button;
