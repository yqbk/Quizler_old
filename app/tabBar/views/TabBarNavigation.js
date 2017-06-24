import React from 'react';
import { connect } from 'react-redux';

import { addNavigationHelpers } from 'react-navigation';
import { TabBar } from '../navigationConfiguration';

const mapStateToProps = state => ({
    navigationState: state.tabBar,
});

class TabBarNavigation extends React.Component {

    render() {
        const { dispatch, navigationState } = this.props;

        return (
            <TabBar
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

export default connect(mapStateToProps)(TabBarNavigation);
