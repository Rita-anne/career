
import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import Beforegoingforward from './Beforegoingforward';
import { SelectList } from 'react-native-dropdown-select-list'
import { Button } from 'react-native-paper'
import Highesteducation from './Highesteducation';
import Save from './Save';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Getstarted from './Getstarted';
const Stack = createNativeStackNavigator();





const MainNavigation=()=>{
  return(
    <Stack.Navigator>
<Stack.Screen name='Beforegoingforward' component={Beforegoingforward} options={{headerShown:false}}/>
<Stack.Screen name='Highesteducation' component={Highesteducation} options={{headerShown:false}}/>
<Stack.Screen name='Save' component={Save} options={{headerShown:false}}/>
<Stack.Screen name='Getstarted' component={Getstarted} options={{headerShown:false}}/>

</Stack.Navigator>
  )
}


export default function App() {
return (
 <NavigationContainer>
<MainNavigation/>
</NavigationContainer> 

/* <Beforegoingforward/>  */
/* <Highesteducation/> */
/* <Save/> */
/* <Getstarted/>   */

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
