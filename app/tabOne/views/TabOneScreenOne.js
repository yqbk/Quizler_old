import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button
} from 'react-native';

import Video from 'react-native-video';

// import MyInput from '../../myInput'
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'


const GRADIENT = require('./img/gradient.png');
import styles from './style';
// import Button from '../../components/button/Button';

export default class TabOneScreenOne extends React.Component {


    static navigationOptions = ({ navigation }) => ({
        header: null,
    });

    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);

        this.state = {
            text: 'Useless Placeholder',
            animation: false,
        };
    }

    _onPress() {
        if (!this.state.animation) {
            this.setState({ animation: true });
            this.props.navigation.navigate('TestScreen');
            this.setState({ animation: false });
        } else {
            console.log('prevent double clicking buton');
        }
    }

    render() {
        return (

            <View style={styles.backgroundVideo}>
                <Video
                  source={require('./img/background.mp4')}
                  style={styles.backgroundVideo}
                  rate={1} volume={1} muted
                  resizeMode="cover" repeat
                  key="video"
                />
                <Image source={GRADIENT} style={styles.background}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.text}>Landing Page</Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.actionLinkContainer} />
                        <View style={styles.buttonContainer}>
                            <Button
                              style={styles.buttonContainer}
                              onPress={() => this._onPress()}
                              title="Login"
                            />

                            {/*<Button*/}
                              {/*state={Button.state.default}*/}
                              {/*appearance={Button.appearance.primary}*/}
                              {/*text="text"*/}
                              {/*iconFamily={Button.iconFamily.login}*/}
                              {/*onPress={() => this._onPress()}*/}
                            {/*/>*/}
                        </View>
                    </View>
                </Image>
            </View>

        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 24,
//         backgroundColor: 'white',
//     },
//     content: {
//     // not cool but good enough to make all inputs visible when keyboard is active
//         paddingBottom: 300,
//     },
//     card1: {
//         paddingVertical: 16,
//     },
//     card2: {
//         padding: 16,
//     },
//     input: {
//         marginTop: 4,
//     },
//     title: {
//         paddingBottom: 16,
//         textAlign: 'center',
//         color: '#404d5b',
//         fontSize: 20,
//         fontWeight: 'bold',
//         opacity: 0.8,
//     },
//     backgroundVideo: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         bottom: 0,
//         right: 0,
//     },
//     buttonContainer: {
//         flex: 0.5,
//         justifyContent: 'center',
//         backgroundColor: 'transparent',
//     },
// });
