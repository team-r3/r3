import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-material-ui';

/**
 * Screen chooser component
 */
export default class Navigator extends Component {
  render() {
    const currentIndex = this.props.navigation.state.index;
    const currentRoute = this.props.navigation.state.routes[currentIndex].routeName;
    return (
      <BottomNavigation active={currentRoute} hidden={false} >
        <BottomNavigation.Action
          key="Map"
          icon="place"
          label="Recycling spots"
          onPress={() => this.props.navigation.navigate('Map')}
        />
        <BottomNavigation.Action
          key="Community"
          icon="view-list"
          label="Community"
          onPress={() => this.props.navigation.navigate('Community')}
        />
        <BottomNavigation.Action
          key="Information"
          icon="info"
          label="Information"
          onPress={() => this.props.navigation.navigate('Information')}
        />
      </BottomNavigation>
    );
  }
}
