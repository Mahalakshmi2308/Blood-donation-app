import React,{Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import  BloodDonateScreen  from './screens/DonateScreen';
import BloodRequestScreen from './screens/RequestScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs';


export default class App extends React.Component{
 render(){
   return(
     
      <AppContainer/>
    
   );
 }
}

const AppTabNavigator = createBottomTabNavigator({
  DonateBlood : {
    screen: BloodDonateScreen,
   },
  BloodRequest: {
    screen: BloodRequestScreen,
  }
});


var SwitchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen :WelcomeScreen},
  AppTabNavigator: {screen : AppTabNavigator}
});

const AppContainer = createAppContainer(SwitchNavigator);

