import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, Dimensions, StatusBar, SafeAreaView } from 'react-native'
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
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const SecondScreen = () => {
  const navigation = useNavigation();
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
  
  <SafeAreaView  >
     <StatusBar/>
     <ImageBackground source={require('../../assets/SplashScreen1.png')} style={{height:height,width:width}} >
     <View style={{position:'absolute',width:'100%',bottom:80,right:0}}>
     <TouchableOpacity style={{ width:'85%',backgroundColor:'#41db3f',height:55,justifyContent:'center',borderRadius:10,shadowColor: "#575757",
shadowRadius: 2.6,
shadowOffset: {
height: 3,
width: 0,
},
shadowOpacity: 5,elevation:2,alignSelf:'center' }} onPress={()=>navigation.navigate('Signupnew')}>

<View style={{textAlign:'center',flexDirection:'row',justifyContent:'center', paddingLeft:65}}>
<View>
<Text style={{color:'white',fontSize:25,alignSelf:'center',fontFamily:'Inconsolata_900Black'}}>Get Started</Text>
</View>
<View style={{paddingLeft:40,paddingRight:40,alignSelf:'center'}}>
<Image source={require('../../assets/getstartedarrow.png')} style={{width:30,height:20,}}/>

</View>
</View>

</TouchableOpacity>
</View>
  </ImageBackground>
  </SafeAreaView>

  )
}

export default SecondScreen

const styles = StyleSheet.create({})