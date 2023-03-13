import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
const Register6 = () => {

    const navigation = useNavigation();

    const login = () => {
        navigation.navigate('Login');
      };
      const confirm = () => {
        navigation.navigate('Register7');
      };
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View>
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
            alignContent: 'center',
            justifyContent: 'center',
            marginLeft: 32,
            marginTop: 30,
          }}
        >
          <Text style={styles.bold}>
            Be sure to upload all of your documents
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.bold}>by </Text>
            <Text style={{color: '#5735D4', fontSize: 16, fontWeight: '700'}}>
              29/07/2022,
            </Text>
            <Text style={styles.bold}> otherwise your</Text>
          </View>
          <Text style={styles.bold}>application will expire.</Text>
        </View>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            marginLeft: 32,
            marginTop: 10,
          }}
        >
          <Text style={styles.light}>
            Make sure documents are A maximum size
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.light}>of </Text>
            <Text style={{color: '#5735D4', fontSize: 16, fontWeight: '400'}}>
              2MB
            </Text>
            <Text style={styles.light}>
              {' '}
              per document type PDF, JPG, TIF or{' '}
            </Text>
          </View>
          <Text style={styles.light}>GIF format Not password protected</Text>
        </View>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            marginLeft: 32,
            marginTop: 41,
          }}
        >
          <Text style={styles.bold}>Select how you want to send your</Text>

          <Text style={styles.bold}>documents below.</Text>
        </View>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            marginLeft: 32,
            marginTop: 10,
          }}
        >
          <Text style={styles.light}>
          If you do not have all your documents ready 
          </Text>
          <Text style={styles.light}>right now, do not worry you can always</Text>
          <View style={{flexDirection: 'row'}}>
          
            <Text style={{color: '#5735D4', fontSize: 16, fontWeight: '400'}}>
            email    
            </Text>
            <Text style={styles.light}>
                  or upload them here at a later stage
              </Text>
          </View>
      
          <Text style={styles.light}>by coming back to your application later</Text>
        </View>

        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            marginLeft: 32,
            marginTop: 41,
          }}
        >
          <Text style={styles.bold}>General Documents</Text>

       
        </View>
        <View   style={{
            alignContent: 'center',
            justifyContent: 'center',
            marginLeft: 32,
            marginTop: 20,
          }}>
            <Text style={styles.light}>
            1. Copy of ID book or card (front & back)
            </Text>
        </View>
        <TouchableOpacity>
        <View style={{marginTop:10,alignItems:'center'}}>
        <Image style={{height:51,width:314,borderRadius:25}}  source={require('../images/uploaddocs.png')}></Image>
        </View>
        </TouchableOpacity>
        <View   style={{
            alignContent: 'center',
            justifyContent: 'center',
            marginLeft: 32,
            marginTop: 20,
          }}>
            <Text style={styles.light}>
            2. Proof of residence 
            </Text>
        </View>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            marginLeft: 32,
            marginTop: 5,
          }}
        >

          <View style={{flexDirection: 'row'}}>
           
            <Text style={{color: '#5735D4', fontSize: 10, fontWeight: '700'}}>
            (no older than 3 months)
            </Text>
            <Text style={styles.small}> E.g. municipality, Telkom or cellphone</Text>
          </View>
          <Text style={styles.small}>statement, rental or lease agreement
</Text>
        </View>
        <TouchableOpacity>
        <View style={{marginTop:10,alignItems:'center'}}>
        <Image style={{height:51,width:314,borderRadius:25}}  source={require('../images/uploaddocs.png')}></Image>
        </View>
        </TouchableOpacity>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            marginLeft: 32,
            marginTop: 40,
          }}
        >
          <Text style={styles.bold}>Don't have any of these documents?</Text>

          <Text style={styles.bold}>See full list of accepted documents</Text>
        </View>

        
    <View style={{flexDirection:'column',marginTop:10,padding:15,borderRadius:12,height:123,marginLeft:20,width:315,backgroundColor:'#EBE6FE',justifyContent:'center'}}>
        <Text style={{color:'#5735D4',fontSize:16,fontWeight:'400'}}>Important: If you do not have proof of</Text>
        <Text style={{color:'#5735D4',fontSize:16,fontWeight:'400'}}>residence in your name you will need to</Text>
        <Text  style={{color:'#5735D4',fontSize:16,fontWeight:'400'}}>provide a signed affidavit by the person</Text>
        <Text  style={{color:'#5735D4',fontSize:16,fontWeight:'400'}}>whom you live with and their proof of</Text>
        <Text  style={{color:'#5735D4',fontSize:16,fontWeight:'400'}}>residence. Get affidavit template here.</Text>
        
    </View>

    <TouchableOpacity 
        style={{
              marginTop: 90,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
             }}
          >
                <TouchableOpacity  onPress={confirm}>
            <Image 
              style={{
                width: 370,
                height:76,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              source={require('../images/submit.png')}
            ></Image></TouchableOpacity>
          </TouchableOpacity >
        <View style={{flexDirection:'row',marginTop:50,alignItems:'center',marginLeft:25}} >
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontSize: 16,
    color: '#262B2E',
    fontWeight: '700',
  },
  light: {
    fontSize: 16,
    color: '#8A8D9F',
    fontWeight: '400',
  },
  small:{
    fontSize: 10,
    color: '#5735D4',
    fontWeight: '600',
  },
  
});
export default Register6;
