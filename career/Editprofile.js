import { View, Text, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { Icon } from 'react-native-elements';
export default function Editprofile({navigation}) {
  return (
<View>
    <View style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',flexDirection:'row',margin:30}}>
     
      <View>
        <Image source={require('./assets/Profileimg.jpg')} style={{height:80,width:80,borderRadius:35}} />
      </View>
      <View>
      <Text style={{fontWeight:'bold',fontSize:20}} >Ptiyanka Sharma</Text>
      <Text >priyankasharma@gmail.com</Text>
      <Text >+91 9876543210</Text>
      </View>
      <View>
        <Icon name='search'/> 
      <Text style={{borderRadius:5,borderWidth:1,padding:10,color:'#9633AA',borderColor:'#9633AA'}} >Edit</Text>
      </View>
     </View>
</View>
  )
}