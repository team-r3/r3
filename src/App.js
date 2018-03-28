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
import communityPosts from './screens/Giveaways/posts';

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
    super(props);
    this.state = {
      screen: 'map',
      modal:  null,
      search: '',
      communityPosts: communityPosts
    };

    // State control object
    this.controler = {
      selectScreen: (screen) => { this.setState({
        screen: screen,
        modal:  null,
        search: ''
      }); },
      showModal:         (modal) => { this.setState({ modal: modal }); },
      updateSearch:      (text) => { this.setState({ search: text }); },
      getCommunityPosts: () => { return this.state.communityPosts; },
      getModal:          () => { return this.state.modal; },
      getSearch:         () => { return this.state.search; }
    }
  }

  /**
   * Screen routing
   */
  renderScreen () {
    switch (this.state.screen) {
      case 'map':
        return (<Map controler={this.controler} />);

      case 'giveaways':
        return (<Giveaways controler={this.controler}/>);

      case 'information':
        return (<Information controler={this.controler} />);
    }
  }

  /**
   * Root component
   */
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <View style={styles.container}>
          {this.renderScreen()}
          <Navigator
            current={this.state.screen}
            navigate={this.controler.selectScreen}
          />
        </View>
      </ThemeProvider>
    );
  }
}
