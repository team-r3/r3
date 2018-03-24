import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Subheader } from 'react-native-material-ui';

import MainContainer from '../../components/MainContainer';

/**
 * Map screen component
 */
export default class Map extends Component {
  render() {
    return (
      <MainContainer title='Information'>
        <Subheader text="Subheader text" />
        <Text>Useful information...</Text>
      </MainContainer>
    );
  }
}
