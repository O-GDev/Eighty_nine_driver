import { StyleSheet, Text, View,Animated, TouchableOpacity, } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
// import { Easing, set, useCode, } from 'react-native-reanimated'
// import { loop } from 'react-native-reanimated/lib/types/lib/reanimated2/animation/repeat'

const ColorAnimation = () => {
  const [animation,setAnimation] = useState(new Animated.Value(0))
  const animate = Animated.timing (animation,
    {
     toValue : 1,
     duration:3000,
     useNativeDriver:false
   }).start( () => {
    Animated.timing(animation, {
      toValue: 0,
      duration:3000,
      useNativeDriver:false
    }).start( () => Animated.timing(animation, {
      toValue: 2,
      duration:3000,
      useNativeDriver:false
    }).start( () =>{
      Animated.timing(animation, {
        toValue: 3,
        duration:3000,
        useNativeDriver:false
      }).start( () =>{
        Animated.timing(animation, {
          toValue: 4,
          duration:3000,
          useNativeDriver:false
        }).start(  )
      } )
    }))
 })

  const handleAnimation = () =>{
    Animated.sequence(animate,
      {
        // duration: 4000,
          // easing: Easing.inOut(Easing.ease),
          // boomerang: true,
          // autoStart: true,
          iterations: -1
      }
      )
  }
  const textInterpolation = 
  animation.interpolate({
    inputRange: [0,1,2,3,4],
    outputRange:["rgb(255, 255, 255)",
    "rgb(8, 170, 151)",
  "rgb(5, 0, 255)",
  "rgb(1, 81, 15)",
  "rgb(255, 255, 255)"
]
  })

  const animatedStyle ={
    color: textInterpolation,
    
  }
  useEffect( () => {handleAnimation()},[])
  return (
    <View>
      <TouchableOpacity >
    
<Animated.Text style={{...styles.text,...animatedStyle}}>89Driver</Animated.Text> 

      </TouchableOpacity>
    </View>

  )
}

export default ColorAnimation

const styles = StyleSheet.create({
  text:{
    textDecorationLine:'underline',
    // backgroundColor:'red',
    color:'white',
    fontSize:25
    
  }
})