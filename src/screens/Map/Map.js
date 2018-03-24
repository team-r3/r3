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
      <MainContainer title='Map'>
        <Text>Put the map here...</Text>
      </MainContainer>
    );
  }
}
