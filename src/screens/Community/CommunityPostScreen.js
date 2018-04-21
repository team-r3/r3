import React, { Component } from 'react'
import { TextInput } from 'react-native'
// import { Subheader } from 'react-native-material-ui'

import MainContainer from '../../components/MainContainer'

/**
 * Community Post screen component
 */
export default class CommunityPostScreen extends Component {
  render () {
    const type = this.props.navigation.getParam('type', 'request')
    return (
      <MainContainer
        title={type === 'request' ? 'Request' : 'Give away'}
        goBack={this.props.navigation.goBack}
        controller={this.props.screenProps.controller}
      >
        <TextInput
          style={{height: 40}}
          placeholder='Insert your name'
          // onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={{height: 40}}
          placeholder={type === 'request'
            ? 'Describe what you are requesting'
            : 'Describe what you\'re giving away'
          }
          // onChangeText={(text) => this.setState({text})}
        />
      </MainContainer>
    )
  }
}
