import React from 'react';
import {View} from 'react-native';
import styles from './style';

const ActionBar = ({children}) => (
    <View style={styles.actionBarContainer}>
        {children}
    </View>
);

export default ActionBar;