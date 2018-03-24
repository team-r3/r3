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
 * Screen chooser component
 */
export default class MainContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}
