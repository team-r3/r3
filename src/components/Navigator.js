import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-material-ui';

/**
 * Screen chooser component
 */
export default class Navigator extends Component {
  render() {
    return (
      <BottomNavigation active={this.props.current} hidden={false} >
        <BottomNavigation.Action
          key="map"
          icon="place"
          label="Recycling spots"
          onPress={() => this.props.navigate('map')}
        />
        <BottomNavigation.Action
          key="giveaways"
          icon="view-list"
          label="Community"
          onPress={() => this.props.navigate('giveaways')}
        />
        <BottomNavigation.Action
          key="information"
          icon="info"
          label="Information"
          onPress={() => this.props.navigate('information')}
        />
      </BottomNavigation>
    );
  }
}
