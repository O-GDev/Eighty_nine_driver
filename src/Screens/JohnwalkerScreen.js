import { StyleSheet, Text, ScrollView, View,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { Avatar,Title,Caption,paragraph,TouchableRipple,Switch, Drawer, } from 'react-native-paper'
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

const JohnwalkerScreen = ({navigation}) => {
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
    <ScrollView>
     <View style={{marginTop:15}}>
    <TouchableOpacity style={{width:'95%',height:120,alignSelf:'center',}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/Jhonwalker.png')} style={{}} />
<View style={{paddingLeft:10}}>
<Title style={{fontFamily:'Inconsolata_600SemiBold'}}>Jhon walker</Title>
<View style={{flexDirection:'row'}}>
  <View style={{flexDirection:'row'}}>
<Image source={require('../../assets/Stars.png')} style={{width:100,height:30}}/>

<Image source={require('../../assets/oneStars.png')} style={{width:30,height:30}}/>
  </View>
</View>
</View>
      </View>
      <View style={{alignSelf:'flex-end'}}>
      <TouchableOpacity style={{backgroundColor:'blue',height:40,borderRadius:25,width:'35%',justifyContent:'center'}}><Text style={{alignSelf:'center',fontSize:17,color:'white',padding:5,fontFamily:'Inconsolata_600SemiBold'}}>Send request</Text></TouchableOpacity>
      </View>
      </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'center',paddingTop:25}}>
    <Text style={{fontWeight:'500',fontSize:17,paddingLeft:17,fontFamily:'Inconsolata_600SemiBold'}}>Resturant Feedback</Text>
    <Text style={{paddingRight:15,}}>
   <Image source={require('../../assets/circle.png')} style={{width:22,height:22}}/><Text style={{fontSize:15}}>5</Text>
    </Text>
    </View>
    <View style={{marginTop:15}}>
    <TouchableOpacity style={{width:'95%',height:165,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 5,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/FrozenfoodJoint.png')} style={{}} />
<View style={{paddingLeft:10}}>
<Title style={{fontFamily:'Inconsolata_600SemiBold'}}>Frozen foods joint</Title>
<View style={{flexDirection:'row'}}>
  
<Image source={require('../../assets/Stars.png')} style={{width:100,height:30}}/>

<Image source={require('../../assets/oneStars.png')} style={{width:30,height:30}}/>
</View>
</View>
      </View>
      <View style={{paddingLeft:22}}>
        <Text style={{fontSize:17,fontFamily:'Inconsolata_600SemiBold'}}>He is very responsive and a</Text>
        <Text style={{fontSize:17,fontFamily:'Inconsolata_600SemiBold'}}>honest man.He is so smart </Text>
        <Text style={{fontSize:17,fontFamily:'Inconsolata_600SemiBold'}}>in what he do</Text>
      </View>
    </TouchableOpacity>
    </View>
    <View style={{marginTop:15}}>
    <TouchableOpacity style={{width:'95%',height:165,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 5,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/FoodoeHub.png')} style={{}} />
<View style={{paddingLeft:10}}>
<Title style={{fontFamily:'Inconsolata_600SemiBold'}}>Foodoe hub</Title>
<View style={{flexDirection:'row'}}>
  
<Image source={require('../../assets/Stars.png')} style={{width:100,height:30}}/>

<Image source={require('../../assets/oneStars.png')} style={{width:30,height:30}}/>
</View>
</View>
      </View>
      <View style={{paddingLeft:22}}>
        <Text style={{fontSize:17,fontFamily:'Inconsolata_600SemiBold'}}>He is very responsive and a</Text>
        <Text style={{fontSize:17,fontFamily:'Inconsolata_600SemiBold'}}>honest man.He is so smart </Text>
        <Text style={{fontSize:17,fontFamily:'Inconsolata_600SemiBold'}}>in what he do</Text>
      </View>
    </TouchableOpacity>
    </View>
    <View style={{marginTop:15}}>
    <TouchableOpacity style={{width:'95%',height:165,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 5,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/BennyBar.png')} style={{}} />
<View style={{paddingLeft:10}}>
<Title style={{fontFamily:'Inconsolata_600SemiBold'}}>Benny Bar</Title>
<View style={{flexDirection:'row'}}>
  
<Image source={require('../../assets/Stars.png')} style={{width:100,height:30}}/>

<Image source={require('../../assets/oneStars.png')} style={{width:30,height:30}}/>
</View>
</View>
      </View>
      <View style={{paddingLeft:22}}>
        <Text style={{fontSize:17,fontFamily:'Inconsolata_600SemiBold'}}>He is very responsive and a</Text>
        <Text style={{fontSize:17,fontFamily:'Inconsolata_600SemiBold'}}>honest man.He is so smart </Text>
        <Text style={{fontSize:17,fontFamily:'Inconsolata_600SemiBold'}}>in what he do</Text>
      </View>
    </TouchableOpacity>
    </View>
    <View>
        <TouchableOpacity onPress={() => navigation.navigate('SeemoreScreen')}><Text style={{color:'green',alignSelf:'center',padding:20,fontSize:18,fontFamily:'Inconsolata_600SemiBold'}}>see more</Text></TouchableOpacity>
    </View>
    <View>
        <TouchableOpacity onPress={()=>navigation.navigate('')} style={{backgroundColor:'blue',width:'75%',height:40,justifyContent:'center',alignSelf:'center'}}><Text style={{alignSelf:'center',color:'white',fontSize:20,fontFamily:'Inconsolata_600SemiBold'}}>Send Request</Text></TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default JohnwalkerScreen

const styles = StyleSheet.create({})