import  React, { useState } from 'react';
  import {useNavigation} from '@react-navigation/native';
import {View, StatusBar,Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput,Pressable, Modal, VirtualizedList, Animated, Dimensions} from 'react-native';


function ConfirmRegister (props) {
    const navigation = useNavigation();
    const congrats = () => {
      navigation.navigate('Register8');
    };
      
  const login = () => {
    navigation.navigate('Login');
  };
return(
    <View style={{backgroundColor:'white'}}>
        <ScrollView>
        <View
        style={{
            marginTop:59,
          flex: 1,
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={styles.text_header}>Confirm a few Personal</Text>
        <Text style={styles.text_header2}>details</Text>
      </View>
      <View style={{marginTop:30}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '700',
            color: '#262B2E',
            marginLeft: 20,
          }}
        >
          Account types Selection
        </Text>
        <View style={{backgroundColor:'black',borderRadius:10}} >
    
        </View>
      </View>
      <View style={{marginTop:30}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '700',
            color: '#262B2E',
            marginLeft: 20,
          }}
        >
      Personal Information
        </Text>
      </View>
      <View style={{alignContent:'center',alignItems:'center',marginTop:15}}>
      <TextInput placeholder='Your Identity number' color='#8A8D9F'style={{backgroundColor:'#F4F5F7',fontSize:16,borderRadius:25,width:314,height:49 ,paddingLeft:20 }}></TextInput>
      </View>
      <View style={{alignContent:'center',alignItems:'center',marginTop:15}}>
      <TextInput placeholder='Your Passport Number' color='#8A8D9F'style={{backgroundColor:'#F4F5F7',fontSize:16,borderRadius:25,width:314,height:49 ,paddingLeft:20 }}></TextInput>
      </View>
      <View style={{alignContent:'center',alignItems:'center',marginTop:15}}>
      <TextInput placeholder='First name' color='#8A8D9F'style={{backgroundColor:'#F4F5F7',fontSize:16,borderRadius:25,width:314,height:49 ,paddingLeft:20 }}></TextInput>
      </View>
      <View style={{alignContent:'center',alignItems:'center',marginTop:15}}>
      <TextInput placeholder='Last name' color='#8A8D9F'style={{backgroundColor:'#F4F5F7',fontSize:16,borderRadius:25,width:314,height:49 ,paddingLeft:20 }}></TextInput>
      </View>
      <View style={{alignContent:'center',alignItems:'center',marginTop:15}}>
      <TextInput placeholder='Email' color='#8A8D9F'style={{backgroundColor:'#F4F5F7',fontSize:16,borderRadius:25,width:314,height:49 ,paddingLeft:20 }}></TextInput>
      </View>
      <View style={{alignContent:'center',alignItems:'center',marginTop:15}}>
      <TextInput placeholder='Phone Number' color='#8A8D9F'style={{backgroundColor:'#F4F5F7',fontSize:16,borderRadius:25,width:314,height:49 ,paddingLeft:20 }}></TextInput>
      </View>
      
      <TouchableOpacity  onPress={congrats}  style={{marginTop:30,width:360,height:50,alignContent:'center',alignItems:'center',justifyContent:'center'}} >
           
        
           <Image style={{width:354,height:90,alignContent:'center',alignItems:'center',justifyContent:'center'}} source={require('../images/letsgo.png')} >
      
           </Image>
        

     </TouchableOpacity>
     <View style={{flex: 1, flexDirection: 'row',marginBottom:10}}>
        <Text
          style={[
       
            {color: '#262B2E'},
            {fontSize: 16},
            {marginLeft: 70},
          ]}
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
          }}
        >
          Sign In
        </Text>
        </Pressable>
      </View>

    </ScrollView>
    </View>
)



};
const styles = StyleSheet.create({
    backgroud:{
      position:'absolute'
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    wrap:{
      flex:1,
      flexDirection:'row',
  padding:20,
  margin:20,
  
  backgroundColor:'white'
    },
    modalContainer:{
      width:'80%',
      backgroundColor:'white',
      paddingHorizontal:20,paddingVertical:30
    },
    text_header: {
      color: '#262B2E',
      fontWeight: '700',
      fontSize: 22,
  
      alignItems: 'center',
    },
    text_header2: {
      color: '#262B2E',
      fontWeight: '700',
      fontSize: 22,
  
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
      backgroundColor: '#F4F5F7',
      width: 314,
      paddingLeft: 20,
      justifyContent: 'center',
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
  
    btn: {
      height: 50,
      alignItems: 'center',
      fontWeight: 'bold',
      justifyContent: 'center',
    },
  
    shadowProp: {
      shadowOffset: {width: -2, height: 4},
      shadowColor: 'blue',
      shadowOpacity: 50,
      shadowRadius: 3,
    },
  });
export default ConfirmRegister;
