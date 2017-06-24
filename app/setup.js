import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

// import './boot/initReactotron';
// import Notifications from './components/notifications';
// import Playground from './Playground';
// import GroupExerciseInfo from './screens/group-exercise-info/GroupExerciseInfo';
// import Home from './screens/home/Home';

import createStore from './boot/createStore';
import { runSagas } from './sagas';

// Navigation
// import TabBarNavigation from './tabBar/views/TabBarNavigation';

import MainNavigator from './navigation/MainNavigator';

export default function setup() {
    const store = createStore();
    runSagas();

    return () => (
        <Provider store={store}>
            <View style={{ flex: 1 }}>
                {/* <Notifications />*/}
                <MainNavigator />
            </View>
        </Provider>
  );
}
