import React from "react";
import { View,Image,Text,TouchableOpacity,StatusBar ,StyleSheet} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register6 from './Register6';
import Register5 from './Register5';
import Register4 from './Register4';
import Register3 from './Register3';
import { ScrollView } from "react-native-gesture-handler";
import {useNavigation} from '@react-navigation/native';
const Tab=createBottomTabNavigator();

const Dashboard =()=>{
    const navigation = useNavigation();
    const gotocard = () => {
      navigation.navigate('Card');
    };
    const login= () => {
        navigation.navigate('Login2');
      };
return(
  
    <View>
             <StatusBar  
                    backgroundColor = "#fff"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                />  
          <View style={{marginBottom:50}}>
          <ScrollView>
                <TouchableOpacity >
            <View style={{alignItems:'center',marginTop:30,}} >
            <Image style={{alignItems:'center',width:315,height:147}} source={require('../images/imageofdevices.png')}></Image>
        </View></TouchableOpacity>
        
        <View style={{flexDirection:'row',marginTop:30,alignItems:'center',justifyContent:'center'}}>
           <View style={{width:100,height:100,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
             <Image source={require('../images/iclogin.png')}></Image>
             <Text style={{marginTop:5,fontWeight:'500',color:'#262B2E'}}>Login</Text>
   
             </View>
             <View style={{width:100,height:100,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
            <Image source={require('../images/icmsg.png')}></Image>
            <Text style={{marginTop:5,fontWeight:'500',color:'#262B2E'}}>Message</Text>
        
            </View>
            <View style={{width:100,height:100,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
            <Image source={require('../images/iccontact.png')}></Image>
            <Text style={{marginTop:5,fontWeight:'500',color:'#262B2E'}}>Contact Us</Text>
       
            </View>
        
            </View>
            <View style={{flexDirection:'row',marginTop:10,alignItems:'center',justifyContent:'center'}}>
           <View style={{width:100,height:100,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
             <Image source={require('../images/icmarket.png')}></Image>
             <Text style={{marginTop:5,fontWeight:'500',color:'#262B2E'}}>Market Place</Text>
       
             </View>
             <View style={{width:100,height:100,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
            <Image source={require('../images/icbuy.png')}></Image>
            <Text style={{marginTop:5,fontWeight:'500',color:'#262B2E'}}>Buy</Text>
     
            </View>
            <View style={{width:100,height:100,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
            <Image source={require('../images/iccnnect.png')}></Image>
            <Text style={{marginTop:5,fontWeight:'500',color:'#262B2E'}}>Connect</Text>
         
            </View>
        
            </View>
            <View style={{flexDirection:'row',marginTop:10,alignItems:'center',justifyContent:'center'}}>
           <View style={{width:100,height:100,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
             <Image source={require('../images/icpayment.png')}></Image>
             <Text style={{marginTop:5,fontWeight:'500',color:'#262B2E'}}>Payments</Text>

             </View>
             <View style={{width:100,height:100,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
            <Image source={require('../images/ictransfer.png')}></Image>
            <Text style={{marginTop:5,fontWeight:'500',color:'#262B2E'}}>Transfer</Text>
   
            </View>
            <TouchableOpacity onPress={gotocard}>
            <View style={{width:100,height:100,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
            <Image source={require('../images/iccard.png')}></Image>
            <Text style={{marginTop:5,fontWeight:'500',color:'#262B2E'}}>Cards</Text>
      
            </View>
        </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',marginTop:10,alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity onPress={login}>
           <View style={{width:100,height:100,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
             <Image source={require('../images/icdevice.png')}></Image>
             <Text style={{marginTop:5,fontWeight:'500',color:'#262B2E'}}>Device</Text>

             </View>
             </TouchableOpacity>
             <View style={{width:100,height:100,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
            <Image source={require('../images/icguard.png')}></Image>
            <Text style={{marginTop:5,fontWeight:'500',color:'#262B2E'}}>Guard Me</Text>

            </View>
            <View style={{width:100,height:100,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
            <Image source={require('../images/icinsurence.png')}></Image>
            <Text style={{marginTop:5,fontWeight:'500',color:'#262B2E'}}>Insurance</Text>

            </View>
        
            </View>
            <View style={{flexDirection:'row',marginTop:10,alignItems:'center',justifyContent:'center'}}>
           <View style={{width:100,height:100,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
             <Image style={{alignItems:'center',justifyContent:'center'}} source={require('../images/ictv.png')}></Image>
             <Text style={{marginTop:5,fontWeight:'500',color:'#262B2E'}}>VMS TV</Text>

             </View>
             <View style={{width:100,height:100,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
            <Image source={require('../images/icwithdraw.png')}></Image>
            <Text style={{marginTop:5,fontWeight:'500',color:'#262B2E'}}>Cardless Cash </Text>
             <Text style={{fontWeight:'500',color:'#262B2E'}}>Withdrawal</Text>
            </View>
            <View style={{width:100,height:100,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
            <Image source={require('../images/icelection.png')}></Image>
            <Text style={{marginTop:5,fontWeight:'500',color:'#262B2E'}}>Elections</Text>
 
            </View>
        
            </View>
            <View style={{flexDirection:'row',marginTop:10,alignItems:'center',justifyContent:'center'}}>
           <View style={{width:100,height:100,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
             <Image source={require('../images/icscan.png')}></Image>
             <Text style={{marginTop:5,fontWeight:'500',color:'#262B2E'}}>Scan to Pay</Text>

             </View>
             <View style={{width:100,height:100,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
            <Image source={require('../images/icrestaurant.png')}></Image>
            <Text style={{marginTop:5,fontWeight:'500',color:'#262B2E'}}>Restaurant</Text>
     
            </View>
            <View style={{width:100,height:100,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
            <Image source={require('../images/ictravel.png')}></Image>
            <Text style={{marginTop:5,fontWeight:'500',color:'#262B2E'}}>Travel</Text>

            </View>
        
            </View>
            <View style={{flexDirection:'row',marginTop:10,alignItems:'center',marginLeft:15,marginBottom:60}}>
           <View style={{width:100,height:100,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
             <Image source={require('../images/icforex.png')}></Image>
             <Text style={{marginTop:5,fontWeight:'500',color:'#262B2E'}}>Forex</Text>

             </View>
             <View style={{width:100,height:100,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
            <Image source={require('../images/icsetting.png')}></Image>
            <Text style={{marginTop:5,fontWeight:'500',color:'#262B2E'}}>Settings</Text>

            </View>
      
        
            </View>
            </ScrollView>
            <Tab.Navigator>
    
    <Tab.Screen name='        ' component={Register3} options={{
 tabBarIcon: ({focused, horizontal, tintColor}) => (
    <Image
      fadeDuration={0}
      style={{width: 22, height: 22}}
      source={require('../images/homeicon.png')}
    />
  ),}}/>
    <Tab.Screen name='     ' component={Register6} options={{
 tabBarIcon: ({focused, horizontal, tintColor}) => (

    <Image
      fadeDuration={0}
      style={{width: 26, height: 23}}
      source={require('../images/infoicon.png')}
    />
  ),}}/ >
    <Tab.Screen name='    ' component={Register5} options={{
 tabBarIcon: ({focused}) => (

    <Image
      fadeDuration={0}
      style={{width: 56, height: 56,marginBottom:40}}
      source={require('../images/add.png')}
    />
  ),

  }}/>
    <Tab.Screen name='   ' component={Register4} options={{
 tabBarIcon: ({focused, horizontal, tintColor}) => (

    <Image
      fadeDuration={0}
      style={{width: 24, height: 22}}
      source={require('../images/msgicon.png')}
    />
  ),}}/>
    <Tab.Screen name='  ' component={Register3} options={{
 tabBarIcon: ({focused, horizontal, tintColor}) => (

    <Image
      fadeDuration={0}
      style={{width: 20, height: 24}}
      source={require('../images/user.png')}
    />
  ),}}/>
</Tab.Navigator>
            </View>
        
   

    </View>

)
}
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
export default Dashboard;