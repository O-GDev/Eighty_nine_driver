import { SafeAreaView, StatusBar, StyleSheet, Text, View, Image, ScrollView,Modal,Dimensions, TouchableOpacity } from 'react-native'
import React,{ useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Avatar,Title,Caption,paragraph,TouchableRipple,Switch, Drawer, } from 'react-native-paper'
import TopTabBar from '../TobTabBar'
import { useNavigation } from '@react-navigation/native';
import TopHeader from '../TopHeader';
import Notify from '../Notify';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator(

);

const MyTabBar = (props) =>{
  <View>
     <TouchableOpacity onPress={()=> {props.navigation.navigate('Home')}}  
        style={{paddingTop:4}}
         >
           
        </TouchableOpacity>
  </View>
}


const {width, height} = Dimensions.get('window');

//Requests
const Requests = () =>(
  
  <SafeAreaView>
  
    <StatusBar/>
    <ScrollView style={{height:height,}}>
    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:90,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../../assets/Jhonwalker.png')} style={{}} />
<View style={{paddingLeft:10,width:'80%'}}>
<Title>Jhon walker</Title>
<View style={{paddingBottom:20,justifyContent:'space-evenly',paddingRight:10}}>
  <Text style={{color:'blue',backgroundColor:'#e8e8e8',textAlign:'center',borderRadius:10,alignSelf:'flex-end',paddingLeft:10,paddingRight:10}}>En route</Text>
  </View>
</View>
      </View>
    
    
    </View>
    </View>

    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:90,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../../assets/paulismith.png')} style={{}} />
<View style={{paddingLeft:10,width:'80%'}}>
<Title>Pauli Smith</Title>
<View style={{paddingBottom:20,justifyContent:'space-evenly',paddingRight:10}}>
  <Text style={{color:'blue',backgroundColor:'#e8e8e8',textAlign:'center',borderRadius:10,alignSelf:'flex-end',paddingLeft:10,paddingRight:10}}>En route</Text>
  </View>
</View>
      </View>
    
    
    </View>
    </View>

    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:90,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../../assets/JamesKhan.png')} style={{}} />
<View style={{paddingLeft:10,width:'80%'}}>
<Title>James Khan</Title>
<View style={{paddingBottom:20,justifyContent:'space-evenly',paddingRight:10}}>
  <Text style={{color:'blue',backgroundColor:'#e8e8e8',textAlign:'center',borderRadius:10,alignSelf:'flex-end',paddingLeft:10,paddingRight:10}}>En route</Text>
  </View>
</View>
      </View>
    
    
    </View>
    </View>
    </ScrollView>
  </SafeAreaView>
    );


    //Active
    const Active = () =>
    {
      const[name,setName]=useState('');
    const[submitted,setSubmitted]=useState(false)
    const[showWarning,setshowWarning]=useState(false)
    const onPressResturantHandler = () => {
        if (name.length > 3) {
          setSubmitted(!submitted);
        }else{
          setshowWarning(true)
        }
      }
      return (
          
      <SafeAreaView>
      <Modal
     visible={showWarning}
    transparent
    onRequestClose={
      () => setshowWarning(false)
    }>
        <SafeAreaView>
        <StatusBar/>
        <View style={{justifyContent:'center',alignSelf:'center',height:height}}>
        <View style={{backgroundColor:'white',width:width-20,height:height-450,alignSelf:'center',justifyContent:'center'}}>
            <Text style={{alignSelf:'center',fontFamily:'Inconsolata_600SemiBold',fontSize:18}}>By clicking confirm you agreed that</Text>
            <Text style={{alignSelf:'center',fontFamily:'Inconsolata_600SemiBold',fontSize:18}}>Jhon walker has picked up the food</Text>
            <View style={{width:'90%',alignSelf:'center',paddingTop:20}}>
              <View style={{borderWidth:1,borderColor:'black'}}/>
            </View>
            <Text style={{alignSelf:'center',fontFamily:'Inconsolata_600SemiBold',paddingTop:20,fontSize:18}}>Are you sure you want to confirm?</Text>
            <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
            <Text style={{padding:20,color:'#111AE5',fontFamily:'Inconsolata_600SemiBold',fontSize:17}}>Yes, Confirm</Text>
           
          </View>
          </View>
          
        </View>
        </SafeAreaView>
      </Modal>
    
        <StatusBar/>
        <ScrollView>
        <View style={{marginTop:15}}>
    <View style={{width:'95%',height:90,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../../assets/Jhonwalker.png')} style={{}} />
<View style={{paddingLeft:10,width:'80%'}}>
<Title>Jhon walker</Title>
<View style={{paddingBottom:20,justifyContent:'flex-end',paddingRight:10}}>
  <TouchableOpacity onPress={onPressResturantHandler}>
  <Text style={{color:'white',backgroundColor:'blue',textAlign:'center',borderRadius:5,alignSelf:'flex-end',paddingLeft:15,paddingRight:15}}>Confirm</Text>
  </TouchableOpacity>
  </View>
</View>
      </View>
    
    
    </View>
    </View>

    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:90,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../../assets/paulismith.png')} style={{}} />
<View style={{paddingLeft:10,width:'80%'}}>
<Title>Pauli Smith</Title>
<View style={{paddingBottom:20,justifyContent:'flex-end',paddingRight:10}}>
<TouchableOpacity onPress={onPressResturantHandler}>
  <Text style={{color:'white',backgroundColor:'blue',textAlign:'center',borderRadius:5,alignSelf:'flex-end',paddingLeft:15,paddingRight:15}}>Confirm</Text>
  </TouchableOpacity>
  </View>
</View>
      </View>
    
    
    </View>
    </View>

    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:90,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../../assets/JamesKhan.png')} style={{}} />
<View style={{paddingLeft:10,width:'80%'}}>
<Title>James Khan</Title>
<View style={{paddingBottom:20,justifyContent:'flex-end',paddingRight:10}}>
<TouchableOpacity onPress={onPressResturantHandler}>
  <Text style={{color:'white',backgroundColor:'blue',textAlign:'center',borderRadius:5,alignSelf:'flex-end',paddingLeft:15,paddingRight:15}}>Confirm</Text>
  </TouchableOpacity>
  </View>
</View>
      </View>
    
    
    </View>
    </View>

    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:90,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../../assets/DeneilTorry.png')} style={{}} />
<View style={{paddingLeft:10,width:'80%'}}>
<Title>Deneil Torry</Title>
<View style={{paddingBottom:20,justifyContent:'flex-end',paddingRight:10}}>
<TouchableOpacity onPress={onPressResturantHandler}>
  <Text style={{color:'white',backgroundColor:'blue',textAlign:'center',borderRadius:5,alignSelf:'flex-end',paddingLeft:15,paddingRight:15}}>Confirm</Text>
  </TouchableOpacity>
   </View>
</View>
      </View>
    
    
    </View>
    </View>

    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:90,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../../assets/GrannVenn.png')} style={{}} />
<View style={{paddingLeft:10,width:'80%'}}>
<Title>Grann Venn</Title>
<View style={{paddingBottom:20,justifyContent:'flex-end',paddingRight:10}}>
<TouchableOpacity onPress={onPressResturantHandler}>
  <Text style={{color:'white',backgroundColor:'blue',textAlign:'center',borderRadius:5,alignSelf:'flex-end',paddingLeft:15,paddingRight:15}}>Confirm</Text>
  </TouchableOpacity>
  </View>
</View>
      </View>
    
    
    </View>
    </View>

    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:90,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../../assets/DrollSwift.png')} style={{}} />
<View style={{paddingLeft:10,width:'80%'}}>
<Title>Droll Swift</Title>
<View style={{paddingBottom:20,justifyContent:'flex-end',paddingRight:10}}>
<TouchableOpacity onPress={onPressResturantHandler}>
  <Text style={{color:'white',backgroundColor:'blue',textAlign:'center',borderRadius:5,alignSelf:'flex-end',paddingLeft:15,paddingRight:15}}>Confirm</Text>
  </TouchableOpacity>
  </View>
</View>
      </View>
    
    
    </View>
    </View>

    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:90,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../../assets/MarkKnot.png')} style={{}} />
<View style={{paddingLeft:10,width:'80%'}}>
<Title>Mark Knot</Title>
<View style={{paddingBottom:20,justifyContent:'flex-end',paddingRight:10}}>
<TouchableOpacity onPress={onPressResturantHandler}>
  <Text style={{color:'white',backgroundColor:'blue',textAlign:'center',borderRadius:5,alignSelf:'flex-end',paddingLeft:15,paddingRight:15}}>Confirm</Text>
  </TouchableOpacity>
  </View>
</View>
      </View>
    
    
    </View>
    </View>

        </ScrollView>    
      </SafeAreaView>
      )
    };


    //Declined
    const Declined = () =>(
      <SafeAreaView>
        <StatusBar/>
        
        <ScrollView>
    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:90,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../../assets/paulismith.png')} style={{}} />
<View style={{paddingLeft:10,width:'80%'}}>
<Title>Pauli Smith</Title>
<View style={{paddingBottom:20,justifyContent:'flex-end',paddingRight:10}}>
  <Text style={{color:'blue',backgroundColor:'#e8e8e8',textAlign:'center',borderRadius:5,alignSelf:'flex-end',padding:2}}>Declined by driver</Text>
  </View>
</View>
      </View>
    
    
    </View>
    </View>
           </ScrollView>
      </SafeAreaView>
    );
   

    //Completed
    const Completed = () =>{
  const navigation = useNavigation();
      const[name,setName]=useState('');
      const[submitted,setSubmitted]=useState(false)
      const[showWarning,setshowWarning]=useState(false)
      const onPressResturantHandler = () => {
          if (name.length > 3) {
            setSubmitted(!submitted);
          }else{
            setshowWarning(true)
          }
        }
      return(
        <SafeAreaView>
        <StatusBar/>
        <Modal
    visible={showWarning}
    transparent
    onRequestClose={
      () => setshowWarning(false)
    }>
         <SafeAreaView>
        <StatusBar/>
        <View style={{justifyContent:'center',alignSelf:'center',height:height}}>
        <View style={{backgroundColor:'white',width:width-20,height:height-500,alignSelf:'center',justifyContent:'center'}}>
            <Text style={{alignSelf:'center',fontFamily:'Inconsolata_600SemiBold',paddingTop:20,fontSize:18}}>Are you sure your customer has</Text>
            <Text style={{alignSelf:'center',fontFamily:'Inconsolata_600SemiBold',fontSize:18}}>recieved the food</Text>
            <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
           <TouchableOpacity onPress={()=> navigation.navigate('FeedBack')} >
           <Text style={{padding:20,color:'#111AE5',fontFamily:'Inconsolata_600SemiBold',fontSize:17}}>Yes</Text>
           </TouchableOpacity>
          </View>
          </View>
          
        </View>
        </SafeAreaView>
    </Modal>
    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:90,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
  shadowColor:"black",
  shadowRadius: 4.65,
  shadowOffset: {
  height: 1,
  width: 0,
  },
  shadowOpacity: 20,}}>
  <View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
  <Avatar.Image source={require('../../../assets/Jhonwalker.png')} style={{}} />
  <View style={{paddingLeft:10,width:'80%'}}>
  <Title>Jhon walker</Title>
  <View style={{paddingBottom:20,justifyContent:'flex-end',paddingRight:10}}>
  <TouchableOpacity onPress={onPressResturantHandler}>
  <Text style={{color:'blue',backgroundColor:'#e8e8e8',textAlign:'center',borderRadius:5,alignSelf:'flex-end',padding:2,}}>Rate Driver</Text>
  </TouchableOpacity>
  </View>
  </View>
      </View>
    
    
    </View>
    </View>
      </SafeAreaView>
      )
    }
   

    //Delivered
  const Delivered = () =>{
    const[name,setName]=useState('');
    const[submitted,setSubmitted]=useState(false)
    const[showWarning,setshowWarning]=useState(false)
    const onPressResturantHandler = () => {
        if (name.length > 3) {
          setSubmitted(!submitted);
        }else{
          setshowWarning(true)
        }
      }
    return(
      <SafeAreaView>
      <Modal
     visible={showWarning}
    transparent
    onRequestClose={
      () => setshowWarning(false)
    }>
        <SafeAreaView>
        <StatusBar/>
        <View style={{justifyContent:'center',alignSelf:'center',height:height}}>
        <View style={{backgroundColor:'white',width:width-20,height:height-450,alignSelf:'center',justifyContent:'center'}}>
            <Text style={{alignSelf:'center',fontFamily:'Inconsolata_600SemiBold',fontSize:18}}>By clicking confirm you agreed that</Text>
            <Text style={{alignSelf:'center',fontFamily:'Inconsolata_600SemiBold',fontSize:18}}>Jhon walker has delivered the food</Text>
            <View style={{width:'90%',alignSelf:'center',paddingTop:20}}>
              <View style={{borderWidth:1,borderColor:'black'}}/>
            </View>
            <Text style={{alignSelf:'center',fontFamily:'Inconsolata_600SemiBold',paddingTop:20,fontSize:18}}>Are you sure you want to confirm?</Text>
            <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
            <Text style={{padding:20,color:'#111AE5',fontFamily:'Inconsolata_600SemiBold',fontSize:17}}>Yes, Confirm</Text>
           
          </View>
          </View>
          
        </View>
        </SafeAreaView>
      </Modal>
       <StatusBar/>
    <ScrollView style={{height:height,}}>
    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:90,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../../assets/Jhonwalker.png')} style={{}} />
<View style={{paddingLeft:10,width:'80%'}}>
<Title>Jhon walker</Title>
<View style={{paddingBottom:20,justifyContent:'space-evenly',paddingRight:10}}>
<TouchableOpacity onPress={onPressResturantHandler}>
  <Text style={{color:'blue',backgroundColor:'#e8e8e8',textAlign:'center',borderRadius:10,alignSelf:'flex-end',paddingLeft:10,paddingRight:10}}>Confirm delivery</Text>
  </TouchableOpacity>
  </View>
</View>
      </View>
    
    
    </View>
    </View>

    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:90,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../../assets/paulismith.png')} style={{}} />
<View style={{paddingLeft:10,width:'80%'}}>
<Title>Pauli Smith</Title>
<View style={{paddingBottom:20,justifyContent:'space-evenly',paddingRight:10}}>
  <TouchableOpacity onPress={onPressResturantHandler}>
  <Text style={{color:'blue',backgroundColor:'#e8e8e8',textAlign:'center',borderRadius:10,alignSelf:'flex-end',paddingLeft:10,paddingRight:10}}>Confirm delivery</Text>
  </TouchableOpacity>
  </View>
</View>
      </View>
    
    
    </View>
    </View>

    <View style={{marginTop:15}}>
    <View style={{width:'95%',height:90,borderRadius:5,backgroundColor:'white',alignSelf:'center',elevation:2,
shadowColor:"black",
shadowRadius: 4.65,
shadowOffset: {
height: 1,
width: 0,
},
shadowOpacity: 20,}}>
<View style={{marginLeft:'5%',marginTop:'5%',flexDirection:'row'}}>
<Avatar.Image source={require('../../../assets/JamesKhan.png')} style={{}} />
<View style={{paddingLeft:10,width:'80%'}}>
<Title>James Khan</Title>
<View style={{paddingBottom:20,justifyContent:'space-evenly',paddingRight:10}}>
<TouchableOpacity onPress={onPressResturantHandler}>
  <Text style={{color:'blue',backgroundColor:'#e8e8e8',textAlign:'center',borderRadius:10,alignSelf:'flex-end',paddingLeft:10,paddingRight:10}}>Confirm delivery</Text>
  </TouchableOpacity>
  </View>
</View>
      </View>
    
    </View>
    </View>
    </ScrollView>
      </SafeAreaView>
    )
  }
  
    

const ManageRequests = () => {
 
  return (
    
    
    <Tab.Navigator
          screenOptions={{ //use this config
            tabBarScrollEnabled: true,
            // tabBarIndicator: () =>{
            //   <View style={{borderWidth:1}}/>
            // },
            tabBarIndicatorStyle:{

            },
            tabBarStyle: {
             backgroundColor: '#fff',
            },
            tabBarItemStyle: {
              width: 'auto',
              alignItems: 'flex-start',
              // marginTop:50
            },
            tabBarLabelStyle: {
              fontSize: 17,
              fontFamily:'Inconsolata_600SemiBold',
              color: '#000000',
              textTransform: 'capitalize',
            },
          }}
         // sceneContainerStyle={{backgroundColor: '#000'}}
        //  tabBar={props => <TopTabBar {...props} />}
          >
      <Tab.Screen name="Requests" component={Requests} />
      <Tab.Screen name="Declined" component={Declined} />
      <Tab.Screen name="Active" component={Active} />
      <Tab.Screen name="Delivered" component={Delivered} />
      <Tab.Screen name="Completed" component={Completed} />
    </Tab.Navigator>
  )
}

export default ManageRequests

const styles = StyleSheet.create({})