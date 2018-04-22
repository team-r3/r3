import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { ActionButton, ListItem } from 'react-native-material-ui'

import MainContainer from '../../components/MainContainer'
import MainToolbar from '../../components/MainToolbar'

/**
 * Community screen component
 */
export default class CommunityScreen extends Component {
  static navigationOptions ({ navigation, screenProps }) {
    return {
      header: (
        <MainToolbar
          navigation={navigation}
          title='Community'
          search={{
            placeholder: 'Search',
            onChange: text => screenProps.controller.updateSearch(text),
            onClose: () => screenProps.controller.updateSearch('')
          }}
        />
      )
    }
  }

  matchPersonName (personName, filter) {
    const filters = filter.split(' ')

    // All filters are included in the name
    if (filters.every(filter => { return personName.includes(filter) })) {
      return true
    }
    // All name parts are referenced in the filter, as initials, plus last name
    if (filters.length === 1) {
      return personName.split(' ').every((value, i, nameParts) => {
        return (i < nameParts.length - 1)
          ? value[0] === filters[0][i] // First names' initials
          : value.includes(filters[0].slice(i)) // Last name must include the remainder of the filter
      })
    }
    return false
  }

  getPosts () {
    const controller = this.props.screenProps.controller
    const filter = controller.getSearch().trim().toLowerCase()
    return controller.getCommunityPosts().filter((post) => {
      return (
        post.text.toLowerCase().includes(filter) ||
        this.matchPersonName(post.user.toLowerCase(), filter)
      )
    })
  }

  /**
   *
   */
  render () {
    const actions = [
      {
        name: 'give-away', // Action name: 'give-away'
        label: 'Give away',
        icon: 'insert-emoticon' // TODO: change to 'heart'
      },
      {
        name: 'request', // Action name: 'request'
        label: 'Make a request',
        icon: 'chat-bubble' // TODO: change to 'basket'
      }
    ]

    const onAction = (action) => {
      switch (action) {
        case 'request':
        case 'give-away':
          this.props.navigation.navigate('CommunityPost', { type: action })
          break
      }
    }

    return (
      <MainContainer
        title='Community'
        search='Search'
        controller={this.props.screenProps.controller}
      >
        <ScrollView>
          {this.getPosts().map((post, index) => {
            return (
              <ListItem
                divider
                leftElement={post.type === 'request' ? 'chat-bubble' : 'insert-emoticon'}
                // leftElement={post.type == 'request' ? 'basket' : 'heart'}
                centerElement={{
                  primaryText: post.user,
                  secondaryText: post.text
                }}
                key={post.key}
                onPress={() => {}}
                onPressValue={post.key}
                numberOfLines={'dynamic'}
              />
            )
          })}
        </ScrollView>
        <ActionButton onPress={onAction} actions={actions} transition='speedDial' />
      </MainContainer>
    )
  }
}
