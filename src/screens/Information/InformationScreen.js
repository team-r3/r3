import React, { Component } from 'react'
import { Linking, ScrollView, StyleSheet } from 'react-native'
import { Body, Card, List, ListItem, Icon, Text, Left } from 'native-base'

import MainToolbar from '../../components/MainToolbar'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

/**
 * Information screen component
 */
class InformationScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <Card>
          <List text='Paper' itemDivider >
            <ListItem icon>
              <Left>
                <Icon name='checkmark-circle' style={{color: 'green'}} />
              </Left>
              <Body>
                <Text>Newspapers and magazines; beverage packages; flat cartons; wrapping paper; paper bags (clean); writing paper</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name='close-circle' style={{color: 'red'}} />
              </Left>
              <Body>
                <Text>Papers and cartons contaminated with other materials; napkin; stickers; photographs; clips and staples; packs of tobacco</Text>
              </Body>
            </ListItem>
          </List>
        </Card>
        <Card>
          <List text='Plastic' >
            <ListItem icon>
              <Left>
                <Icon name='checkmark-circle' style={{color: 'green'}} />
              </Left>
              <Body>
                <Text>Cans of beverages; cans of preserves; aluminum trays; aluminum foil; Empty aerosols</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name='close-circle' style={{color: 'red'}} />
              </Left>
              <Body>
                <Text>Packaging contaminated with other materials; rubbers; leather; pots cutlery; caps; cookware; tools; household appliances; syringes and carpets</Text>
              </Body>
            </ListItem>
          </List>
        </Card>
        <Card>
          <List text='Glass' >
            <ListItem icon>
              <Left>
                <Icon name='checkmark-circle' style={{color: 'green'}} />
              </Left>
              <Body>
                <Text>Bottles, jars, jars of glass</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name='close-circle' style={{color: 'red'}} />
              </Left>
              <Body>
                <Text>Mirrors; lamps; glassware; automotive glass; ceramics; porcelain; bottle and acrylic lids</Text>
              </Body>
            </ListItem>
          </List>
        </Card>
        <Card>
          <List text='Batteries' >
            <ListItem icon>
              <Left>
                <Icon name='checkmark-circle' style={{color: 'green'}} />
              </Left>
              <Body>
                <Text>Used batteries of used controls, lanterns, watches and batteries (cellphone, camera)</Text>
              </Body>
            </ListItem>
            <ListItem
              icon
              onPress={() => { Linking.openURL('https://www.pontoverde.pt/regras_de_separacao.php#move2resultado') }}
            >
              <Left>
                <Icon name='close-circle' style={{color: 'red'}} />
              </Left>
              <Body>
                <Text>Rechargeable batteries; car batteries; toy batteries; home appliances batteries</Text>
              </Body>
            </ListItem>
          </List>
        </Card>
      </ScrollView>
    )
  }
}

InformationScreen.navigationOptions = ({ navigation, screenProps }) => ({
  header: (
    <MainToolbar
      navigation={navigation}
      title='Information'
      search={{
        placeholder: 'Search',
        onChange: text => screenProps.controller.updateSearch(text),
        onClose: () => screenProps.controller.updateSearch('')
      }}
    />
  )
})

export default InformationScreen
