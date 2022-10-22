import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity,Dimensions,Image } from 'react-native'
import React from 'react'
import ColorAnimation from './ColorAnimation'
import { useState } from 'react'

const {width,height} = Dimensions.get('window')
const SigninPage = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('')

const  handleLogin=()=>{
    if(phoneNumber===""){
      return false
    }else{
      navigation.navigate('SigninOtp',{
        'phone':phoneNumber
       })
    }
  }
  return (
   <View style={{backgroundColor:'green',height:'70%',borderBottomLeftRadius:100,borderBottomRightRadius:100}}>
     <SafeAreaView style={styles.contain}>
        <View style={{justifyContent:'center',alignContent:'center',flex:1}}>
        
          <View style={{alignSelf:'center',borderRadius:15,maxHeight:height}}>
        <View style={{padding:20,marginTop:10}}>

          <View style={{}}>
          <View style={{alignSelf:'center',}}>
          <Text style={{}}><ColorAnimation/></Text>
          </View>
          <View>
            <Text style={{alignSelf:'center',fontSize:25,color:'white'}}>Deliver with ease</Text>
          </View>
     <View style={{backgroundColor:'white',width:width*0.9,alignSelf:'center',borderRadius:15,paddingVertical:35,marginBottom:50,marginTop:20,marginLeft:100,marginRight:100}}>
     <Text style={{alignSelf:'center',margin:10,fontSize:20,fontWeight:'600',paddingBottom:10}}>Login Your Account</Text>
          <TextInput
          placeholder='Phone Number or Email'
          onChangeText={(value) => setPhoneNumber(value)}
          style={{borderWidth:1,borderRadius:10,borderColor:'green',paddingLeft:5,alignSelf:'center',width:width*0.85}}
          />
          <TouchableOpacity style={{   width:'90%',
      height:45,
      borderWidth:0.7,
      borderColor:'white',
      backgroundColor:'green',
      justifyContent:'center',
      borderRadius:25,
      alignSelf:'center',
      margin:20
   }} onPress={handleLogin}><Text style={{color:'white',
      fontSize:17,
      alignSelf:'center'}} >Sign In</Text></TouchableOpacity>
      <View style={{flexDirection: 'row',width:'90%',alignSelf:'center' }}>
    <View style={{backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center'}} />
    <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: 14,fontFamily:'Inconsolata_600SemiBold' }}>or sign up with</Text>
    <View style={{backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center'}} />
    </View>
      <View style={{
    flexDirection: 'row',justifyContent:'space-around',paddingTop:20,}}>
     <Image
                  source={require("../../assets/google.png")}
                  style={{ height: 70,width: 70 }}
                />
      <Image
                  source={require("../../assets/facebook.png")}
                  style={{ height: 70,width: 70 }}
                />
      <Image
                  source={require("../../assets/apple.png")}
                  style={{ height: 70,width: 70 }}
                />
    
        </View>


          </View>

          <View style={{alignSelf:'center'}}>
            <Text style={{alignSelf:'center',fontSize:17}}>Don't have an account?</Text>
            <Text style={{alignSelf:'center',color:'green',fontWeight:'700',fontSize:20}} onPress={()=>navigation.navigate('Sign Up')}>Sign Up</Text>
          </View>
       
     </View>
        </View>

        
    </View>
</View>
 
    
    </SafeAreaView>
   </View>
  )
}

export default SigninPage

const styles = StyleSheet.create({
    contain:{
        // flex:1,
        alignContent:'center',
        justifyContent:'center',
        height:height,
        // backgroundColor:'green',
        // height:'90%',
        // borderBottomLeftRadius:150,
        // borderBottomRightRadius:150,
        // marginBottom:50
    }
})