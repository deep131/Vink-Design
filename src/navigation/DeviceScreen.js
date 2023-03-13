import React from "react";
import { View,Image ,StatusBar} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {useNavigation} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab=createBottomTabNavigator();
const DeviceScreen=()=>{
    const navigation = useNavigation();

  
    const drivers = () => {
      navigation.navigate('Drivers');
    };
    const fleet = () => {
        navigation.navigate('Fleet_Owner');
      };
      
      
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
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
            <TouchableOpacity onPress={drivers}>
            <View style={{backgroundColor:'#FFFFFF',marginLeft:20,borderRadius:16,shadowColor:'blue'}}>
            <Image style={{alignItems:'center',height:147,width:141}} source={require('../images/Driver.png')}></Image>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={fleet}>
            <View style={{backgroundColor:'#FFFFFF',marginRight:20}}>
            <Image style={{alignItems:'center',height:147,width:141 }} source={require('../images/FleetOwner.png')}></Image>
            </View></TouchableOpacity>
            </View>
        </View>
    )
}

export default DeviceScreen
