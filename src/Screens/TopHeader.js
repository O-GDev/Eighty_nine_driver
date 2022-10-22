import { StyleSheet, Text, View,TouchableOpacity,Image,SafeAreaView } from 'react-native'
import React from 'react'
import ManageRequests from './ManageRequest/ManageRequests'
import { useNavigation } from '@react-navigation/native'

const TopHeader = () => {
  const navigation = useNavigation()
  return (
  
    <SafeAreaView style={{flex:1}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',margin:'1%',backgroundColor:'white',alignContent:'center',height:30}}>
      <Text style={{marginRight:'1.5%'}}>  </Text>
    <Text style={{fontSize:18,fontWeight:'bold'}}>Manage Requests</Text>
   <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
   <Text style={{marginRight:'1.5%'}}><Image source={require('../../assets/notification.png')} style={{width:25,height:25,marginBottom:'1%'}}/></Text>
   </TouchableOpacity>  
     </View>
      <ManageRequests/>
    </SafeAreaView>
    
  )
}

export default TopHeader

const styles = StyleSheet.create({})