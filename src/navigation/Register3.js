import React from 'react';
import {View, Text, Image, TouchableOpacity,StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const Register3 = () => {

    const navigation = useNavigation();

  
    const login = () => {
      navigation.navigate('Login');
    };
      
    const permission = () => {
        navigation.navigate('Register6');
      };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
          <StatusBar  
                    backgroundColor = "#fff"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                /> 
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 30,
      }}
    >
      <Text
        style={{
          fontSize: 22,
          fontWeight: '700',
          alignItems: 'center',
          color: '#262B2E',
        }}
      >
        Permission to access your
      </Text>
    </View>

    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 22,
          fontWeight: '700',
          alignItems: 'center',
          alignContent: 'center',
          color: '#262B2E',
        }}
      >
        camera needed
      </Text>
    </View>
    <View style={{marginTop:30,borderRadius:12,justifyContent:'center',alignItems:'center'}}> 
        <Image style={{height:315,width:311,borderRadius:12}} source={require('../images/face.png')}>

        </Image>
    </View>
    <TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            marginLeft: 20,
            backgroundColor: '#EBE6FE',
            width: 315,
            height: 47,
            borderRadius: 25,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              color: '#5735D4',
              fontSize: 16,
              fontWeight: '500',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
Retake
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{          alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',}}>
          <TouchableOpacity 
        style={{
              marginTop: 12,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
             }}
          >
            <TouchableOpacity  onPress={permission}>
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
          </TouchableOpacity>
        <View style={{flexDirection:'row',marginTop:25}} >
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
    </View>
  )
};

export default Register3;
