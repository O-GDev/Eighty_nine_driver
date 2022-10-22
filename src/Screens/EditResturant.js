import { SafeAreaView, StyleSheet, Text, View, ScrollView, StatusBar, Image,Modal, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import { Avatar,Title,Caption,paragraph,TouchableRipple,Switch, Drawer, } from 'react-native-paper'

const EditResturant = ({navigation}) => {
    const[name,setName]=useState('');
    const[submitted,setSubmitted]=useState(false)
    const[showWarning,setshowWarning]=useState(false)
    const onPressResturantHandler = () => {
        if (name.length > 3) {
          setSubmitted(!submitted);
        }else{
          setshowWarning(true)
        }
      }
  return (
    <SafeAreaView>
    <Modal
    visible={showWarning}
    transparent
    onRequestClose={
      () => setshowWarning(false)
    }>
   
    <SafeAreaView style={{justifyContent:'center',height:'100%',marginTop:'15%'}}>
<View style={{backgroundColor:'white',width:'85%',height:'40%',alignSelf:'center',}}>
<View style={{alignSelf:'center',paddingTop:10,color:'green'}}>
<Image source={require('../../assets/location.png')} style={{width:30,height:30,tintColor:'green'}}/>
</View>
<View style={{alignSelf:'center',paddingTop:10,paddingBottom:30}}>
    <Text style={{fontWeight:'600',color:''}}>Allow 89driver to access this device location</Text>
</View>
<View style={{}}>
<View style={{borderWidth:0.5,}} />
</View>
<View style={{alignSelf:'center',paddingTop:20,paddingBottom:30}}>
    <Text style={{color:'green'}}>ALLOW</Text>
</View>
<View style={{borderWidth:0.5,}} />
<View style={{alignSelf:'center',paddingTop:20,paddingBottom:30}}>
    <Text onPress={() => navigation.navigate('EditLocation')} style={{color:'green'}}>EDIT LOCATION</Text>
</View>
</View>

</SafeAreaView>
    
    </Modal>
    <StatusBar/>
        <ScrollView>
 <View style={{alignSelf:'center',marginTop:'10%',paddingBottom:50}}>
<Avatar.Image source={require('../../assets/paulismith.png')} style={{alignSelf:'center'}} />
<Text style={{fontWeight:'800',fontSize:17}}>Resturant name</Text>
 </View>
<View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'center',paddingTop:20}}>
    <View style={{flexDirection:'row',paddingLeft:10}}>
    <Image source={require('../../assets/resturant.png')} style={{width:40,height:40,}}/>
        <View>
        <Text style={{fontWeight:'bold',fontSize:14}}>Resturant name</Text>
        <Text style={{fontSize:11}}>Jordan Foodie</Text>
        </View>
    </View>
    <View style={{justifyContent:'center',paddingRight:15}}>
    <TouchableOpacity onPress={()=>navigation.navigate('EditResturantName')}>
    <Image source={require('../../assets/Edit.png')} style={{width:20,height:20,}}/>
    </TouchableOpacity>
    </View>
</View>

<View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'center',paddingTop:15}}>
    <View style={{flexDirection:'row',paddingLeft:10}}>
    <TouchableOpacity>
    <Image source={require('../../assets/location.png')} style={{width:40,height:40,}}/>
    </TouchableOpacity>
        <View>
        <Text style={{fontWeight:'bold',fontSize:14}}>Location</Text>
        <Text style={{fontSize:11}}>atlanta,GA</Text>
        </View>
    </View>
    <View style={{justifyContent:'center',paddingRight:15}}>
    <TouchableOpacity onPress={onPressResturantHandler}>
    <Image source={require('../../assets/Edit.png')} style={{width:20,height:20,}}/></TouchableOpacity>
    </View>
</View>

<View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'center',paddingTop:15}}>
    <View style={{flexDirection:'row',paddingLeft:10}}>
    <Image source={require('../../assets/phone.png')} style={{width:40,height:40,}}/>
        <View>
        <Text style={{fontWeight:'bold',fontSize:14}}>Phone Number</Text>
        <Text style={{fontSize:11}}>1234567890</Text>
        </View>
    </View>
    <View style={{justifyContent:'center',paddingRight:15}}>
    <TouchableOpacity onPress={()=>navigation.navigate('EditPhoneNumber')}>
    <Image source={require('../../assets/Edit.png')} style={{width:20,height:20,}}/>
    </TouchableOpacity>
    </View>
</View>

<View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'center',paddingTop:15}}>
    <View style={{flexDirection:'row',paddingLeft:10}}>
    <Image source={require('../../assets/email.png')} style={{width:40,height:40,}}/>
        <View>
        <Text style={{fontWeight:'bold',fontSize:14}}>Email</Text>
        <Text style={{fontSize:11}}>email@example.com</Text>
        </View>
    </View>
    <View style={{justifyContent:'center',paddingRight:15}}>
    <TouchableOpacity onPress={() =>navigation.navigate('EditEmail')}>
    <Image source={require('../../assets/Edit.png')} style={{width:20,height:20,}}/>
    </TouchableOpacity>
    </View>
</View>
<View style={{marginTop:20}} >
    <View style={{borderWidth:0.5}} />
</View>
<TouchableOpacity style={{margin:15,marginLeft:20,marginBottom:0}}>
    <View style={{flexDirection:'row'}}>
        <Image source={require('../../assets/share.png')} style={{width:20, height:20}} />
        <Text style={{marginLeft:10,fontSize:15,fontWeight:'600'}}>Share</Text>
    </View>
</TouchableOpacity>

<TouchableOpacity style={{marginTop:15,marginLeft:20,marginBottom:0}}>
    <View style={{flexDirection:'row'}}>
        <Image source={require('../../assets/privacypolicy1.png')} style={{width:20, height:20}} />
        <Text style={{marginLeft:10,fontSize:15,fontWeight:'600'}}>Privacy Policy</Text>
    </View>
</TouchableOpacity>

<TouchableOpacity style={{marginTop:15,marginLeft:20,marginBottom:0}}>
    <View style={{flexDirection:'row'}}>
        <Image source={require('../../assets/privacypolicy2.png')} style={{width:20, height:20}} />
        <Text style={{marginLeft:10,fontSize:15,fontWeight:'600'}}>Privacy Policy</Text>
    </View>
</TouchableOpacity>

<TouchableOpacity style={{marginTop:15,marginLeft:20,marginBottom:0}}>
    <View style={{flexDirection:'row'}}>
        <Image source={require('../../assets/logout.png')} style={{width:20, height:20}} />
        <Text style={{marginLeft:10,fontSize:15,fontWeight:'600'}}>Logout</Text>
        </View>
    </TouchableOpacity>

</ScrollView>
    </SafeAreaView>
  )
}

export default EditResturant

const styles = StyleSheet.create({})