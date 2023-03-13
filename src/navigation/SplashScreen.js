import React, { useEffect } from 'react';
import { Text, View,Image, Dimensions ,StyleSheet,StatusBar} from 'react-native';


const SplashScreen = ({navigation }) => { 


  // const COLORS = {primary: rgba(255, 255, 255, .4)};

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login'); //Navigate to your destination screen
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }], //Remove the custom screen from history
      });
    }, 3000); // set your time out here in miliseconds 
  }, []);
  return (

 
    <View style={styles.container}>
          <StatusBar  
                    backgroundColor = "#522ED2"  
                    barStyle = "light-content"   
                    hidden = {false}    
                    translucent = {true}  
                /> 
           <Image  
          source={require('../images/splashimage.png')}
          style={styles.logo}
          />
     
    </View>
  );
};

export default SplashScreen;
const {height}=Dimensions.get("screen")
const height_logo=height*.30
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',

  },
  header: {
      flex: 1,
      justifyContent: 'center',
 
  },
  footer: {

      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      justifyContent:'center'
      // paddingVertical: 30
  },
  text_header: {
      color: '#05375a',
      fontWeight: 'bold',
      fontSize: 30
  },
  logo:{
    height:'100%',
    width:'100%',
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center'
   
  },
  text_footer: {
    marginTop:20,
      color: '#05375a',
      fontSize: 20,
  
  }, 
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});