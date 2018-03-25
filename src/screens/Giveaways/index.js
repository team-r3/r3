import React, { Component } from 'react';
import { ScrollView, View, TextInput, Text } from 'react-native';
import { ListItem, Subheader } from 'react-native-material-ui';

import MainContainer from '../../components/MainContainer';
import Modal from '../../components/Modal';

/**
 * Map screen component
 */
export default class Giveaways extends Component {
  onActionButton() {
    console.log('aaaa');
  }

  getModal() {
    switch (this.props.modal.current) {
      case 'request':
      case 'give':
        const request  = (this.props.modal.current == 'request');
        const validate = () => {
          return true;
        }
        return (    
          <Modal title={request ? 'Request' : 'Give away'} modal={this.props.modal} validate={validate}>
            <TextInput
              style={{height: 40}}
              placeholder="Insert your name"
              // onChangeText={(text) => this.setState({text})}
            />
            <TextInput
              style={{height: 40}}
              placeholder={request ? "Describe what you are requesting" : "Describe what you're giving away"}
              // onChangeText={(text) => this.setState({text})}
            />
          </Modal>
        );

      default:
        return null;
    }
  }

  render() {
    const actionButtonSettings = {
      actions: [
        {
          icon:  'insert-emoticon',
          label: 'Give away',
          name:  'give'
        },
        {
          icon:  'chat-bubble',
          label: 'Make a request',
          name:  'request'
        }
      ],
      onPress: (action) => {
        switch (action) {
          case 'request':
          case 'give':
            this.props.modal.show(action);
            break;
        }
      }
    };
    return (
      <MainContainer title='Community' actionButton={actionButtonSettings} modal={this.getModal()}>
        <ScrollView>
          {this.props.posts.map((post, index) => {
            return (
              <ListItem
                divider
                leftElement={post.type == 'request' ? 'chat-bubble' : 'insert-emoticon'}
                centerElement={{
                    primaryText:   post.user,
                    secondaryText: post.text,
                }}
                key={post.key}
                onPress={() => {}}
                onPressValue={post.key}
                numberOfLines={'dynamic'}
              />
            );
          })}
        </ScrollView>
      </MainContainer>
    );
  }
}
