import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabOne } from '../navigationConfiguration';
import { NavigatorTabTwo } from '../../tabTwo/navigationConfiguration';
import { NavigatorTabThree } from '../../tabThree/navigationConfiguration';

const mapStateToProps = state => ({
    navigationState: state.tabOne,
});

class TabOneNavigation extends React.Component {
    static navigationOptions = {
        headerRight: <Button title="Info" />,
        tabBarLabel: 'Tab One',
        tabBarIcon: ({ tintColor }) => <Icon size={20} name={'cogs'} color={tintColor} />,
        tabBarVisible: false,
    };

    render() {
        const { navigationState, dispatch } = this.props;
        return (
            <NavigatorTabOne
              navigation={
                addNavigationHelpers({
                    dispatch,
                    state: navigationState,
                })
              }
            />
        );
    }
}

export default connect(mapStateToProps)(TabOneNavigation);
