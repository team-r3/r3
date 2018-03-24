import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Subheader } from 'react-native-material-ui';
import MapView from 'react-native-maps';

import MainContainer from '../../components/MainContainer';


/**
 * Map screen component
 */
export default class Map extends Component {
  render() {
    return (
      <MainContainer title='Map'>

        <MapView style={styleMap.map}
          region={{
            latitude: 37.015589,
            longitude: -7.933262,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05
          }}
        >
          
          <MapView.Marker
            coordinate={{
              latitude: 37.015589,
              longitude: -7.933262
            }}
            title={'Ecoponto'}
            description={'Large aqui vidro, plástico ou papel'}
          />
        

        </MapView>
      </MainContainer>
    );
  }
}


const styleMap = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});
