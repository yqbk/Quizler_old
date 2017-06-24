import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './style';

const Tab = (icon) => ({ tintColor, focused }) => {

    const tabStyle = [styles.icon, {tintColor: tintColor}];
    const containerStyle = [styles.container];

    if(focused) {
        containerStyle.push(styles.active);
    }

    return (
        <View style={containerStyle}>
            <Image source={icon}
                   style={tabStyle}/>
        </View>
    )
};

export default Tab;