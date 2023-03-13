import React from "react";
import {useNavigation} from '@react-navigation/native';
import { Text,TextInput,View,TouchableOpacity,Image,StatusBar  } from "react-native";


const PhoneVerification=()=>{
    const navigation = useNavigation();
    const click=()=>{
        navigation.navigate('Register2');
    }
    return(
        <View style={{backgroundColor:'white',flex:1}}>
                <StatusBar  
                    backgroundColor = "#fff"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                /> 
        <View style={{marginTop:56,alignItems:'center',}}>
            <Text style={{fontSize:24,fontWeight:'700',color:'#5735D4'}}>OTP Verification</Text>
            <Text style={{fontSize:16,fontWeight:'400',color:'#262B2E',marginTop:13}}>An authentication code has been sent to</Text>
            <Text style={{fontSize:16,fontWeight:'400',color:'#7853FF',marginTop:5}}>+91 9898989898</Text>
       <View style={{flex:1,flexDirection:'row',marginTop:18}}>
        <View  style={{backgroundColor:'#5735D4',borderRadius:15,height:66,width:66,justifyContent:'center',alignItems:'center',}}>
            <TextInput  keyboardType="numeric" style={{color:'white',alignContent:'center',fontSize:24,fontWeight:"700",justifyContent:'center',alignItems:'center'}}></TextInput>
           
            </View>
            <View  style={{backgroundColor:'#5735D4',borderRadius:15,height:66,marginLeft:11,width:66,justifyContent:'center',alignItems:'center',}}>
            <TextInput  keyboardType="numeric" style={{color:'white',alignContent:'center',fontSize:24,fontWeight:"700",justifyContent:'center',alignItems:'center'}}></TextInput>
           
            </View>
            <View  style={{backgroundColor:'#5735D4',borderRadius:15,height:66,marginLeft:11,width:66,justifyContent:'center',alignItems:'center',}}>
            <TextInput  keyboardType="numeric"  style={{color:'white',alignContent:'center',fontSize:24,fontWeight:"700",justifyContent:'center',alignItems:'center'}}></TextInput>
           
            </View>
            <View  style={{backgroundColor:'#5735D4',borderRadius:15,height:66,marginLeft:11,width:66,justifyContent:'center',alignItems:'center',}}>
            <TextInput keyboardType="numeric" style={{color:'white',alignContent:'center',fontSize:24,fontWeight:"700",justifyContent:'center',alignItems:'center'}}></TextInput>
           
            </View>
            </View>
      <View style={{marginTop:90}}>
        <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'400',color:'#15294B'}}>I didn't receive code.</Text>
            <Text style={{fontSize:16,fontWeight:'700',color:'#5735D4'}}>Resend Code</Text></View>
            
            </View>
            <View style={{marginTop:12}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:16,fontWeight:'400',color:'#15294B',alignItems:'center',justifyContent:'center'}}>3/3 attempts - </Text>
            <Text style={{fontSize:16,fontWeight:'700',color:'#FE2121'}}>1:20 Sec left</Text></View>

            <View style={{backgroundColor:'#EBECED',borderRadius:15,padding:20,marginTop:20
        }}>
            <Text style={{fontSize:16,fontWeight:'600',color:'#15294B',paddingLeft:12,paddingRight:12}}>Warning : After 3 consecutive</Text>
            <Text style={{fontSize:16,fontWeight:'400',color:'#15294B',paddingLeft:12,paddingRight:12}}>unsuccessful login attempts, your</Text>
            <Text style={{fontSize:16,fontWeight:'400',color:'#15294B',paddingLeft:12,paddingRight:12}}>account will be locked.</Text></View>

            
            </View>
            <TouchableOpacity onPress={click} style={{marginTop:30,width:314,height:50,alignContent:'center',alignItems:'center',justifyContent:'center'}}  >
             <Image style={{width:354,height:90,alignContent:'center',alignItems:'center',justifyContent:'center'}} source={require('../images/verifynow.png')} >
      
           </Image>
        

     </TouchableOpacity>

               </View>

        </View>
    )
}


export default PhoneVerification;