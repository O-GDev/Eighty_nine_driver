import { StyleSheet, Text, View,Modal,SafeAreaView } from 'react-native'
import React from 'react'

const Searchingdriver = () => {
    
  return (
    
    <SafeAreaView style={{height:height,width:width,}}>
    <View style={{justifyContent:'center',alignSelf:'center',height:'100%',}}>
    <Image source={require('../../assets/loading.png')} style={{height:150,width:150,alignSelf:'center'}} />
    <Text style={{alignSelf:'center',color:'blue',fontSize:17,paddingTop:10,fontFamily:'Inconsolata_600SemiBold'}}>Searching for nearby driver</Text>
    </View>
    </SafeAreaView>
   
  )
}

export default Searchingdriver
