import React from "react";
import { View,Text,StyleSheet ,Image,TouchableOpacity} from "react-native";
import {useNavigation} from '@react-navigation/native';

const Register8=()=>{
  const navigation = useNavigation();
  const devices = () => {
     navigation.navigate('Dashboard');
  };

return(
    <View style={{backgroundColor:'white',flex:1}}>
   <View style={{marginTop: 40, alignItems: 'center'}}>
          <Text style={{fontWeight: '700', fontSize: 22, color: '#262B2E'}}>
          Congratulations
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
        Welcome to VMS,
        </Text>
        <Text style={{fontWeight: '500', fontSize: 16, color: '#5735D4'}}>
        Siyasanga
        </Text>
      </View>
      <View style={{flexDirection:'column',marginTop:40,justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.bold}>This could take up to 2 minutes. </Text>
        <Text style={styles.bold}>Please do not close the window.</Text>
      </View>
      <View style={{marginTop:40,alignItems:'center'}}>
        <Image style={{height:270,width:270}} source={require('../images/congratulations.png')}></Image>
      </View>
      <TouchableOpacity onPress={devices}>
      <View style={{marginTop:70,alignItems:'center'}}>
        <Image style={{height:65,width:314}} source={require('../images/ok.png')}></Image>
      </View>
      </TouchableOpacity>
    </View>
)
}
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

 
export default Register8