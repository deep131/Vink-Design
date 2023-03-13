import React ,{useState}from 'react';
import {View, Text, StyleSheet,TouchableOpacity,Image,StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';

const Register7 = () => {
    const [checked, setChecked] = useState(false);
    const options=['java','c','c++']
  
  const navigation = useNavigation();


  const login = () => {
      navigation.navigate('Login');
    };
    const lastpage = () => {
      navigation.navigate('ConfirmRegister');
    };
  return (
    <View style={{backgroundColor: 'white'}}>
          <StatusBar  
                    backgroundColor = "#fff"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                /> 
      <View style={{marginTop: 40, alignItems: 'center'}}>
        <Text style={{fontWeight: '700', fontSize: 22, color: '#262B2E'}}>
          Personal Account
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Text style={{fontWeight: '500', fontSize: 16, color: '#8A8D9F'}}>
          References:
        </Text>
        <Text style={{fontWeight: '500', fontSize: 16, color: '#5735D4'}}>
          NNY-XCF-7WC-230
        </Text>
      </View>
      <View>
        <Text style={[styles.bold]}> Welcome to your Personal Account</Text>
      </View>
      <View style={{marginTop: 10, alignItems: 'center', flexDirection: 'row'}}>
        <Text style={styles.light}>Monthly fee:</Text>
        <Text style={{fontWeight: '400', fontSize: 16, color: '#5735D4'}}>
          R0.00 pm
        </Text>
      </View>

      <View style={{flexDirection:'column',marginTop:10}}>
        <Text style={styles.light}>The pricing estimate for this account is</Text>
        <Text style={styles.light}>based on the features you have chosen and</Text>
        <Text style={styles.light}>the information you have provided. The final </Text>
        <Text style={styles.light}>cost of the account will depend on how</Text>
        <Text style={styles.light}>many transaction you make.</Text>
      </View>
      <View>
        <Text style={styles.bold}>
        Added value for your account
        </Text>
      </View>
   
      
    <TouchableOpacity 
        style={{
              marginTop: 150,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
             }}
          >
                <TouchableOpacity  onPress={lastpage}>
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
        <View style={{flexDirection:'row',marginTop:24,alignItems:'center',justifyContent:'center'}} >
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
         
            color: '#5735D4',
            fontWeight: '700',

          }}
        >
          Sign In
        </Text>
        </TouchableOpacity></View>
      
    </View>
  );
};
const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
      },
  bold: {
    marginTop: 40,
    marginLeft: 30,
    fontSize: 16,
    color: '#262B2E',
    fontWeight: '700',
  },
  light: {
    marginLeft: 30,
    fontSize: 16,
    color: '#8A8D9F',
    fontWeight: '400',
  },
});

export default Register7;
