
import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Button } from 'react-native';
export default class Home extends React.Component {
    render() {
        return (
            <View
              style={{
                  flex: 1,
                  backgroundColor: 'white',
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
              }}
            >
                <Text>{ 'Tab Two Screen One' }</Text>


                <FlatList
                  data={[{ key: 'a' }, { key: 'b' }]}
                  renderItem={({ item }) => <Text>{item.key}</Text>}
                  removeClippedSubviews={false}
                  style={{
                  }}
                />


            </View>
        );
    }
}
