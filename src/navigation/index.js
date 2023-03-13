import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from './SplashScreen';
import Login from './Login'
import Register from './Register';
import PhoneVerification from './PhoneVerification';
import Register2 from './Register2';
import Register3 from './Register3';
import Register4 from './Register4';
 import Register5 from './Register5';
 import Register6 from './Register6';
 import Register7 from './Register7';
 import Register8 from './Register8';
 import Devices from './Devices';

const AppNavContainer = () => {
    return (
      <NavigationContainer>
        <SplashScreen />
        <Login/>
        <Register/>
        <PhoneVerification/>
    <Register2/>
    <Register3/>
    <Register4/>
    <Register5/>
    <Register6/>
    <Register7/>
    <Register8/>
    <Devices/>
      </NavigationContainer>
    );
  };
  
  export default AppNavContainer;