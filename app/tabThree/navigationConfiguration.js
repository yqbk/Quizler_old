
import { StackNavigator } from 'react-navigation';

// Screens
import TabThreeScreenOne from './views/TabThreeScreenOne';
import TabThreeScreenTwo from './views/TabThreeScreenTwo';
import TabThreeScreenThree from './views/TabThreeScreenThree';
import TabOneScreenOne from '../tabOne/views/TabOneScreenOne';
import TabOneScreenTwo from '../tabOne/views/TabOneScreenTwo';
import TestScreen from '../screens/login/testScreen';

const routeConfiguration = {
    TabThreeScreenOne: { screen: TabThreeScreenOne },
    TabThreeScreenTwo: { screen: TabThreeScreenTwo },
    TabThreeScreenThree: { screen: TabThreeScreenThree },
    TabOneScreenOne: { screen: TabOneScreenOne },
    TabOneScreenTwo: { screen: TabOneScreenTwo },
    TestScreen: { screen: TestScreen },

};
// going to disable the header for now
const stackNavigatorConfiguration = {
    headerMode: 'float',
    initialRoute: 'TabThreeScreenOne',
};

export const NavigatorTabThree = StackNavigator(routeConfiguration, stackNavigatorConfiguration);
