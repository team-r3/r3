import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { ActionButton, ListItem } from 'react-native-material-ui'

import { getFilteredPosts } from './CommunityReducers'

import CommunityHeader from './CommunityHeader'

import { resetPosts } from './CommunityActions'
import examplePosts from './posts'

/**
 * Community screen component
 */
class CommunityScreen extends Component {
  componentDidMount () {
    this.props.fetchData()
  }

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
      <View>
        <ScrollView>
          {this.props.posts.map((post, index) => {
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
      </View>
    )
  }
}

// Configure header
CommunityScreen.navigationOptions = ({ navigation }) => {
  return {
    header: (
      <CommunityHeader
        navigation={navigation}
        title='Community'
        search={{ placeholder: 'Search' }}
      />
    )
  }
}

// Map the relevant store state to the community screen component
const mapStateToProps = (state) => {
  return {
    posts: getFilteredPosts(state)
  }
}

// Map actions to event handler props on the community screen component
const mapDispatchToProps = (dispatch) => {
  return {
    // NOTE: This is temporary, later "fetchData" should load from an API
    fetchData: () => dispatch(resetPosts(examplePosts))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityScreen)
