import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  Image,
} from 'react-native';

// import { TabNavigator } from 'react-navigation'

import Video from 'react-native-video';
import styles from './style';

const GRADIENT = require('./img/gradient.png');


export default class TestScreen extends React.Component {


    static navigationOptions = ({ navigation }) => ({
        title: 'Login',
    });
    render() {
    // The screen's current route is passed in to `props.navigation.state`:
        return (


            <View style={styles.container}>
                <View style={styles.contentContainer} />
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                />


                <View style={styles.actionLinkContainer} />

                <View style={styles.buttonContainer}>
                    <Button
                      style={styles.buttonContainer}
                      onPress={() => this.props.navigation.navigate('TabThreeScreenOne')}
                      title="Go to screen one"
                    />
                </View>
            </View>
        );
    }
}
