import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import Editprofile from "./Editprofile";
import Home from "./Home";
import Explore from "./Explore";

const EditprofileName = "Editprofile";
const ExploreName = "Explore";
const HomeName = "Home";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <NavigationContainer>
      <Tab.Screen initialRoutName={EditprofileName}>
        name='Editprofile' component={EditprofileName}
      </Tab.Screen>
      <Tab.Screen>name='home' component={HomeName}</Tab.Screen>
      <Tab.Screen>name='Explore' component={ExploreName}</Tab.Screen>
    </NavigationContainer>
  );
}
