/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { COLOR, ThemeProvider } from 'react-native-material-ui';

import Navigator from './components/Navigator';
import Map from './screens/Map/Map';
import Giveaways from './screens/Giveaways';
import Information from './screens/Information';


// Material UI theme (only needs to be set here - will be propagated to the app)
const uiTheme = {
  palette: {
      primaryColor: COLOR.lightGreen600,
  },
  toolbar: {
      container: {
          height: 50,
      },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


/**
 * Main component
 */
export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentScreen: 'map'
    };
    this.selectScreen = this.selectScreen.bind(this);
  }

  selectScreen (screen) {
    this.setState({ currentScreen: screen });
  }

  renderScreen () {
    switch (this.state.currentScreen) {
      case 'map':
        return (<Map />);

      case 'giveaways':
        return (<Giveaways />);

      case 'information':
        return (<Information />);
    }
  }

  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <View style={styles.container}>
          {this.renderScreen()}
          <Navigator current={this.state.currentScreen} navigate={this.selectScreen} />
        </View>
      </ThemeProvider>
    );
  }
}
