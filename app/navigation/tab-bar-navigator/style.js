import { StyleSheet } from 'react-native';
import { colors } from './../../config/styles';

export const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26
    },

    container: {
        flex: 1,
        borderTopWidth: 2,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white'
    },

    active: {
        borderColor: colors.mainPink,
    }
});

