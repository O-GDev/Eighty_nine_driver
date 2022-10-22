import * as React from 'react';
import { Text, View, TouchableOpacity,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContainerScreen from './ContainerScreen';
import BottomTabComponent from './BottomTabComponent';
import EditResturant from './EditResturant';
import { Avatar,Title,Caption,paragraph,TouchableRipple,Switch, Drawer, } from 'react-native-paper'
import ManageRequests from './ManageRequest/ManageRequests';
import NearbyDrivers from './NearbyDrivers';
import JohnwalkerScreen from './JohnwalkerScreen';
import Header from './Header';
import TopHeader from './TopHeader';
import Notify from './Notify';

function Cal() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }


function Notification() {
  return (
    <View style={{ }}>
     <View>
     
     <View style={{marginTop:15}}>
     <View style={{marginLeft:'3%',marginBottom:'3%'}}>
        <Text style={{color:'#00000099'}}>Today</Text>
     </View>
    <TouchableOpacity style={{width:'95%',height:100,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/paulismith.png')} style={{}} />
<View style={{paddingLeft:10,justifyContent:'center'}}>
<Text style={{fontFamily:'Inconsolata_500SemiBold',fontWeight:'700',fontSize:15,color:'#000000'}}>Pauli Smith: Declined your request</Text>
<View style={{}}>
  <Text style={{color:'#00000099'}}>6 hours ago</Text>
</View>
</View>
      </View>
     
    </TouchableOpacity>
    </View>

    <View style={{marginTop:15}}>
     <View style={{marginLeft:'3%',marginBottom:'3%'}}>
        <Text style={{color:'#00000099'}}>Last 7 days</Text>
     </View>
    <TouchableOpacity style={{width:'95%',height:100,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/paulismith.png')} style={{}} />
<View style={{paddingLeft:10,justifyContent:'center'}}>
<Text style={{fontFamily:'Inconsolata_500SemiBold',fontWeight:'700',fontSize:15,color:'#000000'}}>Pauli Smith: Declined your request</Text>
<View style={{}}>
  <Text style={{color:'#00000099'}}>4 days ago</Text>
</View>
</View>
      </View>
     
    </TouchableOpacity>
    </View>

    <View style={{marginTop:15}}>
     <View style={{marginLeft:'3%',marginBottom:'3%'}}>
        <Text style={{color:'#00000099'}}>Last 30 days</Text>
     </View>
    <TouchableOpacity style={{width:'95%',height:100,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../assets/paulismith.png')} style={{}} />
<View style={{paddingLeft:10,justifyContent:'center'}}>
<Text style={{fontFamily:'Inconsolata_500SemiBold',fontWeight:'700',fontSize:15,color:'#000000'}}>Pauli Smith: Declined your request</Text>
<View style={{}}>
  <Text style={{color:'#00000099'}}>14 days ago</Text>
</View>
</View>
      </View>
     
    </TouchableOpacity>
    </View>
     </View>
    </View>
  );
} 

const Tab = createBottomTabNavigator();

export default function BottomTab({navigation}) {
//   setTimeout(() => {
//     navigation.navigate('Homes')
// }, 3000);
  return (
      <Tab.Navigator 
       options={{
      //   tabBarIcon: ({ focused, horizontal, tintColor }) => {
      //   const { routeName } = navigation.state;
      //   if (routeName === 'Home') {
      //      (
      //       <Image
      //         source={ require('../../assets/BottomNavHome.png') }
      //         style={{ width: 20, height: 20, }} />
      //     );
      //   } else if(routeName === 'Notification') {
      //      (
      //       <Image
      //         source={ require('../../assets/notification.png') }
      //         style={{ width: 20, height: 20 }} />
      //     );
      //   } else if (routeName === 'EditResturant') {
      //     (
      //       <Image
      //         source={ require('../../assets/cal.png') }
      //         style={{ width: 20, height: 20 }} />
      //     );
      //   }else if (routeName === 'Managerequest'){
      //     (
      //       <Image
      //         source={ require('../../assets/profile.png') }
      //         style={{ width: 20, height: 20 }} />
      //     );
      //   }else{
      //     return null
      //   }
   //   },
      tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
      }}
       >
      <Tab.Screen name='Homes' component={ContainerScreen} options={{headerShown: false,tabBarIcon:({focused}) =>(
        <Image source={require('../../assets/BottomNavHome.png')} style={{width:40,height:40,tintColor: focused ? '#111AE5' : '#000000'}}  />
      ) ,tabBarShowLabel: false}}/>
      <Tab.Screen name='Notification' component={Notification} options={{headerShown: true,tabBarIcon:({focused}) =>(
        <Image source={require('../../assets/notification.png')} style={{width:35,height:35,tintColor: focused ? '#111AE5' : '#000000'}}  />
      ) ,tabBarShowLabel: false}}  />
      <Tab.Screen name='Managerequest' component={TopHeader} options={{headerShown: false,tabBarIcon:({focused}) =>(
        <Image source={require('../../assets/cal.png')} style={{width:40,height:40,tintColor: focused ? '#111AE5' : '#000000'}}  />
      ) ,tabBarShowLabel: false}}  />
      <Tab.Screen name='EditResturant' component={EditResturant} options={{headerShown: false,tabBarIcon:({focused}) =>(
        <Image source={require('../../assets/profile.png')} style={{width:40,height:40,tintColor: focused ? '#111AE5' : '#000000'}}  />
      )  ,tabBarShowLabel: false}}  />
      </Tab.Navigator>

  );
}