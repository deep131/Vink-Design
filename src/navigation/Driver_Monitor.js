import React from 'react';
import {View, Image, FlatList, Text,SafeAreaView,StyleSheet,StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Register6 from './Register6';
import Register5 from './Register5';
import Register4 from './Register4';
import Register3 from './Register3';
import {useNavigation} from '@react-navigation/native';
import DeviceScreen from './DeviceScreen';
import Drivers from './Drivers';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Tab = createBottomTabNavigator();



  
const Driver_Monitor = () => {
  const navigation = useNavigation();
  const move = () => {
    navigation.navigate('Payments');
  };
  const onclick=(item)=>{
    console.log(item)
    if (item) {
      
move();
      
    }
  }


  return (
    <View style={styles.container}>
          <StatusBar  
                    backgroundColor = "#fff"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                /> 
        <View style={{alignItems:'center'}} >
            <Image style={{alignItems:'center',height:146,width:32}} source={require('../images/imageofdevices.png')}></Image>
        </View>
    <FlatList style={{alignContent:'center',marginLeft:30}}
      

      data={[
        {name: 'Turn On the Device',desc:'Lorem ipsum dolor sit amet...',  path: require('../images/dm1.png')},
        {name: 'Select Route',desc:'Aenean lectus enim',path: require('../images/dm2.png')},
        {name: 'View Payment',desc:'Aliquam eu tellus ut lorem porta hendr...',path: require('../images/dm3.png')},
        {name: 'Enter Cash Payments',desc:'Quisque elementum nisi ut orci ornare',path: require('../images/dm4.png')},
       
      ]}
      renderItem={({item}) =>{
        console.log(item.name);
        return<View style={{flexDirection:'row'}}>
            <View>
             <Image style={{marginTop:30,height:48,width:48}} source={item.path} />
             </View>
             <TouchableOpacity onPress={(item)=>onclick(move)}>
             <View style={{flexDirection:'column'}}>
                  <Text style={styles.bold} >{item.name}</Text>
                  <Text style={styles.light} >{item.desc}</Text>
                 </View>
                 </TouchableOpacity>
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
      marginTop: 40,
      backgroundColor:'#F2F2F2'
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
        fontSize:16,fontWeight:'700',color:'#262B2E',marginTop:30,marginLeft:16
    },
    light:{
        fontSize:14,fontWeight:'400',color:'#8A8D9F',marginTop:5,marginLeft:16
    }
  });
export default Driver_Monitor;
