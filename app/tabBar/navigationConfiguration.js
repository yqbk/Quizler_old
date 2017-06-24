import { TabNavigator } from 'react-navigation';
import TabOneNavigation from '../tabOne/views/TabOneNavigation';
import TabTwoNavigation from '../tabTwo/views/TabTwoNavigation';
import TabThreeNavigation from '../tabThree/views/TabThreeNavigation';

import { colors } from '../config/styles';

const routeConfiguration = {
    TabOneNavigation: { screen: TabOneNavigation },
    TabTwoNavigation: { screen: TabTwoNavigation },
    TabThreeNavigation: { screen: TabThreeNavigation },
};

const tabBarConfiguration = {
    tabBarOptions: {
        showLabel: false,
        activeTintColor: colors.mainPink,
        inactiveTintColor: colors.borderGrey,
        showIcon: true,
      //  Todo should be deleted
        headerMode: 'none',
        indicatorStyle: {
            height: 0,
        },
        style: {
            backgroundColor: 'white',
            borderTopColor: colors.borderGrey,
            borderTopWidth: 1,
            height: 52,
        },
    },
    tabBarPosition: 'bottom',
};

export const TabBar = TabNavigator(routeConfiguration, tabBarConfiguration);

export const tabBarReducer = (state, action) => {
    if (action.type === 'JUMP_TO_TAB') {
        return { ...state, index: 0 };
    }
    return TabBar.router.getStateForAction(action, state);
};
