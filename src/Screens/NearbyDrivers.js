import { StyleSheet, Text, View,SafeAreaView, StatusBar, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
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
import BottomTab from './BottomTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContainerScreen from './ContainerScreen';
import EditResturant from './EditResturant';
import ManageRequests from './ManageRequest/ManageRequests';
import BottomTabComponent from './BottomTabComponent';
import { useNavigation } from '@react-navigation/native';



const{width,height}=Dimensions.get('window');
const NearbyDrivers = ({navigation}) => {
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
 
 const navigations = useNavigation();
  return (
    <SafeAreaView style={{height:height,backgroundColor:'white'}}>
    <StatusBar/>
    
      <View style={{flexDirection:'row',justifyContent:'space-between',elevation:2,}}>
    <Text style={{margin:15}}>   </Text>
    <View style={{justifyContent:'center',alignSelf:'center'}}>
    <Text style={{fontWeight:'600',fontSize:17,}}>Nearby Drivers</Text></View>

    <TouchableOpacity onPress={() => navigation.navigate('BottomTab')} style={{justifyContent:'center'}}>
    <Image source={require('../../assets/BottomNavHome.png')} style={{width:30,height:30,alignSelf:'center',margin:15}}  />
    </TouchableOpacity>
       
    </View>
    <ScrollView style={{backgroundColor:'white'}}>
     <View style={{marginTop:15}}>
    <TouchableOpacity style={{width:'95%',height:100,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 5,}} onPress={() => navigation.navigate('JohnwalkerScreen')}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/Jhonwalker.png')} style={{}} />
<View style={{paddingLeft:10}}>
<Title style={{fontFamily:'Inconsolata_600SemiBold'}}>Jhon walker</Title>
<View style={{flexDirection:'row'}}>
  
<Image source={require('../../assets/Stars.png')} style={{width:100,height:30}}/>

<Image source={require('../../assets/oneStars.png')} style={{width:30,height:30}}/>
<Text style={{paddingLeft:10}}>
<Image source={require('../../assets/circle.png')}  style={{width:20,height:20}}/>
</Text>
<Text style={{fontSize:20,paddingLeft:10}}>5</Text>
</View>
</View>
      </View>
    </TouchableOpacity>
    </View>

    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:100,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 5,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/paulismith.png')} style={{}} />
<View style={{paddingLeft:10}}>
<Title style={{fontFamily:'Inconsolata_600SemiBold'}}>Pauli Smith</Title>
<View style={{flexDirection:'row'}}>
  
<Image source={require('../../assets/Stars.png')} style={{width:100,height:30}}/>

<Image source={require('../../assets/oneStars.png')} style={{width:30,height:30}}/>
<Text style={{paddingLeft:10}}>
<Image source={require('../../assets/circle.png')}  style={{width:20,height:20}}/>
</Text>
<Text style={{fontSize:20,paddingLeft:10}}>11</Text>
</View>
</View>
      </View>
    </View>
    </View>

    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:100,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 5,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/JamesKhan.png')} style={{}} />
<View style={{paddingLeft:10}}>
<Title style={{fontFamily:'Inconsolata_600SemiBold'}}>James Khan</Title>
<View style={{flexDirection:'row'}}>
  
<Image source={require('../../assets/Stars.png')} style={{width:100,height:30}}/>

<Image source={require('../../assets/oneStars.png')} style={{width:30,height:30}}/>
<Text style={{paddingLeft:10}}>
<Image source={require('../../assets/circle.png')}  style={{width:20,height:20}}/>
</Text>
<Text style={{fontSize:20,paddingLeft:10}}>50</Text>
</View>
</View>
      </View>
    </View>
    </View>

    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:100,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 5,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/DeneilTorry.png')} style={{}} />
<View style={{paddingLeft:10}}>
<Title style={{fontFamily:'Inconsolata_600SemiBold'}}>Deneil Torry</Title>
<View style={{flexDirection:'row'}}>
  
<Image source={require('../../assets/Stars.png')} style={{width:100,height:30}}/>

<Image source={require('../../assets/oneStars.png')} style={{width:30,height:30}}/>
<Text style={{paddingLeft:10}}>
<Image source={require('../../assets/circle.png')}  style={{width:20,height:20}}/>
</Text>
<Text style={{fontSize:20,paddingLeft:10}}>20</Text>
</View>
</View>
      </View>
    </View>
    </View>

    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:100,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 5,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/GrannVenn.png')} style={{}} />
<View style={{paddingLeft:10}}>
<Title style={{fontFamily:'Inconsolata_600SemiBold'}}>Grann Venn</Title>
<View style={{flexDirection:'row'}}>
  
<Image source={require('../../assets/Stars.png')} style={{width:100,height:30}}/>

<Image source={require('../../assets/oneStars.png')} style={{width:30,height:30}}/>
<Text style={{paddingLeft:10}}>
<Image source={require('../../assets/circle.png')}  style={{width:20,height:20}}/>
</Text>
<Text style={{fontSize:20,paddingLeft:10}}>5</Text>
</View>
</View>
      </View>
    </View>
    </View>

    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:100,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 5,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/DrollSwift.png')} style={{}} />
<View style={{paddingLeft:10}}>
<Title style={{fontFamily:'Inconsolata_600SemiBold'}}>Droll Swift</Title>
<View style={{flexDirection:'row'}}>
  
<Image source={require('../../assets/Stars.png')} style={{width:100,height:30}}/>

<Image source={require('../../assets/oneStars.png')} style={{width:30,height:30}}/>
<Text style={{paddingLeft:10}}>
<Image source={require('../../assets/circle.png')}  style={{width:20,height:20}}/>
</Text>
<Text style={{fontSize:20,paddingLeft:10}}>10</Text>
</View>
</View>
      </View>
    </View>
    </View>

    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:100,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 3,
width: 0,
},
shadowOpacity: 10,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/MarkKnot.png')} style={{}} />
<View style={{paddingLeft:10}}>
<Title style={{fontFamily:'Inconsolata_600SemiBold'}}>Mark Knot</Title>
<View style={{flexDirection:'row'}}>
  
<Image source={require('../../assets/Stars.png')} style={{width:100,height:30}}/>

<Image source={require('../../assets/oneStars.png')} style={{width:30,height:30}}/>
<Text style={{paddingLeft:10}}>
<Image source={require('../../assets/circle.png')}  style={{width:20,height:20}}/>
</Text>
<Text style={{fontSize:20,paddingLeft:10}}>8</Text>
</View>
</View>
      </View>
    </View>
    </View>
    
   </ScrollView>
  
    
  
    </SafeAreaView>
  )
}

export default NearbyDrivers

const styles = StyleSheet.create({})