import { StyleSheet, Text, View,SafeAreaView, Pressable,Image, StatusBar,Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import PhoneInput from 'react-native-phone-number-input'
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

const {width, height} = Dimensions.get('window');

const EditPhoneNumer = ({navigation}) => {
  let[fontLoaded, error] = useFonts({
    Inconsolata_200ExtraLight,
    Inconsolata_300Light,
    Inconsolata_400Regular,
    Inconsolata_500Medium,
    Inconsolata_600SemiBold,
    Inconsolata_700Bold,
    Inconsolata_800ExtraBold,
    Inconsolata_900Black 
  });
 // if(!fontLoaded){
 //   return <AppLoading />
 // }

  return (
    <SafeAreaView style={{flex:1,alignContent:'center',justifyContent:'center'}}>
   
   <StatusBar/>
    <View>
    <Text style={{fontFamily:'Inconsolata_600SemiBold',fontSize:25,paddingLeft:10,paddingBottom:10,}}>Enter your phone number</Text>
    <View style={{width:width-20,alignSelf:'center',backgroundColor:'white'}}>
    <PhoneInput 
          placeholder='1234567890'
       // value={'value'}
       // onChange={''}
       defaultCode='US'
       style={{}}
      />
    </View>
    </View>
    <View style={{flex:1,justifyContent:'center',}}>
      <TouchableOpacity onPress={() => navigation.navigate('')} style={{alignSelf:'center',backgroundColor:'#1AA303',width:'85%',padding:5,borderRadius:100,height:50,justifyContent:'center'}}><Text style={{color:'white',fontWeight:'400',alignSelf:'center',fontSize:20,fontFamily:'Inconsolata_600SemiBold'}}>Save</Text></TouchableOpacity>
      </View>
     
    
   
 
    </SafeAreaView>
  )
}

export default EditPhoneNumer

const styles = StyleSheet.create({});