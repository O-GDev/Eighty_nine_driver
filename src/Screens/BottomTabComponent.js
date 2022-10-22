import { StyleSheet, Text, View, Image, TouchableOpacity,Animated } from 'react-native'
import React, { useState } from 'react'





export function BottomTabComponent(props) {
  const [current, setCurrent] = useState(false)
  const [homeCurrently, setHomeCurrently] = useState(0) 
  // const picture=()=>{
  //   setHomeCurrently(
  //     homeCurrently+1
  //   )
  //   console.log('number of ',homeCurrently )
  // }
  // const pic = homeCurrently < 1 ? <Image source={require('../../assets/cal.png')} style={{tintColor:'blue',width:40,height:40}}/> : <Image source={require('../../assets/cal.png')} style={{width:40,height:40}}/>
  const ManagerequestOnpress = () => {
    props.navigation.navigate('Managerequest')
  }

  return ( 


<View style={{}}>
<View style={{height:60,justifyContent:'center',backgroundColor:'white',elevation:4,}}>
<View style={{height:60,flexDirection:'row',justifyContent:'space-evenly',}}>
        <TouchableOpacity onPress={()=> {props.navigation.navigate('Home')}} style={{marginTop:'3.5%'}} >
            <Image source={require('../../assets/BottomNavHome.png')} style={{width:40,height:40, }}  />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {props.navigation.navigate('Notification')}} style={{marginTop:'4.5%'}}>
            <Image source={require('../../assets/notification.png')} style={{width:35,height:35,}} />
        </TouchableOpacity>
      
      <TouchableOpacity onPress={ManagerequestOnpress} style={{marginTop:'2.5%',}}  >
      
      {/* {pic} */}
      <Image source={require('../../assets/cal.png')} style={{width:40,height:40}} />
                  </TouchableOpacity>
                  
     
        <TouchableOpacity onPress={()=>{props.navigation.navigate('EditResturant')}} style={{marginTop:'3%',color:'blue'}}>
            <Image source={require('../../assets/profile.png')} style={{width:40,height:40}} />
        </TouchableOpacity>
      </View>
    </View>
</View>
  )
}

export default BottomTabComponent

const styles = StyleSheet.create({
  current: {
    tintColor:'blue',
  },
  home:{
    width:40,
    height:40
  }
})
