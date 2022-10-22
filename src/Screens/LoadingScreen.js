import { StyleSheet, Text, View,SafeAreaView,Image,Dimensions } from 'react-native'
import React from 'react'


const {width, height} = Dimensions.get('window');
const LoadingScreen = ({navigation}) => {
    setTimeout(() => {
        navigation.navigate('NearbyDrivers')
    }, 3000);
  return (
    <SafeAreaView style={{height:height,width:width,backgroundColor:'white'}}>
    <View style={{justifyContent:'center',alignSelf:'center',height:'100%',}}>
    <Image source={require('../../assets/loading.png')} style={{height:150,width:150,alignSelf:'center'}} />
    <Text style={{alignSelf:'center',color:'blue',fontSize:17,paddingTop:10,fontFamily:'Inconsolata_600SemiBold'}}>Searching for nearby driver</Text>
    </View>
    </SafeAreaView>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({})