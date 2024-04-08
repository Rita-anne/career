import { View, Text, Pressable } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { SelectList } from 'react-native-dropdown-select-list'
import { Button } from 'react-native-paper'
import React from 'react'

export default function Highesteducation({navigation}) {
   
    const [selected,setSelected] = React.useState("");
    const data = [
        {key:'1', value:'Undergraduated'},
        {key:'2', value:'Graduated'},
        {key:'3', value:'Fresher'},
        {key:'5', value:'Experienced'},

    ];

  return (
    <View style={{margin:10}}>
      <Text style={{marginTop:250,fontWeight:'600',fontSize:20}}>Highest Education:</Text>
      <SelectList data={data} 
      setSelected={setSelected}
      
      boxStyles={{backgroundColor:'white',marginTop:10,borderRadius:8,borderWidth:1}}
      search={false}
    />
    <Pressable>
        <Button onPress={()=>navigation.navigate('Save')} style={{backgroundColor:'#9633AA',borderRadius:8,marginTop:230,padding:8}}>
            <Text style={{color:'white',fontSize:20}}>Next</Text>
        </Button>
    </Pressable>

    </View>
  )
}