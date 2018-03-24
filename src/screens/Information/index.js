import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { Card, Divider, ListItem, Subheader } from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PropTypes } from 'prop-types';

import MainContainer from '../../components/MainContainer';

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
});

/*
CONTAINER
 BLUE: 
  PUT ON:
   Newspapers and magazines; 
   beverage packages; 
   flat cartons; 
   wrapping paper; 
   paper bags (clean); 
   writing paper
  DO NOT PUT ON:
   Papers and cartons contaminated with other materials; 
   napkin; 
   stickers; 
   photographs; 
   clips and staples; 
   packs of tobacco
 YELLOW:
   PUT ON:
    Cans of beverages; 
	cans of preserves; 
	aluminum trays; 
	aluminum foil; 
	Empty aerosols
   DO NOT PUT ON:
    Packaging contaminated with other materials; 
	rubbers; 
	leather; 
	pots cutlery; 
	caps; 
	cookware; 
	tools; 
	household appliances; 
	syringes and carpets

 GREEN:
   PUT ON: Bottles and jars, jars, jars, glass
   DO NOT PUT ON: Mirrors; lamps; glassware; automotive glass; ceramics; porcelain; bottle and acrylic lids

 RED:
   PUT ON:Used batteries of used controls, lanterns, watches and batteries (cellphone, camera)
   DO NOT PUT ON:Rechargeable batteries; car batteries; toy batteries; home appliances batteries
	*/

/**
 * Information screen component
 */
export default class Information extends Component {
  render() {
    return (
      <MainContainer title='Information'>
        <ScrollView style={styles.container}>
            <Subheader text="Paper" />
            <ListItem
                divider
                dense
                centerElement={{
                    primaryText: 'Put On',
                    secondaryText: 'Newspapers and magazinesbeverage packages<br/>flat cartons<br/>wrapping paper<br/>paper bags (clean)<br/>writing paper',
                }}
            />
            <ListItem
                divider
                centerElement={{
                    primaryText: 'Do Not Put On',
                    secondaryText: 'Subtext',
                }}
            />
            <Subheader text="Plastic" />
            <ListItem
                
                divider
                leftElement="check"
                centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Subtext',
                }}
            />
            <ListItem
                divider
                leftElement="close"
                centerElement={{
                    primaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum',
                }}
                rightElement="info"
                onLeftElementPress={() => {
                    if (Platform.OS === 'android') {
                        ToastAndroid.show('Left element pressed', ToastAndroid.SHORT);
                    }
                }}
                onPress={() => ToastAndroid.show('List item pressed', ToastAndroid.SHORT)}
                onRightElementPress={() => {
                    if (Platform.OS === 'android') {
                        ToastAndroid.show('Right element pressed', ToastAndroid.SHORT);
                    }
                }}
            />
            <Subheader text="Glass" />
            <ListItem
                divider
                leftElement="person"
                centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                }}
                numberOfLines={3}
            />
            <ListItem
                divider
                leftElement="person"
                centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                }}
            />
            <ListItem
                divider
                leftElement="person"
                centerElement={{
                    primaryText: 'Ali Connors',
                    secondaryText: 'Brunch this weekend?',
                    tertiaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum.',
                }}
                style={{
                    secondaryText: "",
                }}
            />
            <Subheader text="Dynamic" />
            <ListItem
                divider
                leftElement="person"
                numberOfLines="dynamic"
                centerElement={{
                    primaryText: 'With dynamic second line',
                    secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Pellentesque commodo ultrices diam. Praesent in ipsum',
                }}
                onPress={() => {}}
            />
            <Subheader text="Custom" />
            <ListItem
                divider
                leftElement="person"
                centerElement={<Text>Custom center element</Text>}
            />
        </ScrollView>
      </MainContainer>
    );
  }
}
