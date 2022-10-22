import { StyleSheet, Text, TextInput, View,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'

  
const {width, height} = Dimensions.get('window');

const EditEmail = ({navigation}) => {
  return (
    <View style={{flex:1,alignContent:'center',justifyContent:'center'}}>
      <View style={{paddingTop:10,alignSelf:'center'}}>
      <TextInput
        placeholder='example@email.com'
        style={{height:40,backgroundColor:'#D9D9D999',width:width*0.9,fontSize:17,paddingLeft:10,fontFamily:'Inconsolata_600SemiBold'}}
      />
      </View>
    <View style={{flex:1,justifyContent:'center',}}>
        <TouchableOpacity onPress={() => navigation.navigate('')} style={{alignSelf:'center',backgroundColor:'#1AA303',width:'85%',padding:5,borderRadius:100,height:50,justifyContent:'center'}}><Text style={{color:'white',fontWeight:'400',alignSelf:'center',fontSize:20,fontFamily:'Inconsolata_600SemiBold'}}>Save</Text></TouchableOpacity>
        </View>
 </View>
  )
}

export default EditEmail

const styles = StyleSheet.create({})