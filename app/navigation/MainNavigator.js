import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { isLoggedIn, didSkipLogin } from './../selectors/auth';

import Login from './../screens/login/Login';
import Main from './../screens/main/Main';

import { TabBarNavigator } from './tab-bar-navigator/TabBarNavigator';

import { styles } from './style';

console.ignoredYellowBox = ['Warning: BackAndroid', 'Remote debugger']; // tmp workaround https://github.com/react-community/react-navigation/pull/1333

const CardNavigator = StackNavigator({
    Main: {
        screen: TabBarNavigator,
    },
}, {
    headerMode: 'none',
});

const AppNavigator = StackNavigator({
    CardNavigator: {
        screen: CardNavigator,
    },
}, {
    headerMode: 'none',
    mode: 'modal',
});


const StartNavigator = StackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            header: null,
        },
    },
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => ({
            title: 'Login',
            headerStyle: styles.header,
            headerTitleStyle: styles.title,
            headerLeft: (<Button title="Back" onPress={() => navigation.goBack()} />),
            headerRight: (<View />), // just for center title properly on Android
        }),
    },
}, {
    mode: 'modal',
});

const MainNavigator = ({ isLoggedIn, didSkipLogin }) => {
    console.log(`zalogowany? ${isLoggedIn}`);
    const FrontNavigator = (isLoggedIn || didSkipLogin) ? AppNavigator : StartNavigator;

    return <FrontNavigator />;
};


//
const mapStateToProps = state => ({
    isLoggedIn: isLoggedIn(state),
    didSkipLogin: didSkipLogin(state),
});


export default connect(mapStateToProps)(MainNavigator);
