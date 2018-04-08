import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1
  }
});

/**
 * Main container component
 */
export default class MainContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.modal||null}
        <Toolbar
          leftElement="menu"
          centerElement={this.props.title}
          searchable={this.props.search ? {
            autoFocus:      true,
            placeholder:    this.props.search,
            onChangeText:   text => this.props.controller.updateSearch(text),
            onSearchClosed: () => this.props.controller.updateSearch('')
          } : null}
        />
        <View style={styles.main}>
          {this.props.children}
        </View>
      </View>
    );
  }
}
