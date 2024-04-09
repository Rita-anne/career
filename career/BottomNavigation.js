import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import Editprofile from './Editprofile';
import Home from './Home';
import Explore from './Explore';

const EditprofileName = 'Editprofile';
const ExploreName = 'Explore';
const HomeName= 'Home';

const Tab =createBottomTabNavigator();



export default function BottomNavigation() {
  return (
<NavigationContainer>
    <Tab.Screen initialRoutName={EditprofileName}>
        name='Editprofile'
        component={EditprofileName}
        {/* tabBarIcon : ()=>
         <Icon name='person'/>  */}

    </Tab.Screen>
    <Tab.Screen >
        name='home'
        component={HomeName}
        {/* tabBarIcon : ()=>
         <Icon name='person'/>  */}

    </Tab.Screen>
    <Tab.Screen>
        name='Explore'
        component={ExploreName}
        {/* tabBarIcon : ()=>
         <Icon name='person'/>  */}

    </Tab.Screen>
</NavigationContainer>
  )
}






// import { View, Text } from 'react-native'
// import React from 'react'
// import { Icon } from 'react-native-elements';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Editprofile from './Editprofile';
// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// var Bottom = createBottomTabNavigator();







// export default function Nav(){
//     return(
//         <Tab.Navigator initialRouteName="More">
//             <Tab.Screen
//            name='Home'
//             component={Editprofile} 
//             options={{ headerShown: false,
//                   tabBarIcon: ()=>
//                   <Icon name='search'/>  
//                 }}
//             />
//             <Tab.Screen
//             name='Explore'
//             // component={MyList}
//              options={{ headerShown: false,
//                   tabBarIcon: ()=>
//                   <Icon name='folder'/>    
//                 }}
        
//             />
//             <Tab.Screen
//             name='profile'
//             // component={}
//              options={{ headerShown: false,
//                   tabBarIcon: ()=>
//                   <Icon name='person'/>    
//                 }}
//             />

        
//         </Tab.Navigator>
//     )
// }


// const TabNavigation=()=>{
//   return (
        
//             <Tab.Navigator>
              
//                 <Tab.Screen name='Home' component={} options={{ headerShown: false,
//                   tabBarIcon: ()=>
//                   <Icon name='search'/>  
//                 }}/>
//                 <Tab.Screen name='Explore' component={} options={{ headerShown: false,
//                   tabBarIcon: ()=>
//                   <Icon name='person'/>    
//                 }} />
//                 <Tab.Screen name='profile' component={} options={{ headerShown: false,
//                   tabBarIcon: ()=>
//                   <Icon name='folder'/>    
//                 }} /> 
               

//             </Tab.Navigator>
       
//     )
// }


// export default function Editprofile() {
//   return (
//     <NavigationContainer>
// <MainNavigation/>
// </NavigationContainer> 
//   );
// }