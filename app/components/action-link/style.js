import {StyleSheet} from 'react-native';
import {colors, fontSizes, fontWeights} from './../../config/styles';

export default StyleSheet.create({

    linkContainer: {
        flex: 1,
        height: 48,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    text: {
        fontSize: fontSizes.base,
        color: colors.mainPink,
        backgroundColor: 'transparent',
        fontWeight: fontWeights.medium,
    }
});
