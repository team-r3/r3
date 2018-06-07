import React, { Component } from 'react'
import { Linking, ScrollView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Body, Card, List, ListItem, Icon, Text, Left } from 'native-base'

import MainToolbar from '../../components/MainToolbar'

import { getSearch } from './InformationReducers'

import information from './information'

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

        {information.map((entry, index) => {
          return (
            <Card key={index} style={{ backgroundColor: entry.color }}>
              <List>
                <ListItem itemDivider style={{ backgroundColor: entry.color }}>
                  <Text>{entry.category}</Text>
                </ListItem>
                <ListItem avatar>
                  <Left>
                    <Icon name='checkmark-circle' style={{color: 'green'}} />
                  </Left>
                  <Body>
                    <Text>{entry.do.join('; ')}</Text>
                  </Body>
                </ListItem>
                <ListItem avatar
                  onPress={() => { Linking.openURL('https://www.pontoverde.pt/regras_de_separacao.php#move2resultado') }}
                >
                  <Left>
                    <Icon name='close-circle' style={{color: 'red'}} />
                  </Left>
                  <Body>
                    <Text>{entry.dont.join('; ')}</Text>
                  </Body>
                </ListItem>
              </List>
            </Card>
          )
        })}

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

// Map the relevant store state to the information screen component
const mapStateToProps = (state) => {
  return {
    searchInput: getSearch(state)
  }
}

// Map actions to event handler props on the information screen component
const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(InformationScreen)
