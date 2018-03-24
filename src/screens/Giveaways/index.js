import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Subheader } from 'react-native-material-ui';

import MainContainer from '../../components/MainContainer';

/**
 * Map screen component
 */
export default class Giveaways extends Component {
  onActionButton() {
    console.log('aaaa');
  }

  render() {
    return (
      <MainContainer title='Give away' onActionButton={this.onActionButton}>
        <Subheader text="Subheader text" />
        <Text>Give-receive used stuff...</Text>
      </MainContainer>
    );
  }
}
