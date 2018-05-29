import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Navigator from './components/Navigator'
import MapScreen from './screens/Map/MapScreen'
import CommunityScreen from './screens/Community/CommunityScreen'
import CommunityPostScreen from './screens/Community/CommunityPostScreen'
import InformationScreen from './screens/Information/InformationScreen'
import LoginScreen from './screens/Login/LoginScreen'

/**
 * Navigation stacks for the main screens
 */
const MapStack = StackNavigator({
  Index: { screen: MapScreen }
})
const CommunityStack = StackNavigator({
  Index: { screen: CommunityScreen },
  CommunityPost: { screen: CommunityPostScreen }
})
const InformationStack = StackNavigator({
  Index: { screen: InformationScreen }
})

/**
 * Main navigation component
 */
const MainNavigation = TabNavigator({
  Map: { screen: MapStack },
  Community: { screen: CommunityStack },
  Information: { screen: InformationStack }
}, {
  initialRouteName: 'Map',
  lazy: false,
  headerMode: 'float',
  tabBarPosition: 'bottom',
  tabBarComponent: props => {
    return (
      <Navigator navigation={props.navigation} />
    )
  }
})

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainNavigation
    },
    Login: {
      screen: LoginScreen
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

export default RootStack
