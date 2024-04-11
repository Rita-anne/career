import { View, Text, Image, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { Icon } from 'react-native-elements';
export default function Editprofile({navigation}) {
  return (
<View>
  <View style={{backgroundColor:'#e6e6e6'}}> 
    <View style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',flexDirection:'row',margin:30,padding:10,borderBottomWidth:0.5}}>
     
      <View>
        <Image source={require('./assets/Profileimg.jpg')} style={{height:80,width:80,borderRadius:35}} />
      </View>
      <View>
      <Text style={{fontWeight:'bold',fontSize:20}} >Ptiyanka Sharma</Text>
      <Text >priyankasharma@gmail.com</Text>
      <Text >+91 9876543210</Text>
      </View>
      <TouchableOpacity style={{flexDirection:'row',borderColor:'#9633AA',}}>
        <Icon name='pencil' type='material-community' color={'#9633AA'} /> 
      <Text style={{color:'#9633AA',}} >Edit</Text>
      </TouchableOpacity>
     </View>
     <View style={{margin:30}}>
      <Text style={{fontWeight:'bold',fontSize:20}}>About</Text>
      <Text > Lives in Mumbai</Text>
      <Text >Education: 12th- science</Text>
     </View>
     <View style={{margin:30}}>
      <Text style={{fontWeight:'bold',fontSize:20}}>Interest</Text>
      <View style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',flexDirection:'row',margin:30}}>
        <Text style={{fontWeight:'bold',fontSize:20,backgroundColor:'#ffcc00',padding:10,borderRadius:10}}>Dancing</Text>
      <Text style={{fontWeight:'bold',fontSize:20,backgroundColor:'#cc9900',padding:10,borderRadius:10}}>Blogging</Text>
      <Text style={{fontWeight:'bold',fontSize:20,backgroundColor:'#ffcc00',padding:10,borderRadius:10}}>Music</Text>
      </View>
     </View>
  </View> 
  <View>
    <Text style={{fontWeight:'bold',fontSize:20,borderBottomWidth:0.5,margin:10,padding:10}} >My journey</Text>
  </View>
  <View>
    <Text style={{fontWeight:'bold',fontSize:20,borderBottomWidth:0.5,margin:10,padding:10}}>My appointments</Text>
  </View>
  <View>
    <Text style={{fontWeight:'bold',fontSize:20,borderBottomWidth:0.5,margin:10,padding:10}}>Scholarships</Text>
  </View>
  <View>
    <Text style={{fontWeight:'bold',fontSize:20,borderBottomWidth:0.5,margin:10,padding:10}}>Help & FAQs</Text>
  </View>
  <View>
    <Text style={{fontWeight:'bold',fontSize:20,borderBottomWidth:0.5,margin:10,padding:10}}>Settings</Text>
  </View>
</View>
  )
}