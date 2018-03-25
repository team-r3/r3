import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Dialog, DialogDefaultActions } from 'react-native-material-ui';

export default class Modal extends Component {
  render() {
    return (
      <View>
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
                if (action == 'ok') {
                  //TODO: do cenas
                }
                this.props.modal.show(null);
              }}
            />
          </Dialog.Actions>
        </Dialog>
      </View>
    );
  }
}
