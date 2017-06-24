import { StyleSheet } from 'react-native';
import { colors } from './../../config/styles';

export default StyleSheet.create({

    actionBarContainer: {
        flexDirection: 'row',
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
        paddingBottom: 8,
	      backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: colors.dropShadow,
    },
});
