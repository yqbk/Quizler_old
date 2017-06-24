
import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
export default class TabThreeScreenOne extends React.Component {
    render() {
        return (
            <View
              style={{
                  flex: 1,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
              }}
            >
                <Text>{ 'Tab Three Screen One' }</Text>


                <Button
                  onPress={() => this.props.navigation.navigate('TestScreen')}
                  title="Chat with Lucy"
                />

            </View>
        );
    }
}
