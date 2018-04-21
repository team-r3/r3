import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Dialog, DialogDefaultActions } from 'react-native-material-ui'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default class Modal extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Dialog>
          <Dialog.Title><Text>{this.props.title}</Text></Dialog.Title>
          <Dialog.Content>
            {this.props.children}
          </Dialog.Content>
          <Dialog.Actions>
            <DialogDefaultActions
              actions={['cancel', 'ok']}
              /**
              * this will disable the button for "ok"
              */
              options={{ ok: { disabled: true } }}
              onActionPress={(action) => {
                if (action === 'ok') {
                  // TODO: do stuff...
                }
                this.props.modal.show(null)
              }}
            />
          </Dialog.Actions>
        </Dialog>
      </View>
    )
  }
}
