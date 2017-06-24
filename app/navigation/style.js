import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights } from './../config/styles';

export const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        borderColor: colors.borderGrey,
        elevation: 1,
    },
    title: {
        color: colors.mainBlack,
        fontSize: fontSizes.base,
        fontWeight: fontWeights.medium,
        alignSelf: 'center',
    },
    emptyPlaceholder: {
        height: 32,
        width: 32,
    }
});

