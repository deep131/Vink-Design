import React from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet,StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import  { useState} from 'react';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


const Register4 = () => {
  const [isLiked, setIsLiked] = useState([
    {id: 1, value: true, name: "Switch to mobile: With your mobile device's camera, you can start a new application via your mobile browser then use the selfie mode to open your account faster without uploading multiple documents.", selected: true},
    {id: 2, value: false, name: "Continue without facial verification: You will have to upload your documents so we can verify them - this process will take a couple of days to complete.", selected: false},

  ]);
 
  const upload = () => {
    navigation.navigate('Register6');
  };

  const onRadioBtnClick = item => {
    let updatedState = isLiked.map(isLikedItem =>
      isLikedItem.id === item.id
        ? {...isLikedItem, selected: true}
        : {...isLikedItem, selected: false},
    );
    setIsLiked(updatedState);
  };

    const navigation = useNavigation();

  
    const login = () => {
      navigation.navigate('Login');
    };
  return (
    <View style={{backgroundColor: 'white', flex: 1,alignItems:'center'}}>
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
   Access to camera blocked
      </Text>
    </View>

    <View style={{flexDirection:'column',marginTop:30,padding:15,borderRadius:12,height:82,width:315,backgroundColor:'#EBE6FE',justifyContent:'center'}}>
        <Text style={{color:'#5735D4',fontSize:16,fontWeight:'400'}}>Your Mobile camera access has been</Text>
        <Text style={{color:'#5735D4',fontSize:16,fontWeight:'400'}}>blocked, don't worry you can use the</Text>
        <Text  style={{color:'#5735D4',fontSize:16,fontWeight:'400'}}>options below to apply.</Text>

       
        
    </View>
     <View style={styles.radioButtonContainer}>
          {isLiked.map(item => (
            <View style={styles.radioButtonContainer}>
              <TouchableOpacity 
                onPress={() => onRadioBtnClick(item)}
                style={styles.radioButton}
              >
                {item.selected ? <View style={styles.radioButtonIcon} /> : null}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onRadioBtnClick(item)}>
                <Text style={styles.radioButtonText}>{item.name}</Text>
              </TouchableOpacity>
            </View>
            
          ))}

        </View> 
     
        <TouchableOpacity 
        style={{
              marginTop: 25,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
             }}
          >
            <TouchableOpacity  >
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
        <View style={{flexDirection:'row',marginTop:50}} >
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
};
const styles = StyleSheet.create({

  radioButtonContainer: {
    flexDirection: 'column',
    

    
    marginTop: 20,
  },
  radioButton: {
    marginLeft:20,
    flexDirection:'row',
    height: 20,
    width: 20,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    flexDirection:'row',
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: '#522ED2',
  },
  radioButtonText: {
    flexDirection:'row',
    fontSize: 16,
    marginLeft: 70,
    fontWeight:'400'
    
  },
})

export default Register4;
