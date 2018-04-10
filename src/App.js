import React, { Component } from 'react';
import {
  UIManager,
  LayoutAnimation,
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Navigator           from './components/Navigator';
import MapScreen           from './screens/Map/MapScreen';
import CommunityScreen     from './screens/Community/CommunityScreen';
import CommunityPostScreen from './screens/Community/CommunityPostScreen';
import InformationScreen   from './screens/Information/InformationScreen';
import communityPosts      from './screens/Community/posts';

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
 * Community screen navigation stack
 */
const CommunityStack = StackNavigator({
  Community:     { screen: CommunityScreen },
  CommunityPost: { screen: CommunityPostScreen },
}, { headerMode: 'none' });

/**
 * Main navigation component
 */
const MainNavigation = TabNavigator({
  Map:         { screen: MapScreen },
  Community:   { screen: CommunityStack },
  Information: { screen: InformationScreen },
}, {
  tabBarPosition:  'bottom',
  tabBarComponent: props => {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Navigator navigation={props.navigation}/>
      </ThemeProvider>
    );
  }
});

/**
 * Main component
 */
export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      search: '',
      communityPosts: communityPosts
    };

    // State control object
    this.controller = {
      updateSearch:      (text) => { this.setState({ search: text }); },
      getCommunityPosts: () => { return this.state.communityPosts; },
      getSearch:         () => { return this.state.search; }
    }
  }

  /**
   * Root component
   */
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <View style={styles.container}>
          <MainNavigation screenProps={{controller: this.controller}}/>
        </View>
      </ThemeProvider>
    );
  }
}
