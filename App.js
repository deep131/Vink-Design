import 'react-native-gesture-handler';
import React from 'react';
import { Image } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/navigation/Login';
import Register from './src/navigation/Register';
import SplashScreen from './src/navigation/SplashScreen';
import PhoneVerification from './src/navigation/PhoneVerification';
import Register2 from './src/navigation/Register2';
import Register3 from './src/navigation/Register3';
import Register4 from './src/navigation/Register4';
import Register5 from './src/navigation/Register5';
import Register6 from './src/navigation/Register6';
import Register7 from './src/navigation/Register7';
import Register8 from './src/navigation/Register8';
import Devices from './src/navigation/Devices';
import DeviceScreen from './src/navigation/DeviceScreen';
import Drivers from './src/navigation/Drivers';
import Driver_Monitor from './src/navigation/Driver_Monitor';
import Financial_Statement from './src/navigation/Financial_Statement';
import Booking from './src/navigation/Booking';
 import Fleet_Owner from './src/navigation/Fleet_Owner';
import Card from './src/navigation/Card';
import Payments from './src/navigation/Payments';
import Dashboard from './src/navigation/Dashboard';
import ConfirmRegister from './src/navigation/ConfirmRegister';
import Login2 from './src/navigation/Login2';
import NewRegister from './src/navigation/NewRegister';
const App = () => {
  const Stack = createStackNavigator();

  const AppNavigator = createStackNavigator(



  )
  return (
    <NavigationContainer>
     
      <Stack.Navigator>
        
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}} />

        <Stack.Screen name="Login" component={Login} options={{title:'Login',headerTitleAlign:'center',headerTitleStyle:{fontSize:22,fontWeight:"700"},}}/>
        <Stack.Screen name="Register" component={Register} options={{title:'Register',headerLeft:false,headerTitleAlign:'center',headerTitleStyle:{fontSize:22,fontWeight:"700"},}}/>   
        <Stack.Screen name="PhoneVerification" component={PhoneVerification} options={{title:'Phone Verification',headerTitleAlign:'center',headerTitleStyle:{fontSize:22,fontWeight:"700"},}}/>
        <Stack.Screen name="Register2" component={Register2} options={{title:'Register',headerTitleAlign:'center',headerTitleStyle:{fontSize:22,fontWeight:"700"}}}></Stack.Screen>
        <Stack.Screen name="Register3" component={Register3} options={{title:'Register',headerTitleAlign:'center',headerTitleStyle:{fontSize:22,fontWeight:"700"}} }></Stack.Screen>
        <Stack.Screen name="Register4" component={Register4} options={{title:'Register',headerTitleAlign:'center',headerTitleStyle:{fontSize:22,fontWeight:"700"}} }></Stack.Screen>
        <Stack.Screen name="Register5" component={Register5} options={{title:'Register',headerTitleAlign:'center',headerTitleStyle:{fontSize:22,fontWeight:"700"}} }></Stack.Screen>
        <Stack.Screen name="Register6" component={Register6} options={{title:'Register',headerTitleAlign:'center',headerTitleStyle:{fontSize:22,fontWeight:"700"}} }></Stack.Screen>
        <Stack.Screen name="Register7" component={Register7} options={{title:'Register',headerTitleAlign:'center',headerTitleStyle:{fontSize:22,fontWeight:"700"}} }></Stack.Screen>
        <Stack.Screen name="ConfirmRegister" component={ConfirmRegister} options={{title:'Register',headerTitleAlign:'center',headerTitleStyle:{fontSize:22,fontWeight:"700"}} }></Stack.Screen>
        <Stack.Screen name="Register8" component={Register8} options={{title:'Register',headerTitleAlign:'center',headerTitleStyle:{fontSize:22,fontWeight:"700"}} }></Stack.Screen>
        <Stack.Screen name="Devices" component={Devices} options={{title:'Devices',headerTitleAlign:'center',headerTitleStyle:{fontSize:22,fontWeight:"700"}} }></Stack.Screen>
        <Stack.Screen name="DeviceScreen" component={DeviceScreen} options={{title:'Devices',headerTitleAlign:'center',headerTitleStyle:{fontSize:22,fontWeight:"700"}} }></Stack.Screen>
        <Stack.Screen name="Drivers" component={Drivers} options={{title:'Driver',headerTitleAlign:'center',headerTitleStyle:{fontSize:22,fontWeight:"700"}} }></Stack.Screen>
        <Stack.Screen name="Driver_Monitor" component={Driver_Monitor} options={{title:'Driver Monitor',headerTitleAlign:'center',headerTitleStyle:{fontSize:22,fontWeight:"700"}} }></Stack.Screen>
        <Stack.Screen name="Financial_Statement" component={Financial_Statement} options={{title:'Financial Statement',headerTitleAlign:'center',headerTitleStyle:{fontSize:22,fontWeight:"700"}} }></Stack.Screen>
        <Stack.Screen name="Booking" component={Booking} options={{title:'Booking',headerTitleAlign:'center',headerTitleStyle:{fontSize:22,fontWeight:"700"}} }></Stack.Screen>
        <Stack.Screen name="Fleet_Owner" component={Fleet_Owner} options={{title:'Fleet Owner',headerTitleAlign:'center',headerTitleStyle:{fontSize:22,fontWeight:"700"}} }></Stack.Screen>
        <Stack.Screen name="Card" component={Card} options={{headerLeft:false,title:'Hello,Deep'} }></Stack.Screen>
       
        <Stack.Screen name="Login2" component={Login2} options={{title:'Login',headerTitleAlign:'center',headerLeft:false,headerTitleStyle:{fontSize:22,fontWeight:"700"},}}/>
        <Stack.Screen name="NewRegister" component={NewRegister} options={{title:'Register',headerLeft:false,headerTitleAlign:'center',headerTitleStyle:{fontSize:22,fontWeight:"700"},}}/>
        <Stack.Screen name="Payments" component={Payments} options={{headerLeft:false,title:'Hello,Deep'} }></Stack.Screen>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerLeft:false,title:'Hello,Deep', headerTitle: () => (
      <Image style={{ width: 20, height: 25 ,marginLeft:300}} source={require("../VinkProject/src/images/bell.png")} />
      
    ),} }>
      
    </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
