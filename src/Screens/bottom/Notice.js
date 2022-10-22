import { StyleSheet, Text, TextInput, View,TouchableOpacity,Dimensions,Image } from 'react-native'
import React from 'react'
import { Avatar,Title,Caption,paragraph,TouchableRipple,Switch, Drawer, } from 'react-native-paper'

  
const {width, height} = Dimensions.get('window');

const Notification=() =>{
    return (
      <View style={{ }}>
       <View>
       
       <View style={{marginTop:15}}>
       <View style={{marginLeft:'3%'}}>
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
  <Avatar.Image source={require('../../../assets/paulismith.png')} style={{}} />
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
       <View style={{marginLeft:'3%'}}>
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
  <Avatar.Image source={require('../../../assets/paulismith.png')} style={{}} />
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
       <View style={{marginLeft:'3%'}}>
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
  <Avatar.Image source={require('../../../assets/paulismith.png')} style={{}} />
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
       <View style={{height:60,flexDirection:'row',justifyContent:'space-evenly',}}>
        <TouchableOpacity onPress={()=>navigations.navigate('BottomTab')} style={{marginTop:'3.5%'}} >
            <Image source={require('../../../assets/BottomNavHome.png')} style={{width:40,height:40, }}  />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigations.navigate('Notification')} style={{marginTop:'4.5%'}}>
            <Image source={require('../../../assets/notification.png')} style={{width:35,height:35,}} />
        </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>navigations.navigate('Managerequest')} style={{marginTop:'2.5%',}}  >
      
      {/* {pic} */}
      <Image source={require('../../../assets/cal.png')} style={{width:40,height:40}} />
                  </TouchableOpacity>
                  
     
        <TouchableOpacity onPress={()=>navigations.navigate('EditResturant')} style={{marginTop:'3%',color:'blue'}}>
            <Image source={require('../../../assets/profile.png')} style={{width:40,height:40}} />
        </TouchableOpacity>
      </View>
      </View>
    );
  } 
  

export default Notification

const styles = StyleSheet.create({})

