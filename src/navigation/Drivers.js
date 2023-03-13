import React from "react";
import { View,Image ,StatusBar} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register6 from './Register6'
import Register5 from './Register5'
import Register4 from './Register4'
import Register3 from './Register3'
import DeviceScreen from './DeviceScreen';
import {useNavigation} from '@react-navigation/native';
const Tab=createBottomTabNavigator();
const Drivers=()=>{
    const navigation = useNavigation();
    const driver_monitor = () => {
      navigation.navigate('Driver_Monitor');
    };
    const finicial_state = () => {
        navigation.navigate('Financial_Statement');
      };
      const booking = () => {
        navigation.navigate('Booking');
      };

      

    return(
        
        <View style={{backgroundColor:'#F2F2F2',marginTop:40} }>
          <StatusBar  
                    backgroundColor = "#fff"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                />  
            <View style={{alignItems:'center'}}>
            <Image style={{alignItems:'center',height:146,width:325}} source={require('../images/imageofdevices.png')}></Image>
            </View>
       
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={driver_monitor}>
            <View style={{backgroundColor:'#F2F2F2',marginLeft:20}}>
            <Image style={{alignItems:'center'}} source={require('../images/Driver_Monitor.png')}></Image>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={finicial_state}>
            <View style={{backgroundColor:'#F2F2F2',marginRight:20}}>
            <Image style={{alignItems:'center',justifyContent:'center'}} source={require('../images/Financial.png')}></Image>
            </View>
            </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={booking}>
            <View style={{backgroundColor:'#F2F2F2',marginBottom:40}}>
            <Image style={{alignItems:'center'}} source={require('../images/Booking.png')}></Image>
            </View>
            </TouchableOpacity>

            <Tab.Navigator>
    
    <Tab.Screen name='        ' component={Register3} options={{
 tabBarIcon: ({focused, horizontal, tintColor}) => (
    <Image
      fadeDuration={0}
      style={{width: 22, height: 22}}
      source={require('../images/homeicon.png')}
    />
  ),}}/>
    <Tab.Screen name='     ' component={Register6} options={{
 tabBarIcon: ({focused, horizontal, tintColor}) => (

    <Image
      fadeDuration={0}
      style={{width: 26, height: 23}}
      source={require('../images/infoicon.png')}
    />
  ),}}/ >
    <Tab.Screen name='    ' component={Register5} options={{
 tabBarIcon: ({focused}) => (

    <Image
      fadeDuration={0}
      style={{width: 56, height: 56,marginBottom:40}}
      source={require('../images/add.png')}
    />
  ),

  }}/>
    <Tab.Screen name='   ' component={Register4} options={{
 tabBarIcon: ({focused, horizontal, tintColor}) => (

    <Image
      fadeDuration={0}
      style={{width: 24, height: 22}}
      source={require('../images/msgicon.png')}
    />
  ),}}/>
    <Tab.Screen name='  ' component={Register3} options={{
 tabBarIcon: ({focused, horizontal, tintColor}) => (

    <Image
      fadeDuration={0}
      style={{width: 20, height: 24}}
      source={require('../images/user.png')}
    />
  ),}}/>
</Tab.Navigator>
        </View>

    )
}

export default Drivers
