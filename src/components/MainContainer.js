import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ActionButton, Toolbar } from 'react-native-material-ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1
  }
});

/**
 * Screen chooser component
 */
export default class MainContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.modal||null}
        <Toolbar
          leftElement="menu"
          centerElement={this.props.title}
          searchable={{
            autoFocus: true,
            placeholder: 'Search',
          }}
        />
        <View style={styles.main}>
          {this.props.children}
        </View>
        {this.props.actionButton ? (
          <ActionButton
            onPress={this.props.actionButton.onPress||null}
            actions={this.props.actionButton.actions||null}
            transition={this.props.actionButton.transition||'speedDial'}
          />
        ) : null}
      </View>
    );
  }
}
