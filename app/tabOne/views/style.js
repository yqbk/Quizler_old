import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },

    actionContainer: {
        height: 64,
        flexDirection: 'row',
        alignItems: 'stretch',
        paddingLeft: 16,
        paddingRight: 16,
    },

    background: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },

    text: {
        marginLeft: 16,
        marginRight: 16,
        fontSize: 40,
        color: 'white',
        backgroundColor: 'transparent',
        marginBottom: 80,
        fontWeight: 'bold',
    },

    actionLinkContainer: {
        flex: 0.5,
        justifyContent: 'center',
    },

    buttonContainer: {
        flex: 0.5,
        justifyContent: 'center',
        // backgroundColor: 'white',
    },

    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
