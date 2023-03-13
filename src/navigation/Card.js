import React from "react";
import { View,Image,Text,TouchableOpacity,StatusBar } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register6 from './Register6';
import Register5 from './Register5';
import Register4 from './Register4';
import Register3 from './Register3';

const Tab=createBottomTabNavigator();

const Card=()=>{
    
    return(
     
        <View style={{backgroundColor:'#F2F2F2'}}>
              <StatusBar  
                    backgroundColor = "#fff"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                /> 
            <View style={{alignItems:'center',marginTop:30,justifyContent:'center'}}>
                <Image style={{width:315,height:200}} source={require('../images/card.png')}></Image>
            </View>
  
            <View style={{flexDirection:'row',marginTop:41,alignItems:'center',justifyContent:'center'}}>
           <View style={{width:100,height:122,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
             <Image source={require('../images/card1.png')}></Image>
             <Text style={{marginTop:13,fontWeight:'700',color:'#262B2E'}}>Cancel</Text>
             <Text style={{fontWeight:'700',color:'#262B2E'}}>Card</Text>
             </View>
             <View style={{width:100,height:122,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
            <Image source={require('../images/card2.png')}></Image>
            <Text style={{marginTop:13,fontWeight:'700',color:'#262B2E'}}>Update</Text>
             <Text style={{fontWeight:'700',color:'#262B2E'}}>Limits</Text>
            </View>
            <View style={{width:100,height:122,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
            <Image source={require('../images/card3.png')}></Image>
            <Text style={{marginTop:13,fontWeight:'700',color:'#262B2E'}}>Manage</Text>
             <Text style={{fontWeight:'700',color:'#262B2E'}}>Pin</Text>
            </View>

    
            </View>
            <TouchableOpacity>
            <View style={{alignItems:'center',marginTop:140,marginBottom:60}}>
              <Image source={require('../images/buttonapplewallet.png')}></Image>
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
export default Card;