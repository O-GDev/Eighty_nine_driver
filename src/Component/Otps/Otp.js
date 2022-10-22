import { useState } from "react";
import { StyleSheet, Text, View, Pressable, Keyboard, SafeAreaView, Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import Otpinputfield from "./Otpinputfield";
import Otpfinals from "./Otpfinals";
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
import { useNavigation } from "@react-navigation/native";

const {width,height} = Dimensions.get('window');
const Otp = ({}) => {
  const navigation = useNavigation();
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
  const [otpCode, setOTPCode] = useState("");
 const [isPinReady, setIsPinReady] = useState(false);
 const maximumCodeLength = 4;
  return (
    <SafeAreaView style={{}}>
   
      <View >
      <Text style={{textAlign:'center',paddingTop:20,fontFamily:'Inconsolata_600SemiBold',fontSize:16,paddingBottom:20}}>code is sent to 1234567890</Text> 
      <Text style={{paddingBottom:20,textAlign:'center',alignSelf:'center'}}>
 
      <Otpinputfield 
        code={otpCode}
       setCode={setOTPCode}
       maximumLength={maximumCodeLength}
       setIsPinReady={setIsPinReady}
       style={{}}
      />
    
      </Text>
      <View>
      <View style={{paddingBottom:10,paddingTop:20}}><Text style={{textAlign:'center',fontFamily:'Inconsolata_600SemiBold'}}><Text style={{color:'#828283'}}>Didn't get a code?</Text><Text> Request Again</Text></Text></View>
      <View style={{}}><Text style={{textAlign:'center',fontFamily:'Inconsolata_600SemiBold'}}>Get via call</Text></View>
      </View>
      <View style={{position:'relative'}}>
      <View style={{flex:1,marginTop:width*0.2}}>
        <TouchableOpacity onPress={() => navigation.navigate('Email')} style={{alignSelf:'center',backgroundColor:'#1AA303',width:'85%',padding:5,borderRadius:100,height:50,justifyContent:'center'}}><Text style={{color:'white',fontWeight:'bold',alignSelf:'center',fontSize:20,fontFamily:'Inconsolata_600SemiBold'}}>Verify now</Text></TouchableOpacity>
        </View>
      </View>
       </View>
    </SafeAreaView>
  )
}

export default Otp

const styles = StyleSheet.create({
 
})