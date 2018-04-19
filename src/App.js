import React, { Component } from 'react'
import {
  UIManager,
  // LayoutAnimation,
  // Platform,
  StyleSheet,
  View
} from 'react-native'
import { COLOR, ThemeProvider } from 'react-native-material-ui'
import { TabNavigator, StackNavigator } from 'react-navigation'

import { StyleProvider } from 'native-base'
import getTheme from '../native-base-theme/components'
import themeVariables from '../native-base-theme/variables/commonColor'

import Navigator from './components/Navigator'
import MapScreen from './screens/Map/MapScreen'
import CommunityScreen from './screens/Community/CommunityScreen'
import CommunityPostScreen from './screens/Community/CommunityPostScreen'
import InformationScreen from './screens/Information/InformationScreen'
import communityPosts from './screens/Community/posts'

// Enable animations
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)

// Material UI theme (only needs to be set here - will be propagated to the app)
const uiTheme = {
  palette: {
    primaryColor: COLOR.lightGreen600,
    accentColor: COLOR.blue500
  },
  toolbar: {
    container: {
      height: 50
    }
  }
}

// Main style
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

/**
 * Navigation stacks for the main screens
 */
const MapStack = StackNavigator({
  Map: { screen: MapScreen }
})
const CommunityStack = StackNavigator({
  Community: { screen: CommunityScreen },
  CommunityPost: { screen: CommunityPostScreen }
})
const InformationStack = StackNavigator({
  Information: { screen: InformationScreen }
})

/**
 * Main navigation component
 */
const MainNavigation = TabNavigator({
  Map: { screen: MapStack },
  Community: { screen: CommunityStack },
  Information: { screen: InformationStack }
}, {
  headerMode: 'float',
  tabBarPosition: 'bottom',
  tabBarComponent: props => {
    return (
      <Navigator navigation={props.navigation} />
    )
  }
})

/**
 * Main component
 */
export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
      communityPosts: communityPosts
    }

    // State control object
    this.controller = {
      updateSearch: (text) => { this.setState({ search: text }) },
      getCommunityPosts: () => { return this.state.communityPosts },
      getSearch: () => { return this.state.search }
    }
  }

  /**
   * Root component
   */
  render () {
    return (
      <StyleProvider style={getTheme(themeVariables)}>
        <ThemeProvider uiTheme={uiTheme}>
          <View style={styles.container}>
            <MainNavigation screenProps={{controller: this.controller}} />
          </View>
        </ThemeProvider>
      </StyleProvider>
    )
  }
}
