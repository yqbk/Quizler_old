

import { StackNavigator } from 'react-navigation';

// Screens
import TabTwoScreenOne from './views/TabTwoScreenOne';
import TabTwoScreenTwo from './views/TabTwoScreenTwo';
import TestScreen from '../screens/login/testScreen';

const routeConfiguration = {
    TabTwoScreenOne: { screen: TabTwoScreenOne },
    TabTwoScreenTwo: { screen: TabTwoScreenTwo },
    TestScreen: { screen: TestScreen },
};
// going to disable the header for now

const stackNavigatorConfiguration = {
    headerMode: 'float',
    initialRoute: 'TabTwoScreenOne',
};

export const NavigatorTabTwo = StackNavigator(routeConfiguration, stackNavigatorConfiguration);
