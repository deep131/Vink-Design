import React from 'react';
import {View, Text, Image, TouchableOpacity,Pressable,StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const Register2 = () => {

    const navigation = useNavigation();

  
    const login = () => {
      navigation.navigate('Login');
    };
    const takeimage = () => {
        navigation.navigate('Register3');
      };
      const withoutfacial = () => {
        navigation.navigate('Register5');
      };
  return (
    <ScrollView>
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
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            alignItems: 'center',
            alignContent: 'center',
            color: '#8A8D9F',
          }}
        >
          You can complete your application
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
            fontSize: 16,
            fontWeight: '400',
            alignItems: 'center',
            alignContent: 'center',
            color: '#8A8D9F',
          }}
        >
          quickly and easily using your device's
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
            fontSize: 16,
            fontWeight: '400',
            alignItems: 'center',
            alignContent: 'center',
            color: '#8A8D9F',
          }}
        >
          camera for facial verification.
        </Text>
      </View>

      <View
        style={{
          marginTop: 30,
          height: 250,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <Image
          style={{
            height: 260,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
          }}
          source={require('../images/Group.png')}
        ></Image>
      </View>
      <TouchableOpacity onPress={withoutfacial}>
        <View
          style={{
            marginTop: 40,
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
            Without facial verification
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
            <TouchableOpacity onPress={takeimage} >
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
          <View style={{ flexDirection: 'row'}}>
        <Text
          style={[
       
            {color: '#262B2E'},
            {fontSize: 16},
            {marginTop:20 }        ]}
        >
          Already have an Account?
        </Text>
        <Pressable onPress={login}>
        <Text
          style={{
       
            fontSize: 16,
            marginLeft: 8,
            fontFamily: 'roboto',
            color: '#5735D4',
            fontWeight: '700',
            marginTop:20 
          }}
        >
          Sign In
        </Text>
        </Pressable>
      </View>
        </View>
    </View>
    </ScrollView>
  );
};

export default Register2;
