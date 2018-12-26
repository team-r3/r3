import React, { Component } from 'react'
import { TextInput } from 'react-native'
import { Container } from 'native-base'

import SubScreenToolbar from '../../components/SubScreenToolbar'

/**
 * Community Post screen component
 */
class CommunityPostScreen extends Component {
  render () {
    const type = this.props.navigation.getParam('type', 'request')
    return (
      <Container>
        <TextInput
          style={{ height: 40 }}
          placeholder='Insert your name'
          // onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder={type === 'request'
            ? 'Describe what you are requesting'
            : 'Describe what you\'re giving away'
          }
          // onChangeText={(text) => this.setState({text})}
        />
      </Container>
    )
  }
}

CommunityPostScreen.navigationOptions = ({ navigation }) => ({
  header: (
    <SubScreenToolbar
      navigation={navigation}
      title={navigation.getParam('type', 'request') === 'request' ? 'Request' : 'Give away'}
    />
  )
})

export default CommunityPostScreen
