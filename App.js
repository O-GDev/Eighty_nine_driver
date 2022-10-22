import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Screens/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondScreen from './src/Screens/SecondScreen';
import SignupScreen from './src/Screens/SignupScreen';
import OtpScreen from './src/Screens/OtpScreen';
import EmailScreen from './src/Screens/EmailScreen';
import NameScreen from './src/Screens/NameScreen';
import ResturantNameScreen from './src/Screens/ResturantNameScreen';
import SendFoodScreen from './src/Screens/SendFoodScreen';
import NearbyDrivers from './src/Screens/NearbyDrivers';
import JohnwalkerScreen from './src/Screens/JohnwalkerScreen';
import SeemoreScreen from './src/Screens/SeemoreScreen';
import EditResturant from './src/Screens/EditResturant';
import EditLocation from './src/Screens/EditLocation';
import ManageRequests from './src/Screens/ManageRequest/ManageRequests';
import SendFoodHeaderTitles from './src/Component/HeaderTitles';
import BottomTab from './src/Screens/BottomTab';
import SigningupResturantLocation from './src/Screens/SigningupResturantLocation';
import EditResturantName from './src/Screens/EditResturantName';
import EditPhoneNumer from './src/Screens/EditPhoneNumber';
import EditEmail from './src/Screens/EditEmail';
import FeedBack from './src/Screens/screen/FeedBack';
import LoadingScreen from './src/Screens/LoadingScreen';
import Requests from './src/Screens/Requests';
import Notify from './src/Screens/Notify';
import TopHeader from './src/Screens/TopHeader';
import ContainerScreen from './src/Screens/ContainerScreen';
import ColorAnimation from './src/Screens/ColorAnimation';
import SignupNewPage from './src/Screens/SignupNewPage';
import SigninPage from './src/Screens/SigninPage';
import SignInOtp from './src/Screens/SignInOtp'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Home" component={SecondScreen} options={{headerShown: false}} />
       <Stack.Screen name='Signupnew' component={SignupNewPage} options={{headerShown:false}} />
      <Stack.Screen name='Signinpage' component={SigninPage} options={{headerShown:false}} />  
<Stack.Screen name="Sign Up" component={SignupScreen} options={{headerShown: false}} />
<Stack.Screen name="Otp" component={OtpScreen} options={{headerShown: true,headerTitle:'Verify phone',headerBackTitleVisible: false}} />
<Stack.Screen name="Email" component={EmailScreen} options={{headerShown: true,headerTitle:"What's your email address?",headerBackTitleVisible: false}} />
<Stack.Screen name="Name" component={NameScreen} options={{headerShown: true,headerTitle:"What's your name?",headerBackTitleVisible: false}} />
<Stack.Screen name="ResturantName" component={ResturantNameScreen} options={{headerShown: true,headerTitle:"Restaurant name?",headerBackTitleVisible: false}} />
<Stack.Screen name="SendFood" component={SendFoodScreen} options={{headerShown: true,headerTitle:()=><SendFoodHeaderTitles/>,headerBackTitleVisible: false}} />
<Stack.Screen name='SigningupResturantLocation' component={SigningupResturantLocation} options={{headerShown:true,headerTitle:"What's your resturant location",headerBackTitleVisible: false}}/>
<Stack.Screen name="NearbyDrivers" component={NearbyDrivers} options={{headerShown:false,headerBackTitleVisible: false}} />
<Stack.Screen name="JohnwalkerScreen" component={JohnwalkerScreen} options={{headerShown:false,headerBackTitleVisible: false}} />
<Stack.Screen name="SeemoreScreen" component={SeemoreScreen} options={{headerShown: false,headerBackTitleVisible: false}} />
<Stack.Screen name="Searchingdriver" component={SeemoreScreen} options={{headerShown: false,headerBackTitleVisible: false}} />
<Stack.Screen name="BottomTab" component={BottomTab} options={{headerShown: false,headerBackTitleVisible: false}} />
<Stack.Screen name="EditResturantName" component={EditResturantName} options={{headerShown:true,headerTitle:'Resturant name',headerBackTitleVisible: false}}/>
<Stack.Screen name="EditPhoneNumber" component={EditPhoneNumer} options={{headerShown:false,headerBackTitleVisible: false}}/>
<Stack.Screen name="EditEmail" component={EditEmail} options={{headerShown:true,headerTitle:"What's your email address?",headerBackTitleVisible: false}}/>
<Stack.Screen name="EditLocation" component={EditLocation} options={{headerShown:true,headerTitle:"Enter you resturant Location?",headerBackTitleVisible: false}}/>
<Stack.Screen name='FeedBack' component={FeedBack} options={{headerShown:true,headerTitle:'Leave Feedback',headerBackTitleVisible: false}}/>
<Stack.Screen name='Loadingscreen' component={ManageRequests} options={{headerShown:true,headerTitle:'Manage Request',headerBackTitleVisible: false}} />
<Stack.Screen name='fghhh' component={LoadingScreen} options={{headerShown:false,headerTitle:'Manage Request',headerBackTitleVisible: false}} />
<Stack.Screen name='request' component={Requests} options={{headerShown:true,headerTitle:'My Requests',headerBackTitleVisible: false}} />
<Stack.Screen name='Notify' component={Notify} options={{headerShown:true,headerTitle:'Notification',headerBackTitleVisible: false}}/>
<Stack.Screen name='TopHeader' component={TopHeader} options={{headerShown:false,headerTitle:'Notification',headerBackTitleVisible: false}}/>
<Stack.Screen name='ContainerScreen' component={ContainerScreen} options={{headerShown:false,headerTitle:'Notification',headerBackTitleVisible: false}}/>
<Stack.Screen name='SigninOtp' component={SignInOtp} options={{headerShown:true,headerTitle:'Verify Phone'}}/>
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
