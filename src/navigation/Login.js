import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, Text, StyleSheet, Pressable, TouchableOpacity,Image,TextInput,StatusBar} from 'react-native';

export const Login = () => {
  const [datas  ,setData]=useState("");
  const getData=()=>{
axios.get("http://api.adviceslip.com/advice/")
.then((response)=>{
  setData(response.data.datas)

})
  }
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
    navigation.navigate('Register');
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
        <Text style={styles.text_header}>Welcome back</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={styles.textInput}>
          <TextInput placeholder="Username"></TextInput>
        </View>

        <View style={styles.textInput2}>
       
          <TextInput
            secureTextEntry={passwordVisible} 
            placeholder="Password"
            style={{flex:1}}

       
        
          ></TextInput>
        </View>
        <View>
          <Pressable >
            <View>
              <Text
                style={[
                  {color: '#262B2E'},
                  {alignItems: 'center'},
                  {fontSize: 14},
                  {marginLeft: 170},
                  {marginTop: 10},
                ]}
              >
                Forgot Your Password ?
              </Text>
            </View>
          </Pressable>
        </View>
     



          <TouchableOpacity onPress={getData}  style={{marginTop:30,width:314,height:50,alignContent:'center',alignItems:'center',justifyContent:'center'}} >
           
        
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
          Don't have an Account?
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
          Register
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
export default Login;
