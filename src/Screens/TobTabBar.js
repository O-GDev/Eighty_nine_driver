import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Image, SafeAreaView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TobTabBar = (props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={{alignSelf:'center',marginLeft:'2%'}}>           </Text>
    <Text style={{alignSelf:'center',margin:15,fontWeight:'bold',fontSize:17,marginLeft:'5%'}}>Manage Request</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
    {/* <Text style={{alignSelf:'center',marginRight:'5%',marginTop:'10%'}}><Image source={require('../../assets/notification.png')} style={{width:30,height:30}}/></Text> */}
    </TouchableOpacity> 
    </View>
    <View style={{borderWidth:0.5,backgroundColor:'black',width:'100%'}}/>
    <ScrollView horizontal={true}>
        <View style={{ flexDirection:'row', justifyContent:'space-around',width:'100%',alignContent:'center'}}>
        <TouchableOpacity style={{height:30,padding:5,marginLeft:15,}} onPress={() => props.navigation.navigate('Requests')}><Text>Requests</Text></TouchableOpacity>
        <TouchableOpacity style={{height:30,padding:5,marginLeft:15,}} onPress={() => props.navigation.navigate('Declined')}><Text>Declined</Text></TouchableOpacity>
        <TouchableOpacity style={{height:30,padding:5,marginLeft:15,}} onPress={() => props.navigation.navigate('Active')}><Text>Active</Text></TouchableOpacity>
        <TouchableOpacity style={{height:30,padding:5,marginLeft:15,}} onPress={() => props.navigation.navigate('Delivered')}><Text>Delivered</Text></TouchableOpacity>
        <TouchableOpacity style={{height:30,padding:5,marginLeft:15,}} onPress={() => props.navigation.navigate('Completed')}><Text>Completed</Text></TouchableOpacity>
        </View>
    </ScrollView>
    <View style={{borderWidth:0.5,backgroundColor:'black',width:'100%'}}/>
    </SafeAreaView>
  )
}

export default TobTabBar

const styles = StyleSheet.create({})