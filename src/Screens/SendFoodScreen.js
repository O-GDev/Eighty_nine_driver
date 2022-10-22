import { SafeAreaView, StyleSheet, Text, View , Image, TouchableOpacity, Modal, Dimensions} from 'react-native'
import React, {useState, useEffect} from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import NameScreen from './NameScreen';
import ReactLoading from "react-loading";
import { Section, Title, Article, Prop, list } from "../../src/Component/genric";
import { useFonts } from 'expo-font';
import { 
  Inconsolata_200ExtraLight,
  Inconsolata_300Light,
  Inconsolata_400Regular,
  Inconsolata_500Medium,
  Inconsolata_600SemiBold,
  Inconsolata_700Bold,
  Inconsolata_800ExtraBold,
  Inconsolata_900Black 
} from '@expo-google-fonts/inconsolata'
import AppLoading from 'expo-app-loading';
import { Searchingdriver } from '../Screens/Searchingdriver'


const {width, height} = Dimensions.get('window');

const SendFoodScreen = ({navigation}) => { 
  let[fontLoaded, error] = useFonts({
    Inconsolata_200ExtraLight,
    Inconsolata_300Light,
    Inconsolata_400Regular,
    Inconsolata_500Medium,
    Inconsolata_600SemiBold,
    Inconsolata_700Bold,
    Inconsolata_800ExtraBold,
    Inconsolata_900Black ,
    'gbogo':require('../../assets/fonts/Inconsolata-Black.ttf')
  });
 // if(!fontLoaded){
 //   return <AppLoading />
 // }
   
    
  return (
    <SafeAreaView style={{height:height,width:width}}>
    
    <View style={{justifyContent:'center',height:height,alignContent:'center',}}>
    <Image source={require('../../assets/pana.png')} style={{width:width-20,height:'48%',}}/>
     <View style={{paddingBottom:'20%'}}>
     <Text style={{fontSize:22,paddingLeft:15,fontWeight:'600',fontFamily:'Inconsolata_600SemiBold'}}>Send packages with</Text>
    <Text style={{fontSize:22,paddingLeft:15,fontWeight:'600',fontFamily:'Inconsolata_600SemiBold'}}>customers</Text>
    <Text style={{fontSize:15,paddingLeft:15,fontFamily:'Inconsolata_600SemiBold'}}>Get it delivered in the time it takes to</Text>
    <Text style={{fontSize:15,paddingLeft:15,fontFamily:'Inconsolata_600SemiBold'}}>drive there</Text>
     </View>
     <TouchableOpacity onPress={()=>{navigation.navigate('fghhh')}} style={{alignSelf:'center',backgroundColor:'#1AA303',width:'90%',padding:5,height:50,justifyContent:'center'}}><Text style={{color:'white',fontWeight:'400',alignSelf:'center',fontSize:25,fontFamily:'Inconsolata_600SemiBold'}}>Send food</Text></TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default SendFoodScreen

const styles = StyleSheet.create({})