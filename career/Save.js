import { View, Text,Pressable } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function Save({navigation}) {
  return (
<View>
    <View style={{marginTop:300}}>
      <Text style={{marginLeft:25,fontWeight:'700',color:'#607D8B'}}>Things you do to enjoy your existence on earth: </Text>
      <Text style={{marginLeft:25,fontWeight:'400',color:'#455A64'}}>Select at least top 2 of your fav's</Text>
    </View>
     <Pressable style={{display:'flex',marginTop:10,flexWrap:'wrap',justifyContent:'space-around',flexDirection:'row'}}>
        <Button style={{borderWidth:1,borderColor:'#9633AA',borderRadius:8,}}>
            <Text style={{color:'#607D8B',}}>Travelling</Text>
        </Button>
        <Button style={{borderWidth:1,borderColor:'#9633AA', borderRadius:8,}}>
            <Text style={{color:'#607D8B'}}>Music</Text>
        </Button>
        <Button style={{borderWidth:1,borderColor:'#9633AA', borderRadius:8,}}>
            <Text style={{color:'#607D8B'}}>Photography</Text>
        </Button>
     </Pressable>    
     <Pressable style={{display:'flex',marginTop:8, flexWrap:'wrap',justifyContent:'space-around',flexDirection:'row'}}>    
        <Button style={{borderWidth:1,borderColor:'#9633AA', borderRadius:8,}}>
            <Text style={{color:'#607D8B'}}>Gaming</Text>
        </Button>
         <Button style={{borderWidth:1,borderColor:'#9633AA', borderRadius:8,}}>
            <Text style={{color:'#607D8B'}}>Painting</Text>
        </Button>
         <Button style={{borderWidth:1,borderColor:'#9633AA', borderRadius:8,}}>
            <Text style={{color:'#607D8B'}}>Cooking</Text>
        </Button>
      </Pressable>
      <Pressable style={{display:'flex',marginTop:10,flexWrap:'wrap',justifyContent:'space-around',flexDirection:'row',}}>
         <Button style={{borderWidth:1,borderColor:'#9633AA', borderRadius:8,}}>
            <Text style={{color:'#607D8B',}}>Blogging</Text>
        </Button >
         <Button style={{borderWidth:1,borderColor:'#9633AA', borderRadius:8,}}> 
            <Text style={{color:'#607D8B'}}>Meditation</Text>
        </Button>
         <Button style={{borderWidth:1,borderColor:'#9633AA', borderRadius:8,}}>
            <Text style={{color:'#607D8B'}}>Origami</Text>
        </Button>
       </Pressable>
         <View style={{marginTop:10}}>
         <Text style={{marginLeft:25,fontWeight:'700',color:'#607D8B'}}>Boring subjects that you find quite interesting: </Text>
         <Text style={{marginLeft:25,fontWeight:'400',color:'#455A64'}}>Select at least top 2 of your fav's</Text>
         </View>
     <Pressable style={{display:'flex',marginTop:10,flexWrap:'wrap',justifyContent:'space-around',flexDirection:'row'}}>
        <Button style={{borderWidth:1,borderColor:'#9633AA',borderRadius:8,}}>
            <Text style={{color:'#607D8B',}}>Economics</Text>
        </Button>
        <Button style={{borderWidth:1,borderColor:'#9633AA', borderRadius:8,}}>
            <Text style={{color:'#607D8B'}}>History</Text>
        </Button>
        <Button style={{borderWidth:1,borderColor:'#9633AA', borderRadius:8,}}>
            <Text style={{color:'#607D8B'}}>Accounting</Text>
        </Button>
     </Pressable>    
     <Pressable style={{display:'flex',marginTop:10, flexWrap:'wrap',justifyContent:'space-around',flexDirection:'row'}}>    
        <Button style={{borderWidth:1,borderColor:'#9633AA', borderRadius:8,}}>
            <Text style={{color:'#607D8B'}}>English</Text>
        </Button>
         <Button style={{borderWidth:1,borderColor:'#9633AA', borderRadius:8,}}>
            <Text style={{color:'#607D8B'}}>Business</Text>
        </Button>
         <Button style={{borderWidth:1,borderColor:'#9633AA', borderRadius:8,}}>
            <Text style={{color:'#607D8B'}}>Math's</Text>
        </Button>
      </Pressable> 
      <Pressable>
        <Button onPress={()=>navigation.navigate('Getstarted')} style={{backgroundColor:'#9633AA',borderRadius:8,margin:10,marginTop:50}}>
            <Text style={{color:'white',fontSize:20}}>Save</Text>
        </Button>
      </Pressable>
     

</View>   
  )
}