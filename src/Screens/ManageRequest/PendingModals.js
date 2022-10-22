import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PendingModals = () => {
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
    <View>
       <Modal
    visible={showWarning}
    onRequestClose={
      () => setshowWarning(false)
    }>
    <SafeAreaView>
    <View style={{alignSelf:'center',justifyContent:'center'}}>
  <Text></Text>
    </View>
    </SafeAreaView>
    </Modal>
    </View>
  )
}

export default PendingModals

const styles = StyleSheet.create({})