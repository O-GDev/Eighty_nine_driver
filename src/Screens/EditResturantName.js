import { StyleSheet, Text, TextInput, View,TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
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

const EditResturantName = ({navigation}) => {
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
    <View style={{flex:1,alignContent:'center',justifyContent:'center'}} >
      <View style={{paddingTop:10,alignSelf:'center'}}>
      <TextInput
        placeholder='Write the name of your restaurant'
        style={{height:40,backgroundColor:'#D9D9D999',width:width*0.9,fontSize:17,paddingLeft:10,fontFamily:'Inconsolata_600SemiBold'}}
      />
      </View>
      <View style={{flex:1,justifyContent:'center',}}>
      <TouchableOpacity onPress={() => navigation.navigate('')} style={{alignSelf:'center',backgroundColor:'#1AA303',width:'85%',padding:5,borderRadius:100,height:50,justifyContent:'center'}}><Text style={{color:'white',fontWeight:'400',alignSelf:'center',fontSize:20,fontFamily:'Inconsolata_600SemiBold'}}>Save</Text></TouchableOpacity>
   </View>
     </View>
  )
}

export default EditResturantName

const styles = StyleSheet.create({})