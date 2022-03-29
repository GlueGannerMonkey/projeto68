import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RideScreen from "../screens/Ride";
import RideHistoryScreen from "../screens/RideHistory";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          {/*
          <TabScreen name="Alugue uma Bicicleta" component={RideScreen} />
          <TabScreen name="Histórico de Locações" component={RideHistoryScreen} />
          */}
          
          <Screen name="Alugue uma Bicicleta" component={RideScreen} />
          <Screen name="Histórico de Locações" component={RideHistoryScreen} />
          
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
