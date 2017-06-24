import React, { PropTypes } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style';

const ActionLink = ({ text, onPress, style }) => {
    return (
        <TouchableOpacity
          onPress={onPress}
          underlayColor="transparent"
          style={styles.linkContainer}
        >

            <Text style={[styles.text, style]}>{text}</Text>

        </TouchableOpacity>
    );
};

ActionLink.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};

export default ActionLink;
