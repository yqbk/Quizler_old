import { StyleSheet } from 'react-native';
import { colors, fontSizes } from './../../config/styles';

export const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        height: 80,
        marginLeft: 16
    },
    label: {
        backgroundColor: 'transparent',
        color: colors.mainGrey,
    },
    textInput: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 50,
        color: colors.mainBlack,
        fontSize: fontSizes.kilo,
    },
    borderContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'

    },
    borderGrey: {
        backgroundColor: colors.borderGrey
    },
    borderPink: {
        backgroundColor: colors.mainPink
    },
    button: {
        alignSelf: 'flex-end',
        marginTop: 35,
        marginRight: 8,
        width: 32,
        height: 32,
    },
    icon: {
        width: 32,
        height: 32,
    }
});