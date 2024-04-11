import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Editprofile({ navigation }) {
  const [interests, setInterests] = useState({
    dancing: false,
    blogging: false,
    music: false,
  });

  const handleInterestClick = (interest) => {
    setInterests({ ...interests, [interest]: !interests[interest] });
  };

  return (
    <View>
      <View style={{ backgroundColor: '#e6e6e6' }}>
        <View
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            flexDirection: 'row',
            margin: 30,
            padding: 10,
            borderBottomWidth: 0.5,
          }}
        >
          <View>
            <Image
              source={require('./assets/Profileimg.jpg')}
              style={{ height: 80, width: 80, borderRadius: 35 }}
            />
          </View>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Ptiyanka Sharma</Text>
            <Text>priyankasharma@gmail.com</Text>
            <Text>+91 9876543210</Text>
          </View>
          <TouchableOpacity style={{ flexDirection: 'row', borderColor: '#9633AA' }}>
            <Icon name='pencil-outline' type='material-community' color={'#9633AA'} />
            <Text style={{ color: '#9633AA', }}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginLeft: 10, marginTop: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>About</Text>
          <Text>Lives in Mumbai</Text>
          <Text>Education: 12th- science</Text>
        </View>

        <View style={{ margin: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Interest</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <TouchableOpacity
              style={[
                styles.interestButton,
                interests.dancing && styles.clickedInterest,
              ]}
              onPress={() => handleInterestClick('dancing')}
            >
              <Text style={styles.interestText}>Dancing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.interestButton,
                interests.blogging && styles.clickedInterest,
              ]}
              onPress={() => handleInterestClick('blogging')}
            >
              <Text style={styles.interestText}>Blogging</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.interestButton,
                interests.music && styles.clickedInterest,
              ]}
              onPress={() => handleInterestClick('music')}
            >
              <Text style={styles.interestText}>Music</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>My journey</Text>
          <Icon name='arrow-top-right' type='material-community' />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>My appointments</Text>
          <Icon name='arrow-top-right' type='material-community' />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Scholarships</Text>
          <Icon name='arrow-top-right' type='material-community' />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Help & FAQs</Text>
          <Icon name='arrow-top-right' type='material-community' />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Settings</Text>
          <Icon name='arrow-top-right' type='material-community' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  interestButton: {
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: '#ffcc00',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  interestText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  clickedInterest: {
    backgroundColor: '#e67300',
  },
  menuItem: {
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
  },
  menuText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});












// import { View, Text, Image, TouchableOpacity } from 'react-native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import React from 'react'
// import { Icon } from 'react-native-elements';
// export default function Editprofile({navigation}) {
//   return (
// <View>
//   <View style={{backgroundColor:'#e6e6e6'}}> 
//     <View style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',flexDirection:'row',margin:30,padding:10,borderBottomWidth:0.5}}>
     
//      <View>
//         <Image source={require('./assets/Profileimg.jpg')} style={{height:80,width:80,borderRadius:35}} />
//      </View>
//      <View>
//         <Text style={{fontWeight:'bold',fontSize:20}} >Ptiyanka Sharma</Text>
//         <Text >priyankasharma@gmail.com</Text>
//         <Text >+91 9876543210</Text>
//      </View>
//       <TouchableOpacity style={{flexDirection:'row',borderColor:'#9633AA',}}>
//         <Icon name='pencil-outline' type='material-community' color={'#9633AA'} /> 
//         <Text style={{color:'#9633AA',}} >Edit</Text>
//       </TouchableOpacity>
//     </View>

//     <View style={{marginLeft:10,marginTop:5}}>
//       <Text style={{fontWeight:'bold',fontSize:20}}>About</Text>
//       <Text > Lives in Mumbai</Text>
//       <Text >Education: 12th- science</Text>
//     </View>

//     <View style={{margin:10}}>
//           <Text style={{fontWeight:'bold',fontSize:20}}>Interest</Text>
//         <View style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',flexDirection:'row',margin:10}}>
//           <Text style={{fontWeight:'bold',fontSize:20,backgroundColor:'#ffcc00',padding:10,borderRadius:10}}>Dancing</Text>
//           <Text style={{fontWeight:'bold',fontSize:20,backgroundColor:'#ffcc00',padding:10,borderRadius:10}}>Blogging</Text>
//           <Text style={{fontWeight:'bold',fontSize:20,backgroundColor:'#ffcc00',padding:10,borderRadius:10}}>Music</Text>
//         </View>
//     </View>

//   </View>

//   <View>
//     <TouchableOpacity style={{borderBottomWidth:0.5,display:'flex',flexWrap:'wrap',flexDirection:'row',margin:10,padding:10,justifyContent:'space-between'}}>
//       <Text style={{fontWeight:'bold',fontSize:20,}} >My journey</Text>
//       <Icon name='arrow-top-right' type='material-community' /> 
//     </TouchableOpacity>

//     <TouchableOpacity style={{borderBottomWidth:0.5,display:'flex',flexWrap:'wrap',flexDirection:'row',margin:10,padding:10,justifyContent:'space-between'}} >
//       <Text style={{fontWeight:'bold',fontSize:20,}}>My appointments</Text>
//       <Icon name='arrow-top-right' type='material-community' /> 
//     </TouchableOpacity>

//     <TouchableOpacity style={{borderBottomWidth:0.5,display:'flex',flexWrap:'wrap',flexDirection:'row',margin:10,padding:10,justifyContent:'space-between'}} >
//       <Text style={{fontWeight:'bold',fontSize:20,}}>Scholarships</Text>
//       <Icon name='arrow-top-right' type='material-community' />   
//     </TouchableOpacity>

//     <TouchableOpacity style={{borderBottomWidth:0.5,display:'flex',flexWrap:'wrap',flexDirection:'row',margin:10,padding:10,justifyContent:'space-between'}}>
//       <Text style={{fontWeight:'bold',fontSize:20,}}>Help & FAQs</Text>
//       <Icon name='arrow-top-right' type='material-community' /> 
//     </TouchableOpacity>

//     <TouchableOpacity style={{borderBottomWidth:0.5,display:'flex',flexWrap:'wrap',flexDirection:'row',margin:10,padding:10,justifyContent:'space-between'}} >
//       <Text style={{fontWeight:'bold',fontSize:20,}}>Settings</Text>
//       <Icon name='arrow-top-right' type='material-community' /> 
//     </TouchableOpacity>
//   </View> 

// </View>
//   )
// }