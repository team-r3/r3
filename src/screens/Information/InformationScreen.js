import React, { Component } from 'react';
import { Linking, ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { Card, Divider, ListItem, Subheader } from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PropTypes } from 'prop-types';

import MainContainer from '../../components/MainContainer';

const styles = StyleSheet.create({
  container: {
      flex: 1,
  }
});

/**
 * Information screen component
 */
export default class InformationScreen extends Component {
  render() {
    return (
      <MainContainer
        title='Information'
        search='Search'
        controller={this.props.screenProps.controller}
      >
        <ScrollView style={styles.container}>
        <Card>
          <Subheader text="Paper" />
          <ListItem
            divider
            leftElement="check"
            style={{leftElement:{color:'green'}}}
            centerElement={{
              primaryText:"",
              secondaryText: 'Newspapers and magazines; beverage packages; flat cartons; wrapping paper; paper bags (clean); writing paper',
            }}
            numberOfLines={"dynamic"}
            onPress={() => {}}
          />
          <ListItem
            divider
            leftElement="close"
            style={{leftElement:{color:'red'}}}
            centerElement={{
              primaryText:"",
              secondaryText: 'Papers and cartons contaminated with other materials; napkin; stickers; photographs; clips and staples; packs of tobacco'
            }}
            numberOfLines={"dynamic"}
            onPress={() => {}}
          />
        </Card>
        <Card>
          <Subheader text="Plastic" />
          <ListItem     
            divider
            leftElement="check"
            style={{leftElement:{color:'green'}}}
            centerElement={{
              primaryText:"",
              secondaryText: 'Cans of beverages; cans of preserves; aluminum trays; aluminum foil; Empty aerosols',
            }}
            numberOfLines={"dynamic"}
            onPress={() => {Linking.openURL('https://www.pontoverde.pt/regras_de_separacao.php#move2resultado')}}
          />
          <ListItem
              divider
              leftElement="close"
              style={{leftElement:{color:'red'}}}
              centerElement={{
                primaryText:"",
                secondaryText: 'Packaging contaminated with other materials; rubbers; leather; pots cutlery; caps; cookware; tools; household appliances; syringes and carpets',
              }}
              rightElement="info"
              onPress={() => ToastAndroid.show('List item pressed', ToastAndroid.SHORT)}
              onRightElementPress={() => {
                  if (Platform.OS === 'android') {
                      ToastAndroid.show('Right element pressed', ToastAndroid.SHORT);
                  }
              }}
              numberOfLines={"dynamic"}
              onPress={() => {Linking.openURL('https://www.pontoverde.pt/regras_de_separacao.php#move2resultado')}}
          />
          </Card>
          <Card>
            <Subheader text="Glass" />
            <ListItem
              divider
              leftElement="check"
              style={{leftElement:{color:'green'}}}
              centerElement={{
                primaryText:"",
                secondaryText: 'Bottles, jars, jars of glass',
              }}
              numberOfLines={"dynamic"}
              onPress={() => {}}
            />
            <ListItem
              divider
              leftElement="close"
              style={{leftElement:{color:'red'}}}
              centerElement={{
                primaryText:"",
                secondaryText: 'Mirrors; lamps; glassware; automotive glass; ceramics; porcelain; bottle and acrylic lids'
              }}
              numberOfLines={"dynamic"}
              onPress={() => {}}
            />
          </Card>
          <Card>
            <Subheader text="Batteries" />
            <ListItem
              divider
              leftElement="check"
              style={{leftElement:{color:'green'}}}
              centerElement={{
                primaryText:"",
                secondaryText: 'Used batteries of used controls, lanterns, watches and batteries (cellphone, camera)',
              }}
              numberOfLines={"dynamic"}
              onPress={() => {}}
            />
            <ListItem
              divider
              leftElement="close"
              style={{leftElement:{color:'red'}}}
              centerElement={{
                primaryText:"",
                secondaryText: 'Rechargeable batteries; car batteries; toy batteries; home appliances batteries'
              }}
              numberOfLines={"dynamic"}
              onPress={() => {}}
            />  
          </Card>
        </ScrollView>
      </MainContainer>
    );
  }
}