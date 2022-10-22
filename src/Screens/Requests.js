import { StyleSheet, Text, TextInput, View,TouchableOpacity,Dimensions } from 'react-native'
import { SafeAreaView, StatusBar, Image, ScrollView,Modal, } from 'react-native'
import React,{ useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Avatar,Title,Caption,paragraph,TouchableRipple,Switch, Drawer, } from 'react-native-paper'


const {width, height} = Dimensions.get('window');

const Requests = ({navigation}) => {
  return (
    <SafeAreaView>
  
    <StatusBar/>
    <ScrollView style={{height:height,}}>
    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:90,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/Jhonwalker.png')} style={{}} />
<View style={{paddingLeft:10,width:'80%'}}>
<Title>Jhon walker</Title>
<View style={{paddingBottom:20,justifyContent:'space-evenly',paddingRight:10}}>
  <Text style={{color:'blue',backgroundColor:'#e8e8e8',textAlign:'center',borderRadius:10,alignSelf:'flex-end',paddingLeft:10,paddingRight:10}}>En route</Text>
  </View>
</View>
      </View>
    
    
    </View>
    </View>

    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:90,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/paulismith.png')} style={{}} />
<View style={{paddingLeft:10,width:'80%'}}>
<Title>Pauli Smith</Title>
<View style={{paddingBottom:20,justifyContent:'space-evenly',paddingRight:10}}>
  <Text style={{color:'blue',backgroundColor:'#e8e8e8',textAlign:'center',borderRadius:10,alignSelf:'flex-end',paddingLeft:10,paddingRight:10}}>En route</Text>
  </View>
</View>
      </View>
    
    
    </View>
    </View>

    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:90,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/JamesKhan.png')} style={{}} />
<View style={{paddingLeft:10,width:'80%'}}>
<Title>James Khan</Title>
<View style={{paddingBottom:20,justifyContent:'space-evenly',paddingRight:10}}>
  <Text style={{color:'blue',backgroundColor:'#e8e8e8',textAlign:'center',borderRadius:10,alignSelf:'flex-end',paddingLeft:10,paddingRight:10}}>En route</Text>
  </View>
</View>
      </View>
    
    
    </View>
    </View>
    </ScrollView>
  </SafeAreaView>
    
  )
}

export default Requests

const styles = StyleSheet.create({})