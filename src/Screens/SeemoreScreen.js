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

const SeemoreScreen = ({navigation}) => {
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
  })
  return (
    <ScrollView>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={{fontWeight:'500',paddingTop:25,fontSize:17,paddingLeft:17,fontFamily:'Inconsolata_600SemiBold'}}>Resturants Feedback</Text>
    <Text style={{margin:20,paddingLeft:12}}>
    <Text style={{paddingRight:10}}>
    <Image source={require('../../assets/circle.png')} style={{width:20,height:20}}/>
    </Text><Text style={{fontSize:15,}}>5</Text></Text>
    </View>
    <View style={{marginTop:15}}>
    <TouchableOpacity style={{width:'95%',height:165,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
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
        <Text style={{fontSize:17,fontFamily:'Inconsolata_600SemiBold'}}>honest man. He is so smart </Text>
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
shadowOpacity: 20,}}>
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
        <Text style={{fontSize:17,fontFamily:'Inconsolata_600SemiBold'}}>honest man. He is so smart </Text>
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
shadowOpacity: 20,}}>
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
        <Text style={{fontSize:17,fontFamily:'Inconsolata_600SemiBold'}}>honest man. He is so smart </Text>
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
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/Groceriesandfood.png')} style={{}} />
<View style={{paddingLeft:10}}>
<Title style={{fontFamily:'Inconsolata_600SemiBold'}}>groceries and food</Title>
<View style={{flexDirection:'row'}}>
  
<Image source={require('../../assets/Stars.png')} style={{width:100,height:30}}/>

<Image source={require('../../assets/oneStars.png')} style={{width:30,height:30}}/>
</View>
</View>
      </View>
      <View style={{paddingLeft:22}}>
        <Text style={{fontSize:17,fontFamily:'Inconsolata_600SemiBold'}}>He is very responsive and a</Text>
        <Text style={{fontSize:17,fontFamily:'Inconsolata_600SemiBold'}}>honest man. He is so smart </Text>
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


shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/Mercyandgracefood.png')} style={{}} />
<View style={{paddingLeft:10}}>
<Title style={{fontFamily:'Inconsolata_600SemiBold'}}>Mercy and Grace food</Title>
<View style={{flexDirection:'row'}}>
  
<Image source={require('../../assets/Stars.png')} style={{width:100,height:30}}/>

<Image source={require('../../assets/oneStars.png')} style={{width:30,height:30}}/>
</View>
</View>
      </View>
      <View style={{paddingLeft:22}}>
        <Text style={{fontSize:17,fontFamily:'Inconsolata_600SemiBold'}}>He is very responsive and a</Text>
        <Text style={{fontSize:17,fontFamily:'Inconsolata_600SemiBold'}}>honest man. He is so smart </Text>
        <Text style={{fontSize:17,fontFamily:'Inconsolata_600SemiBold'}}>in what he do</Text>
      </View>
    </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default SeemoreScreen

const styles = StyleSheet.create({})
