import { StyleSheet } from 'react-native';
import { fontWeights, fontSizes, colors } from '../../config/styles';

export default StyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },


    card: {
        marginTop: 100,
        marginBottom: 100,
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        // overflow: 'hidden',
        // borderColor: 'grey',
        backgroundColor: 'transparent',
        // borderWidth: 1,
        elevation: 1,
        borderColor: 'transparent',
    },

    flipCard: {
        flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
        borderColor: 'transparent',
        backgroundColor: 'white',
        width: 300,
      // borderColor: 'green',
      // borderRadius: 20,

    },

    thumbnail: {
        flex: 1,
        width: 300,
        height: 300,
    },
    text: {
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10,
        color: 'black',
        // fontWeight: 'bold',
    },

    smallText: {
        width: 200,
        fontSize: 15,
        paddingTop: 50,
        paddingBottom: 10,
        color: 'grey',
    },

    noMoreCards: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cardsContainer: {
        marginTop: 100,
        backgroundColor: 'grey',

    },

    cardContainer: {
        width: 100,
        height: 100,
    },


    face: {
        // backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'blue',
        borderWidth: 3,
        borderRadius: 3,
    },


    back: {
        // backgroundColor: 'blue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 3,
        borderRadius: 3,
    },


    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
    },

    header: {
        fontSize: fontSizes.giga,
        fontWeight: fontWeights.bold,
    },

    progressBar: {

    },

    progressBarText: {

    },
    //
    //
    // card: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: 200,
    //     height: 100,
    // },
    //
    // actionContainer: {
    //     height: 64,
    //     flexDirection: 'row',
    //     alignItems: 'stretch',
    //     paddingLeft: 16,
    //     paddingRight: 16,
    // },
    //
    // background: {
    //     flex: 1,
    //     width: null,
    //     height: null,
    //     resizeMode: 'cover',
    // },
    //
    // text: {
    //     marginLeft: 16,
    //     marginRight: 16,
    //     fontSize: 40,
    //     color: 'grey',
    //     backgroundColor: 'transparent',
    //     marginBottom: 80,
    //     fontWeight: 'bold',
    // },
    //
    // actionLinkContainer: {
    //     flex: 0.5,
    //     justifyContent: 'center',
    // },
    //
    // buttonContainer: {
    //     flex: 0.5,
	   //  justifyContent: 'center',
    // },
    //
    // backgroundVideo: {
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     bottom: 0,
    //     right: 0,
    //     backgroundColor: 'white',
    // },
});
