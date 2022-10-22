import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import ColorAnimation from './ColorAnimation'


const {width,height} = Dimensions.get('window')
const SignupNewPage = ({navigation}) => {
  
  return (
    <SafeAreaView style={styles.signup}>
        <View style={{
        }}>
        <ImageBackground>
            <View>
            <View>
            <Text style={{alignSelf:'flex-end',margin:13,marginBottom:50}}><ColorAnimation/></Text>
            </View>
            <Text style={{fontSize:46,fontWeight:'700',marginLeft:20,color:'white'}}>What </Text>
            <Text style={{fontWeight:'600',fontSize:35,marginLeft:20,color:'white'}}>do you want to do?</Text>
           <View style={{marginTop:height*0.04,marginBottom:height*0.4}}>
           <TouchableOpacity onPress={()=>navigation.navigate('Sign Up')} style={[styles.signbutton, {backgroundColor:'transparent'}]}>
              <Text style={styles.signtext}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signbutton} onPress={()=>navigation.navigate('Signinpage')}>
              <Text style={[styles.signtext,{color:'black'}]}>Sign In</Text>
            </TouchableOpacity>
           </View>
            </View>
        </ImageBackground>
  </View>
    </SafeAreaView>
  )
}

export default SignupNewPage

const styles = StyleSheet.create({
    signup:{
        // flex:1,
        justifyContent:'center',
        alignContent:'center',backgroundColor:'green',
        borderBottomLeftRadius:300,
        height:'90%'
    },
    signbutton:{
      width:'90%',
      height:40,
      borderWidth:0.7,
      borderColor:'white',
      backgroundColor:'white',
      justifyContent:'center',
      borderRadius:25,
      alignSelf:'center',
      margin:10
    },
    signtext:{
      color:'white',
      fontSize:17,
      alignSelf:'center'

    }
})