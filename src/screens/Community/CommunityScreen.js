import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { Container, Button, Fab, Text, ListItem, Icon, Left, Body, Right } from 'native-base'
import { connect } from 'react-redux'

import { getFilteredPosts } from './CommunityReducers'
import { getLogin } from '../Login/LoginReducers'

import CommunityHeader from './CommunityHeader'

import { resetPosts } from './CommunityActions'
import examplePosts from './posts'

/**
 * Community screen component
 */
class CommunityScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
  }

  componentDidMount () {
    this.props.fetchData()
  }

  render () {
    const actions = [
      {
        key: 'give-away',
        label: 'Give away',
        icon: 'heart'
      },
      {
        key: 'request',
        label: 'Make a request',
        icon: 'basket'
      }
    ]

    const onSelectAction = (actionKey) => {
      this.props.navigation.navigate('CommunityPost', { type: actionKey })
      this.setState({ active: false })
    }

    if (this.props.isLoggedIn) {
      return (
        <Container>
          <View style={{ flex: 1 }}>
            <FlatList
              data={this.props.posts}
              renderItem={({item}) =>
                <ListItem avatar>
                  <Left>
                    <Icon name={item.type === 'request' ? 'basket' : 'heart'} />
                  </Left>
                  <Body>
                    <Text>{item.user}</Text>
                    <Text note>{item.text}</Text>
                  </Body>
                  <Right>
                    <Icon name='arrow-forward' />
                  </Right>
                </ListItem>
              } />
            <Fab
              active={this.state.active}
              direction='up'
              containerStyle={{ }}
              style={{ backgroundColor: '#0381ff' }}
              position='bottomRight'
              onPress={() => this.setState({ active: !this.state.active })}
            >
              <Icon name='add' />
              {actions.map((action) =>
                <Button
                  style={{ backgroundColor: '#8a323f' }}
                  key={action.key}
                  onPress={() => onSelectAction(action.key)}
                >
                  {/* <Text note>{action.label}</Text> */}
                  <Icon name={action.icon} />
                </Button>
              )}
            </Fab>
          </View>
        </Container>
      )
    } else {
      return (
        <View>
          <Text>Please login to continue </Text>
          <Text>To access the community section, you must first login with your account, or create a new account if you don't have one.</Text>
          <Button
            onPress={() => this.props.navigation.navigate('Login')}
          >
            <Text>Login</Text>
          </Button>
        </View>
      )
    }
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
    posts: getFilteredPosts(state),
    isLoggedIn: getLogin(state)
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
