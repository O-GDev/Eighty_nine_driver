import { StyleSheet, Text, View,SafeAreaView, Pressable,Image, StatusBar,Dimensions } from 'react-native'
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

var {width, height} = Dimensions.get('window');

const SignupScreen = ({navigation}) => {
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
    <SafeAreaView >
   <View style={{height:height,width:width}}>
   <StatusBar/>
   <View style={{height:50,justifyContent:'center'}}>
    <Text style={{fontFamily:'Inconsolata_600SemiBold',fontSize:25,paddingLeft:10,paddingBottom:10,}}>Enter your phone number</Text>
    </View>
  <View style={{backgroundColor:'white'}}>
    <PhoneInput
      duefaultCode="US"
    />
  </View>
      <View style={{paddingTop:20}}>
        <Pressable style={{width:width-20,backgroundColor:'#111111',height:60,alignSelf:'center',justifyContent:'space-between',flexDirection:'row'}} onPress={()=>navigation.navigate('Otp')}>
        <Text style={{color:'white',alignSelf:'center',fontSize:20,paddingLeft:'45%',fontFamily:'Inconsolata_600SemiBold'}}>NEXT</Text>
        <View style={{paddingLeft:40,paddingRight:40,alignSelf:'center'}}>
<Image source={require('../../assets/getstartedarrow.png')} style={{width:30,height:20,}}/>

</View>
        </Pressable>
      </View>
      
      <View style={styles.condition}>
        <Text style={{color:'#00000099',fontFamily:'Inconsolata_600SemiBold',width:width-10,fontSize:height * 0.02,}}>By proceeding, you consent to get calls, whatsapp 
or SMS messages, including by automated means, 
from {'Appname'} and its affiliates to the number 
provided</Text>
      </View>
      <View style={{marginTop:height*0.03}}>
      <View style={styles.signinwith}>
            <View style={{flexDirection: 'row', }}>
    <View style={{backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center'}} />
    <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: 14,fontFamily:'Inconsolata_600SemiBold' }}>or sign up with</Text>
    <View style={{backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center'}} />
    </View>
    </View>
      <View style={{
    flexDirection: 'row',width:width,justifyContent:'space-between',paddingLeft:10,paddingRight:10,paddingTop:20}}>
     <Image
                  source={require("../../assets/google.png")}
                  style={{ height: 100,width: 100 }}
                />
      <Image
                  source={require("../../assets/facebook.png")}
                  style={{ height: 100,width: 100 }}
                />
      <Image
                  source={require("../../assets/apple.png")}
                  style={{ height: 100,width: 100 }}
                />
    </View>
      </View>
   </View>
    </SafeAreaView>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    condition: {
        marginLeft: '2.5%',
        paddingBottom: 20,
        paddingTop:20,
        width:'100%'
      },
      signinwith: {
        marginTop: '5%',
        marginHorizontal: '3.0%',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
    },
});