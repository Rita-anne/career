import { View, Text,Pressable } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function Getstarted({navigation}) {
  return (
    <View>
      <Text style={{textAlign:'center',top:400,fontWeight:'800',fontSize:30}}>Profile updated :) </Text>
    <Pressable>
        <Button style={{backgroundColor:'#9633AA',top:600,borderRadius:8,margin:10,marginTop:50}}>
            <Text style={{color:'white',fontSize:20,}}>
                Get Started
            </Text>
        </Button>
    </Pressable>
    </View>

  )
}