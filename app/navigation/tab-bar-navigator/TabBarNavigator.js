import { TabNavigator, TabBarBottom } from 'react-navigation';
import Tab from './Tab';
import { colors } from './../../config/styles';

import Home from '../../screens/home/Home';
// import Upcoming from './../../screens/upcoming/Upcoming';
// import Profile from './../../screens/profile/Profile';

const HOME_ICON = require('./img/home/exploreDefault.png');
const SEARCH_ICON = require('./img/search/searchDefault.png');
const UPCOMING_ICON = require('./img/upcoming/upcomingDefault.png');
const PROFILE_ICON = require('./img/profile/profileDefault.png');


export const TabBarNavigator = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: Tab(HOME_ICON),
        },
    },
    // Upcoming: {
    //     screen: Upcoming,
    //     navigationOptions: {
    //         tabBarIcon: Tab(UPCOMING_ICON),
    //     },
    // },
    // Profile: {
    //     screen: Profile,
    //     navigationOptions: {
    //         tabBarIcon: Tab(PROFILE_ICON),
    //     },
    // },
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showLabel: false,
        activeTintColor: colors.mainPink,
        inactiveTintColor: colors.borderGrey,
        style: {
            backgroundColor: 'white',
            borderTopColor: colors.borderGrey,
            borderTopWidth: 1,
            height: 52,
        },
    },
});
