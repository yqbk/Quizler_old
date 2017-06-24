

import { StackNavigator } from 'react-navigation';

// Screens
import TabOneScreenOne from './views/TabOneScreenOne';
import TabOneScreenTwo from './views/TabOneScreenTwo';
import TestScreen from '../screens/login/testScreen';

const routeConfiguration = {
    TabOneScreenOne: { screen: TabOneScreenOne },
    TabOneScreenTwo: { screen: TabOneScreenTwo },
    TestScreen: { screen: TestScreen },
};

// going to disable the header for now
const stackNavigatorConfiguration = {
    mode: 'modal',
    headerMode: 'float',
    initialRoute: 'TabOneScreenOne',
};

export const NavigatorTabOne = StackNavigator(routeConfiguration, stackNavigatorConfiguration);
