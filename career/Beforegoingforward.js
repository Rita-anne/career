import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'
export default function Beforegoingforward({navigation}) {
  return (
  <View>
    <View style={{marginTop:120}}>
      <Text style={{fontWeight:"600",fontSize: 40,textAlign:'center'}}>Before Going Forward</Text>
      <Text style={{textAlign:'center',fontSize: 25}}>Help us to get to know you more</Text>
    </View>
    <View style={{marginTop:50}}>
      <View style={{margin:10}} >
      <Text style={{fontSize: 20,fontWeight:"600"}}>Name:</Text>
      <TextInput style={styles.input} 
       mode='outlined'
       placeholderTextColor={'#C7C7C7'}
       placeholder='the one on the birth certificate...'
       textColor='black'
      />          
      </View>

      <View style={{margin:10}}>
      <Text style={{fontSize: 20,fontWeight:"600"}}>Email:</Text>
      <TextInput style={styles.input} 
       mode='outlined'
        placeholderTextColor={'#C7C7C7'}
       placeholder='the one whose password you remember.....'
       textColor='black'
      />       
      </View>

      <View style={{margin:10}}>
      <Text style={{fontSize: 20,fontWeight:"600"}}>Mobile No:</Text>
      <TextInput style={styles.input} 
       mode='outlined'
       placeholder='the one which you will pick up when it rings'
       placeholderTextColor={'#C7C7C7'}
       textColor='black'
      />       
      </View>
    </View>

    <Pressable>
      <Button onPress={()=>navigation.navigate('Highesteducation')} style={{backgroundColor:'#9633AA',borderRadius:8,margin:10,padding:8,marginTop:50}}>
        <Text style={{color:'white',fontSize:20}}>Next</Text>
      </Button>
    </Pressable>

  </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop:10,
    borderWidth: 1,
    borderRadius:8,
    borderColor:'#9633AA',
    backgroundColor:'white',
    padding: 10,
    
  },
});