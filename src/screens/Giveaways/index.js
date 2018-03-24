import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Subheader } from 'react-native-material-ui';

import MainContainer from '../../components/MainContainer';
import Modal from '../../components/Modal';

/**
 * Map screen component
 */
export default class Giveaways extends Component {
  onActionButton() {
    console.log('aaaa');
  }

  render() {
    const actionButtonSettings = {
      actions: [
        {
          icon: 'info',
          label: 'Give away',
          name: 'give'
        },
        {
          icon: 'info',
          label: 'Ask for',
          name: 'ask'
        }
      ],
      onPress: (action) => {
        switch (action) {
          case 'ask':
          case 'give':
            this.props.modal.show(action);
            break;
        }
      }
    };
    return (
      <MainContainer title='Give away' actionButton={actionButtonSettings}>
        <Subheader text="Subheader text" />
        <Text>Give-receive used stuff...</Text>
        {(this.props.modal.current) ? (
          <Modal title="cenas" modal={this.props.modal}>
            <Text>current: {this.props.modal.current}</Text>
          </Modal>
        ) : null}
      </MainContainer>
    );
  }
}
