import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Otp from '../Component/Otps/Otp'
import ManageRequests from './ManageRequest/ManageRequests'
import TopHeader from './TopHeader'

const Header = () => {
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center'}}>
        <View style={{flex:1,justifyContent:'center',marginTop:'-50%'}}>
        <TopHeader/>
        </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({})