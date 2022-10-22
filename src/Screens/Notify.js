import { StyleSheet, Text, SafeAreaView, View,Dimensions,Image,TouchableOpacity, StatusBar, ScrollView} from 'react-native'
import React from 'react'
import { Avatar,Title,Caption,paragraph,TouchableRipple,Switch, Drawer, } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageRequests from './ManageRequest/ManageRequests';


const {width, height} = Dimensions.get('window');

const Notify = ({navigation}) => {
  return (
    <View style={{ }}>
    <View>
    
    <View style={{marginTop:15}}>
    <View style={{marginLeft:'3%',marginBottom:'3%'}}>
       <Text style={{color:'#00000099'}}>Today</Text>
    </View>
   <TouchableOpacity style={{width:'95%',height:100,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/paulismith.png')} style={{}} />
<View style={{paddingLeft:10,justifyContent:'center'}}>
<Text style={{fontFamily:'Inconsolata_500SemiBold',fontWeight:'700',fontSize:15,color:'#000000'}}>Pauli Smith: Declined your request</Text>
<View style={{}}>
 <Text style={{color:'#00000099'}}>6 hours ago</Text>
</View>
</View>
     </View>
    
   </TouchableOpacity>
   </View>

   <View style={{marginTop:15}}>
    <View style={{marginLeft:'3%',marginBottom:'3%'}}>
       <Text style={{color:'#00000099'}}>Last 7 days</Text>
    </View>
   <TouchableOpacity style={{width:'95%',height:100,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/paulismith.png')} style={{}} />
<View style={{paddingLeft:10,justifyContent:'center'}}>
<Text style={{fontFamily:'Inconsolata_500SemiBold',fontWeight:'700',fontSize:15,color:'#000000'}}>Pauli Smith: Declined your request</Text>
<View style={{}}>
 <Text style={{color:'#00000099'}}>4 days ago</Text>
</View>
</View>
     </View>
    
   </TouchableOpacity>
   </View>

   <View style={{marginTop:15}}>
    <View style={{marginLeft:'3%',marginBottom:'3%'}}>
       <Text style={{color:'#00000099'}}>Last 30 days</Text>
    </View>
   <TouchableOpacity style={{width:'95%',height:100,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/paulismith.png')} style={{}} />
<View style={{paddingLeft:10,justifyContent:'center'}}>
<Text style={{fontFamily:'Inconsolata_500SemiBold',fontWeight:'700',fontSize:15,color:'#000000'}}>Pauli Smith: Declined your request</Text>
<View style={{}}>
 <Text style={{color:'#00000099'}}>14 days ago</Text>
</View>
</View>
     </View>
    
   </TouchableOpacity>
   </View>
    </View>
   </View>
 );
} 
  

export default Notify

const styles = StyleSheet.create({})