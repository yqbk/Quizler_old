import {StyleSheet} from 'react-native';
import {colors, fontSizes, fontWeights} from './../../config/styles';

export default StyleSheet.create({

	// Background colors
	primaryDefaultBackgroundColor: {
		backgroundColor: colors.mainPink,
	},

	primaryLoadingBackgroundColor: {
		backgroundColor: colors.mainPink,
	},

	primaryDisabledBackgroundColor: {
		backgroundColor: colors.loaderGrey,
	},

	primaryFailureBackgroundColor: {
		backgroundColor: 'rgb(217, 53, 35)',
	},

	secondaryDefaultBackgroundColor: {
		backgroundColor: 'white',
	},

	secondaryLoadingBackgroundColor: {
		backgroundColor: 'white',
	},

	secondaryDisabledBackgroundColor: {
		backgroundColor: 'white',
	},

	// Text colors
	primaryDefaultTextColor: {
		color: 'white',
	},

	primaryLoadingTextColor: {
		color: 'white',
	},

	primaryDisabledTextColor: {
		color: colors.mainGrey,
	},

	primaryFailureTextColor: {
		color: 'white',
	},

	secondaryDefaultTextColor: {
		color: colors.mainPink,
	},

	secondaryLoadingTextColor: {
		color: colors.mainPink,
	},

	secondaryDisabledTextColor: {
		color: colors.mainGrey,
	},

	// Border colors
	primaryDefaultBorderColor: {
		borderColor: colors.mainPink,
	},

	primaryLoadingBorderColor: {
		borderColor: colors.mainPink,
	},

	primaryDisabledBorderColor: {
		borderColor: colors.loaderGrey,
	},

	primaryFailureBorderColor: {
		borderColor: 'rgb(217, 53, 35)',
	},

	secondaryDefaultBorderColor: {
		borderColor: colors.mainPink,
	},

	secondaryLoadingBorderColor: {
		borderColor: colors.mainPink,
	},

	secondaryDisabledBorderColor: {
		borderColor: colors.mainGrey,
	},

	// Containers

	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		borderWidth: 1,
		borderRadius: 3,
		alignItems: 'center',
	},

	text: {
		fontSize: fontSizes.base,
		fontWeight: fontWeights.medium,
		flex: 1,
		marginLeft: 13,
		marginRight: 13,
	},

	icon: {
		marginRight: 13,
	},

	disabledIcon: {
		tintColor: colors.mainGrey
	}

});
