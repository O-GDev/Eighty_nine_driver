import { StyleSheet, Text, TextInput, View,TouchableOpacity,Dimensions, SafeAreaView } from 'react-native'
import React from 'react'


const {width, height} = Dimensions.get('window');

const EmailScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={{}} >
      <View style={{paddingTop:10,alignSelf:'center'}}>
      <TextInput
        placeholder='email@example.com'
        style={{height:40,backgroundColor:'#D9D9D999',width:width*0.9,fontSize:17,paddingLeft:10,fontFamily:'Inconsolata_600SemiBold'}}
      />
      </View> 
      <View style={{position:'relative'}}>
      <View style={{flex:1,marginTop:width*0.65}}>
      <TouchableOpacity onPress={() => navigation.navigate('Name')} style={{alignSelf:'center',backgroundColor:'#1AA303',width:'85%',padding:5,borderRadius:100,height:50,justifyContent:'center'}}><Text style={{color:'white',fontWeight:'400',alignSelf:'center',fontSize:20,fontFamily:'Inconsolata_600SemiBold'}}>Next</Text></TouchableOpacity>
      </View>
      </View>
       </View>
    </SafeAreaView>
       
  )
}

export default EmailScreen

const styles = StyleSheet.create({})