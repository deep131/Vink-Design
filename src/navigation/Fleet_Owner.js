import React from "react";
import { View,Image,Text,StatusBar } from "react-native";
import Register6 from './Register6';
import Register5 from './Register5';
import Register4 from './Register4';
import Register3 from './Register3';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from "react-native-gesture-handler";
import {useNavigation} from '@react-navigation/native';
const Tab=createBottomTabNavigator();
const Fleet_Owner=()=>{
    const navigation = useNavigation();
    const gotocard = () => {
      navigation.navigate('Card');
    };
    const payments = () => {
      navigation.navigate('Driver_Monitor');
    };
    return(
        <View>
              <StatusBar  
                    backgroundColor = "#fff"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                /> 
            <View>
                <TouchableOpacity >
            <View style={{alignItems:'center',marginTop:10,}} >
            <Image style={{alignItems:'center',height:146,width:325}} source={require('../images/imageofdevices.png')}></Image>
        </View></TouchableOpacity>
   
        <View  style={{flexDirection:'row',marginTop:15,alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity onPress={payments}>
       <Image style={{alignItems:'center',height:130,width:140 }} source={require('../images/fleet1.png')}></Image>   
       </TouchableOpacity>
        <Image style={{alignItems:'center',height:130,width:140,marginLeft:33 }} source={require('../images/fleet2.png')}></Image>
        </View>
      
        <View style={{flexDirection:'row',marginTop:15,justifyContent:'center'}}>
        <Image style={{alignItems:'center',height:130,width:140 }} source={require('../images/fleet3.png')}></Image>
        <Image style={{alignItems:'center',height:130,width:140,marginLeft:33}} source={require('../images/fleet4.png')}></Image>
        </View>
        <View style={{flexDirection:'row',marginTop:15,justifyContent:'center'}}>
        <Image style={{alignItems:'center',height:130,width:140 }} source={require('../images/fleet5.png')}></Image>
        <Image style={{alignItems:'center',height:130,width:140,marginBottom:50 ,marginLeft:33}} source={require('../images/fleet6.png')}></Image>
        </View>
            </View>
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

export default Fleet_Owner;