import React, { Component } from 'react';
import {
  UIManager,
  LayoutAnimation,
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { COLOR, ThemeProvider } from 'react-native-material-ui';

import Navigator from './components/Navigator';
import Map from './screens/Map/Map';
import Giveaways from './screens/Giveaways';
import Information from './screens/Information';
import giveawayPosts from './screens/Giveaways/posts';

// Enable animations
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

// Material UI theme (only needs to be set here - will be propagated to the app)
const uiTheme = {
  palette: {
      primaryColor: COLOR.lightGreen600,
      accentColor: COLOR.blue500,
  },
  toolbar: {
      container: {
          height: 50,
      },
  },
};

// Main style
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
      currentScreen: 'map',
      currentModal:  null,
      giveawayPosts: giveawayPosts
    };
    this.selectScreen = this.selectScreen.bind(this);
    this.showModal    = this.showModal.bind(this);
  }

  selectScreen (screen) {
    this.setState({ currentScreen: screen, currentModal: null });
  }

  showModal (modal) {
    this.setState({ currentModal: modal });
  }

  renderScreen () {
    const modal = {
      current: this.state.currentModal,
      show:    this.showModal
    };
    switch (this.state.currentScreen) {
      case 'map':
        return (<Map modal={modal} />);

      case 'giveaways':
        return (<Giveaways modal={modal} posts={this.state.giveawayPosts}/>);

      case 'information':
        return (<Information modal={modal} />);
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
