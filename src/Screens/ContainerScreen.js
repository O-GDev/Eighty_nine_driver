import { StyleSheet, Text, SafeAreaView, View,Dimensions,Image,TouchableOpacity, StatusBar, ScrollView} from 'react-native'
import React from 'react'
import { Avatar,Title,Caption,paragraph,TouchableRipple,Switch, Drawer, } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageRequests from './ManageRequest/ManageRequests';
import { useNavigation } from '@react-navigation/native';


const Tab = createBottomTabNavigator();
const {width, height} = Dimensions.get('window');

const ContainerScreen = ({navigation,props}) => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{height:height,width:width}}>
    <StatusBar/>
    <ScrollView>
    <View style={{paddingTop:5}}>
            <Text style={{paddingLeft:10,fontWeight:'500'}}>My Requests</Text>
            <View>
            <View style={{marginTop:10}}>
    <TouchableOpacity style={{width:'95%',height:100,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}} onPress={() => nav.navigate('Requests')}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/Jhonwalker.png')} style={{}} />
<View style={{paddingLeft:10,width:'80%'}}>
<Title style={{fontFamily:'Inconsolata_600SemiBold',}}>Jhon walker</Title>
<View style={{paddingBottom:20,justifyContent:'space-evenly',paddingRight:10}}>
  <Text style={{color:'blue',backgroundColor:'#e8e8e8',textAlign:'center',borderRadius:10,alignSelf:'flex-end',paddingLeft:10,paddingRight:10}}>En route</Text>
  </View>
</View>
      </View>
    </TouchableOpacity>
    </View>

    

    
            </View>
        </View>
        <View style={{paddingTop:10}}>
            <Text style={{paddingLeft:10,fontWeight:'500'}}>Popular Driver</Text>
            <View>
            <View style={{marginTop:10}}>
    <TouchableOpacity style={{width:'95%',height:100,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}} onPress={() => navigation.navigate('JohnwalkerScreen')}>
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

    

    
            </View>
        </View>



        <View style={{paddingTop:10}}>
            <Text style={{paddingLeft:10,fontWeight:'500'}}>Nearest Drivers</Text>
            <View>
            <View style={{marginTop:10}}>
    <TouchableOpacity style={{width:'95%',height:100,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}} onPress={() => navigation.navigate('JohnwalkerScreen')}>
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

    

    
            </View>
        </View>


        

        <View style={{paddingTop:10}}>
            <Text style={{paddingLeft:10,fontWeight:'500'}}>Pending Delivery</Text>
            <View>
            <View style={{marginTop:10}}>
    <TouchableOpacity style={{width:'95%',height:100,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}} onPress={() => navigation.navigate('JohnwalkerScreen')}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/Jhonwalker.png')} style={{}} />
<View style={{paddingLeft:10}}>
<Title style={{fontFamily:'Inconsolata_600SemiBold'}}>Jhon walker</Title>
</View>
<View style={{width:'50%',justifyContent:'center',marginTop:'10%'}}>
  <Text style={{alignSelf:'center',backgroundColor:'#111AE5',padding:2,borderRadius:10,paddingLeft:15,paddingRight:15,fontSize:16,color:'white'}}>Pending</Text>
</View>
      </View>
    </TouchableOpacity>
    </View>

    

    
            </View>
        </View>


            <View style={{paddingTop:40}}>
            <TouchableOpacity onPress={() => navigation.navigate('NearbyDrivers')} style={{alignSelf:'center',backgroundColor:'#111AE5',width:'90%',padding:5,height:50,justifyContent:'center'}}><Text style={{color:'white',fontWeight:'400',alignSelf:'center',fontSize:25,fontFamily:'Inconsolata_600SemiBold'}}>Send food</Text></TouchableOpacity>
            </View>
            <View style={{height:60}}/>
           </ScrollView>
    </SafeAreaView>
  )
}

export default ContainerScreen


const styles = StyleSheet.create({})
