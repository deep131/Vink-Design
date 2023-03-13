import React from 'react';
import {View, Image, FlatList, Text,SafeAreaView,StyleSheet,StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Register6 from './Register6';
import Register5 from './Register5';
import Register4 from './Register4';
import Register3 from './Register3';

import DeviceScreen from './DeviceScreen';
import Drivers from './Drivers';
import { ScrollView } from 'react-native-gesture-handler';
const Tab = createBottomTabNavigator();


  
const Financial_Statement = () => {


  return (
 
    <View style={styles.container}>
          <StatusBar  
                    backgroundColor = "#fff"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                /> 
        <View style={{alignItems:'center',    backgroundColor : "#FFFFFF"  }} >
            <Image style={{alignItems:'center',height:150,width:325}} source={require('../images/imageofdevices.png')}></Image>
        </View>
    <FlatList style={{alignContent:'center',marginLeft:30}}
 
      data={[
        {name: 'PaySlips',desc:'Lorem ipsum dolor sit amet...',path: require('../images/fs1.png')},
        {name: 'Statement Financial Position',desc:'Aenean lectus enim',path: require('../images/fs2.png')},
        {name: 'Income Statement',desc:'Aliquam eu tellus ut lorem porta hendr...',path: require('../images/fs3.png')},
        {name: 'Statement Of Cash Flows',desc:'Quisque elementum nisi ut orci ornare',path: require('../images/fs4.png')},
        {name: 'Property Statement',desc:'Aliquam eu tellus ut lorem porta hendr...',path: require('../images/fs5.png')},
        {name: 'Bank Statement',desc:'Quisque elementum nisi ut orci ornare',path: require('../images/fs6.png') },
       
       
      ]}
      renderItem={({item}) =>{
        return<View style={{flexDirection:'row',backgroundColor : "white"}}>
        <View>
         <Image style={{marginTop:20}} source={item.path} />
         </View>
         <View style={{flexDirection:'column'}}>
              <Text style={styles.bold} >{item.name}</Text>
              <Text style={styles.light} >{item.desc}</Text>
             </View>
        </View>
      }

       
       }

    />
    
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
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 35,
      backgroundColor:'#FFFFFF',
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    bold:{
        fontSize:16,fontWeight:'700',color:'#262B2E',marginTop:21,marginLeft:16
    },
    light:{
        fontSize:14,fontWeight:'400',color:'#8A8D9F',marginTop:5,marginLeft:16
    }
  });
export default Financial_Statement;
