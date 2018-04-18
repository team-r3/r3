import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Subheader } from 'react-native-material-ui';
import MapView from 'react-native-maps';

import MainContainer from '../../components/MainContainer';
import MainToolbar   from '../../components/MainToolbar';
import mapSpots from './spots.json';

/**
 * Map screen component
 */
export default class MapScreen extends Component {
  static navigationOptions = ({
    navigation,
    navigationOptions,
    screenProps
  }) => ({
    header: (
      <MainToolbar
        navigation={navigation}
        title='Recycling spots'
        search={{
          placeholder: 'Search',
          onChange:    text => screenProps.controller.updateSearch(text),
          onClose:     () => screenProps.controller.updateSearch('')
        }}
      />
    )
  });

  render() {
    return (
      <MainContainer
        title='Recycling spots'
        search='Search'
        controller={this.props.screenProps.controller}
      >

        <MapView style={styleMap.map}
          region={{
            latitude: 37.015589,
            longitude: -7.933262,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03
          }}
        >
          
          {mapSpots.map((spot,index) => {
            let title, description, imageSource;
            switch(spot.type){
              case "eco":
                title="Recycle center";
                description="Available: Paper, Plastic, Glass";
                imageSource=require("./img/map-pin-eco.png");
                break;
              case "battery":
                title="Battery";
                description="Battery drop point";
                imageSource=require("./img/map-pin-battery.png");
                break;
              case "oil":
                title="Oil waste";
                description="Oil drop point";
                imageSource=require("./img/map-pin-oil.png");
                break;
            } 
            return(
              <MapView.Marker
                coordinate={{
                  latitude: spot.latitude,
                  longitude: spot.longitude
                }}
                title={title}
                description={description}
                key={spot.key}
              >
                <Image
                  style={{width: 40, height: 40}}
                  source={imageSource}
                />
              </MapView.Marker>
            );
          })}




            
          
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
