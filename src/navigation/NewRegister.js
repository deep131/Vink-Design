import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';

import {View, Text, StyleSheet, Pressable, TouchableOpacity,Image,TextInput,StatusBar} from 'react-native';



import Icon from 'react-native-vector-icons/FontAwesome';


const countries = ["Egypt", "Canada", "Australia", "Ireland"]
export const NewRegister = () => {
   const navigation = useNavigation();

   const [input, setInput] = useState('');
   const [passwordVisible, setPasswordVisible] = useState(true);
  // const dashboard = () => {
  //   navigation.navigate('DashBoard', {

  //   });
  // };
  // const recoveryemail = () => {
  //   navigation.navigate('GivePassword', {});
  // };

 
  const register = () => {
    navigation.navigate('Login2');
  };
  const device = () => {
    navigation.navigate('Devices');
  };

  return (
    <View style={styles.container}>
          <StatusBar  
                    backgroundColor = "#fff"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                /> 
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={styles.text_header}>Drivers and Vehicle Details</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={styles.textInput}>
            
          <TextInput placeholder="Phone Number"></TextInput>
        </View>

        <View style={styles.textInput2}>
       
          <TextInput
         
            placeholder="Drivers License"
            style={{flex:1}}

            value={input}
        
          ></TextInput>
        </View>
        <View style={{marginTop:10}}>
            <Text>Upload Vehicle Registration Documents</Text>
        </View>
        <TouchableOpacity>
        <View style={{marginTop:10}}>
            <Image  style={{width:300,height:45,borderRadius:25,alignContent:'center',alignItems:'center',justifyContent:'center'}} source={require('../images/uploaddocs.png')}></Image>
        </View>
        </TouchableOpacity>
        <View>
      
        </View>
     



          <TouchableOpacity   style={{marginTop:25,width:314,height:50,alignContent:'center',alignItems:'center',justifyContent:'center'}} >
           
        
                <Image style={{width:354,height:90,alignContent:'center',alignItems:'center',justifyContent:'center'}} source={require('../images/letsgo.png')} >
           
                </Image>
             
  
          </TouchableOpacity>
                 

       
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text
          style={[
            {marginTop: 8},
            {color: '#262B2E'},
            {fontSize: 16},
            {marginLeft: 70},
          ]}
        >
       Already have an account?
        </Text>
        <Pressable onPress={register}>
        <Text
          style={{
            marginTop: 8,
            fontSize: 16,
            marginLeft: 8,
            fontFamily: 'roboto',
            color: '#5735D4',
            fontWeight: '700',
          }}
        >
      Sign In
        </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  text_header: {
    color: '#262B2E',
    fontWeight: '700',
    fontSize: 22,
    marginTop: 60,
    alignItems: 'center',
  },
  logo: {
    color: '#FFFAED',
    fontSize: 16,
    height: 100,
    width: 19,
    borderRadius: 20,
  },
  text_footer: {
    marginTop: 10,
    color: '#05375a',
    fontSize: 20,
  },


  textInput: {
    backgroundColor: '#F4F5F7',
    width: 314,
    paddingLeft: 20,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 30,
    borderRadius: 25,
  },
  textInput2: {

    flexDirection: 'row',
    backgroundColor: '#F4F5F7',
    width: 314,
    paddingLeft: 20,
   
    alignContent: 'center',
    marginTop: 10,
    borderRadius: 25,
  },

  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  btncontainer: {
    backgroundColor: 'black',
    width: 314,
    height: 51,
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 30,
  },
  
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },


  shadowProp: {  
    shadowOffset: {width: -2, height: 4},  
    shadowColor: 'blue',  
    shadowOpacity: 50,  
    shadowRadius: 3,  
  },

 
});
export default NewRegister;
