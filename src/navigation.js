import React from 'react'
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

import Navigator from './components/Navigator'
import MapScreen from './screens/Map/MapScreen'
import CommunityScreen from './screens/Community/CommunityScreen'
import CommunityPostScreen from './screens/Community/CommunityPostScreen'
import InformationScreen from './screens/Information/InformationScreen'
import LoginScreen from './screens/Login/LoginScreen'

/**
 * Navigation stacks for the main screens
 */
const MapStack = createStackNavigator({
  Index: { screen: MapScreen }
})
const CommunityStack = createStackNavigator({
  Index: { screen: CommunityScreen },
  CommunityPost: { screen: CommunityPostScreen }
})
const InformationStack = createStackNavigator({
  Index: { screen: InformationScreen }
})

/**
 * Main navigation component
 */
const MainNavigation = createBottomTabNavigator({
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

const RootStack = createStackNavigator(
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

export default createAppContainer(RootStack)
