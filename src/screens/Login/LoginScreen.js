import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userLogin } from './LoginActions'
import { View, Image } from 'react-native'
import { Button, Text, Input, Form, Item as FormItem, Label } from 'native-base'
import logo from './logo.png'

/**
 * Login screen component
 */
class LoginScreen extends Component {
  render () {
    return (
      <View
        // alignItems='center' justifyContent='space-between'
      >
        <Image source={logo} />
        <Form>
          <FormItem floatingLabel>
            <Label>Email</Label>
            <Input />
          </FormItem>
          <FormItem floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry />
          </FormItem>

          <Button full primary style={{ paddingBottom: 4 }}
            onPress={() => this.props.userLogin(this.props.navigation)}
          >
            <Text> Login </Text>
          </Button>
          <Button full light primary
          >
            <Text> Sign Up </Text>
          </Button>
        </Form>
      </View>
    )
  }
}

// Map the relevant store state to the community screen component
const mapStateToProps = (state) => {
  return {}
}

// Map actions to event handler props on the community screen component
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (navigation) => {
      dispatch(userLogin())
      navigation.navigate('Community')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
