import { StyleSheet, Text, View, TextInput,TouchableOpacity, Dimensions,Image,Modal, SafeAreaView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Avatar,Title,Caption,paragraph,TouchableRipple,Switch, Drawer, } from 'react-native-paper'


const {width,height}=Dimensions.get('window')
const FeedBack = () => {   
    const[name,setName]=useState('');
    const[submitted,setSubmitted]=useState(false)
    const[showWarning,setshowWarning]=useState(false)
    const onPressHandler = () => {
        if (name.length > 3) {
          setSubmitted(!submitted);
        }else{
          setshowWarning(true)
        }
      }
  return (
    <View >
    <Modal
    visible={showWarning}
    transparent
    onRequestClose={
      () => setshowWarning(false)    
    }>
    <SafeAreaView style={{justifyContent:'center',height:height}}>
        <View style={{backgroundColor:'white',height:'30%',width:'85%',justifyContent:'center',alignSelf:'center'}}>
            <Text style={{alignSelf:'center'}}>You may not know how far you have helped</Text>
            <Text style={{alignSelf:'center'}}>this driver, apperently he will really</Text>
            <Text style={{alignSelf:'center'}}>appreciate. Your delivery is now completed</Text>
            <View style={{paddingTop:30,marginRight:'5%'}}>
            <Text style={{alignSelf:'flex-end',color:'blue'}}>Ok</Text>
        </View>
        </View>
    </SafeAreaView>
    </Modal>
     <View style={{marginTop:15}}>
    <View style={{width:'95%',height:height *0.55,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:26,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 3,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../../assets/Jhonwalker.png')} style={{}} />
<View style={{paddingLeft:10,width:'80%'}}>
<Title>Jhon Walker</Title>
<View style={{paddingBottom:20,justifyContent:'space-evenly',paddingRight:10}}>
  </View>
</View>
      </View>
    <View>
        <Text style={{marginLeft:'8%',fontSize:16,fontWeight:'600',marginTop:'2%'}}>Rate your experience with this driver</Text>
    </View>

        <View style={{marginLeft:'8%',marginTop:'4%',marginBottom:'4%'}}>
        <Image source={require('../../../assets/blankstars.png')} style={{width:'60%',height:30}} />
        </View>
        <View>
        <Text style={{marginLeft:'8%',fontSize:16,fontWeight:'600',marginBottom:'2%'}}>Leave a comment</Text>
        <TextInput
            placeholder='How do feel while using this driver service'
            style={{borderColor:'black',borderWidth:1,height:100,width:'85%',alignSelf:'center',paddingBottom:70,padding:10}}
        />
        <Text style={{alignSelf:'flex-end',paddingRight:25}}>0/300</Text>
        <TouchableOpacity onPress={onPressHandler}>
        <Text style={{alignSelf:'flex-end',paddingRight:25,color:'blue'}}>Done</Text>
        </TouchableOpacity>
    </View>
    </View>
    </View>
    </View>
  )
}

export default FeedBack

const styles = StyleSheet.create({})