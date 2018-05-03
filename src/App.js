import React, { Component } from 'react'
import {
  UIManager,
  // LayoutAnimation,
  // Platform,
  StyleSheet,
  View
} from 'react-native'
import { COLOR, ThemeProvider } from 'react-native-material-ui'
import { Provider } from 'react-redux'

import { StyleProvider } from 'native-base'
import getTheme from '../native-base-theme/components'
import themeVariables from '../native-base-theme/variables/commonColor'

import MainNavigation from './navigation'
import configureStore from './store'

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

// Initialize store
const store = configureStore()

/**
 * Main component
 */
export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: ''
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
      <Provider store={store}>
        <StyleProvider style={getTheme(themeVariables)}>
          <ThemeProvider uiTheme={uiTheme}>
            <View style={styles.container}>
              <MainNavigation screenProps={{controller: this.controller}} />
            </View>
          </ThemeProvider>
        </StyleProvider>
      </Provider>
    )
  }
}
