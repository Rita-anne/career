// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import Highesteducation from "./Highesteducation";
// import Getstarted from "./Getstarted";
// import Save from "./Save";
// import Beforegoingforward from "./Beforegoingforward";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import AntDesign from "react-native-vector-icons/AntDesign";
// import Explore from "./Explore";
// import Home from "./Home";
// import Editprofile from "./Editprofile";
// import Apploading from "expo-app-loading";
// import { useFonts, Poppins_100Thin_Italic } from "@expo-google-fonts/poppins";
// import { Icon } from "react-native-elements";
// import Cybersecurity from "./Cybersecurity";
// import Editscreen from "./Editscreen";

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const MainNavigation = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Editprofile"
//         component={TabNavigation}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Beforegoingforward"
//         component={Beforegoingforward}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Highesteducation"
//         component={Highesteducation}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Save"
//         component={Save}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Getstarted"
//         component={Getstarted}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// };

// const TabNavigation = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{ headerShown: false, tabBarIcon: () => <Icon name="home" /> }}
//       />
//       <Tab.Screen
//         name="Explore"
//         component={Explore}
//         options={{
//           headerShown: false,
//           tabBarIcon: () => <Icon name="search" />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Editprofile}
//         options={{
//           headerShown: false,
//           tabBarIcon: () => <Icon name="person" />,
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default function App() {
//   //   let [fontsLoaded] = useFonts({
//   //     Poppins_100Thin_Italic,
//   //   });

//   //   if (!fontsLoaded) {
//   //     return <AppLoading />;
//   //   } else {
//   return (
//     <NavigationContainer>
//       <MainNavigation />
//     </NavigationContainer>
//     // <Editprofile />
//     // <Editscreen />
//     // <Cybersecurity />
//   );
// }
// // }

import React from "react";
import { View, Text, Pressable } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Beforegoingforward from "./Beforegoingforward";
import { SelectList } from "react-native-dropdown-select-list";
import { Button } from "react-native-paper";
import Highesteducation from "./Highesteducation";
import Save from "./Save";
import BottomNavigation from "./BottomNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Getstarted from "./Getstarted";
import Editprofile from "./Editprofile";
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Beforegoingforward"
        component={Beforegoingforward}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Highesteducation"
        component={Highesteducation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Save"
        component={Save}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Getstarted"
        component={Getstarted}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
    // <BottomNavigation />
    /* <Beforegoingforward/>  */
    /* <Highesteducation/> */
    /* <Save/> */
    /* <Getstarted/>   */
    /* <Editprofile/> */
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
