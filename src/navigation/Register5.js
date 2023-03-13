import React from "react";
import { View,Text,Image,TouchableOpacity,StatusBar } from "react-native";
import {useNavigation} from '@react-navigation/native';
const Register5=()=>{
    const navigation = useNavigation();
    const login = () => {
        navigation.navigate('Login');
      };
      const verify = () => {
        navigation.navigate('Register6');
      };
    return(
        <View style={{alignItems:'center',backgroundColor:'white'}}>
              <StatusBar  
                    backgroundColor = "#fff"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                /> 
            <View style={{marginTop:40,alignContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:22,fontWeight:'700',color:'#262B2E',alignContent:'center',alignItems:'center'}}> Upload Your Profile Pic</Text>      
              </View>
              <TouchableOpacity>
              <View style={{height:261,width:261,marginTop:80}}>
                <Image style={{height:261,width:261,alignItems:'center',justifyContent:'center',alignContent:'center'}} source={require('../images/profilephoto.png')}>

                </Image>
              </View>
              </TouchableOpacity>
              <TouchableOpacity 
        style={{
              marginTop: 90,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
             }}
          >
            <TouchableOpacity onPress={verify}>
            <Image 
              style={{
                width: 370,
                height:76,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              source={require('../images/letsgo.png')}
            ></Image></TouchableOpacity>
          </TouchableOpacity >
        <View style={{flexDirection:'row',marginTop:35}} >
        <Text
          style={[
       
            {color: '#262B2E'},
            {fontSize: 16},
                ]}
        >
          Already have an Account?
        </Text>
        <TouchableOpacity onPress={login}>
        <Text
          style={{
       
            fontSize: 16,
            marginLeft: 8,
            fontFamily: 'roboto',
            color: '#5735D4',
            fontWeight: '700',

          }}
        >
          Sign In
        </Text>
        </TouchableOpacity></View>
        </View>
    )
}
export default  Register5;