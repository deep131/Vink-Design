import React ,{useState} from "react";
import { View,Image,Text,FlatList,StyleSheet,StatusBar, Animated, Dimensions,TouchableOpacity,TextInput} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register6 from './Register6';
import Register5 from './Register5';
import Register4 from './Register4';
import Register3 from './Register3';
import { ScrollView } from "react-native-gesture-handler";
const Tab=createBottomTabNavigator();
import {useNavigation} from '@react-navigation/native';
function Payments (props) {
    const[animation,setAnimation]=useState  (new Animated.Value(0));
    const {height}=Dimensions.get('window');
  
    const color=animation.interpolate({
      inputRange:[0,0.2,1.8,2],
      outputRange:["rgba(255,255,255,0.0)",
      "rgba(45,57,82,0.5)",
      "rgba(45,57,82,0.8)",
      "rgba(255,255,255,0.0)"
    ], 
  
    })
    const navigation = useNavigation();
  
    
    const login = () => {
      navigation.navigate('Login');
    };
      
  
    const openModel =animation.interpolate({
      inputRange:[0,1],
      outputRange:[0,1],
      extrapolate:'clamp',
    });
  
    const saveModel =animation.interpolate({
      inputRange:[1,2],
      outputRange:[0,-height],
      extrapolate:'clamp',
    });
  
  const modalTrigger=()=>{
    Animated.timing(animation,{
  toValue:1, duration:500,useNativeDriver:false
    }).start();
  }
  const close=()=>{
    Animated.timing(animation,{
    toValue:1, duration:500,useNativeDriver:false
    }).start()
  }
    const open ={
      transform:[
        {scale:openModel},
        {translateY:saveModel}
      ]
    }
    return(
        
        <View>
    <StatusBar  
                    backgroundColor = "#fff"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                /> 
            <View style={{alignItems:'center',height:150}}>
                <Image style={{height:170,width:300,borderRadius:16}} source={require('../images/totalpay.png')}></Image>
            </View>
            <View style={{flexDirection:'row',marginTop:41,alignItems:'center',justifyContent:'center'}}>
           <View style={{width:100,height:122,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
             <Image source={require('../images/y300.png')}></Image>
             <Text style={{marginTop:13,fontWeight:'700',color:'#262B2E'}}>Cancel</Text>
             <Text style={{fontWeight:'700',color:'#262B2E'}}>Card</Text>
             </View>
             <View style={{width:100,height:122,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
            <Image source={require('../images/v300.png')}></Image>
            <Text style={{marginTop:13,fontWeight:'700',color:'#262B2E'}}>Update</Text>
             <Text style={{fontWeight:'700',color:'#262B2E'}}>Limits</Text>
            </View>
            <View style={{width:100,height:122,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginLeft:10}  }>
            <Image source={require('../images/cy300.png')}></Image>
            <Text style={{marginTop:13,fontWeight:'700',color:'#262B2E'}}>Manage</Text>
             <Text style={{fontWeight:'700',color:'#262B2E'}}>Pin</Text>
            </View>
        
            </View>
            <View style={{marginTop:10,marginLeft:25}}>
                <Text style={{fontSize:16,fontWeight:'700',color:'#262B2E'}}>Total Cash Payments</Text>
                <Text style={{fontSize:22,fontWeight:'700',color:'#5735D4'}}>R35</Text>
                <View style={{marginTop:5,flexDirection:'row'}}>
                    <Text style={{fontSize:12,fontWeight:'700',color:'#32D6D8'}}>Cape Town to Wynberg</Text>
                    <Text style={{fontSize:13,fontWeight:'500',color:'#262B2E',marginLeft:137}}>See All +</Text>
                </View>
            </View>
            <View style={{backgroundColor:'black',borderRadius:10}} >
        <Animated.View  style={[styles.backgroud,open]}>
      <View style={styles.wrap}>
        <Text style={{fontSize:20,fontWeight:'500',color:'#262B2E'}}>Reference & ID Number</Text>
        <TouchableOpacity onPress={close}>
        <Image  style={{ marginLeft:40,height:16,width:16}} source={require('../images/cross.png')}/>
        </TouchableOpacity>
        </View>
      
      <View style={{alignContent:'center',alignItems:'center',marginTop:15}}>
      <TextInput placeholder='Reference Number' color='#8A8D9F'style={{backgroundColor:'#F4F5F7',fontSize:16,borderRadius:25,width:314,height:49 ,paddingLeft:20 }}></TextInput>
      </View>
      <View style={{alignContent:'center',alignItems:'center',marginTop:15}}>
      <TextInput placeholder='ID Number' color='#8A8D9F'style={{backgroundColor:'#F4F5F7',fontSize:16,borderRadius:25,width:314,height:49 ,paddingLeft:20 }}></TextInput>
      </View>

     
      <TouchableOpacity  style={{marginTop:30,width:360,height:50,alignContent:'center',alignItems:'center',justifyContent:'center'}} >
           
        
           <Image style={{width:354,height:90,alignContent:'center',alignItems:'center',justifyContent:'center'}} source={require('../images/letsgo.png')} >
      
           </Image>
        

     </TouchableOpacity>
     </Animated.View>
        </View>
            <View style={{alignContent:'center',marginLeft:25,marginTop:5,marginBottom:50}}>
                
            <FlatList style={{width:315}}
      

      data={[
        {name: 'Vincent K',desc:'to Wynberg',rs:'R20',paymenttype:'Cash payment'  ,path: require('../images/cyan.png')},
        {name: 'Siyasanga M',desc:'Salt River',rs:'R20' ,paymenttype:'Electronic Payment'  ,path: require('../images/yellow.png')},
        {name: 'Nomveliso s',desc:'Woodstock',rs:'R20' ,paymenttype:'Electronic Payment'  ,path: require('../images/red.png')},
     
       
      ]}
      renderItem={({item}) =>{
        return<View style={{flexDirection:'row',backgroundColor:'white',borderRadius:10,marginBottom:10}}>
            <View style={{alignItems:'center',justifyContent:'center'}}>
             <Image style={{marginLeft:20}} source={item.path} />
             </View>
             <View style={{flexDirection:'column',backgroundColor:'white'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={styles.bold} >{item.name}</Text>
                  <Text style={styles.boldblack} >{item.rs}</Text>
                  </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={styles.light} >{item.desc}</Text>
                  <Text style={styles.light2} >{item.paymenttype}</Text>
                  </View>
                 </View>
            </View>
      }

       }
     

    />
    </View>
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
     
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 40,
      backgroundColor:'white',
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
        fontSize:14,fontWeight:'700',color:'#5634D2',marginTop:10,marginLeft:16
    },
    boldblack:{
        fontSize:14,fontWeight:'700',color:'#262B2E',marginTop:10,marginLeft:100
    },

    light:{
        fontSize:14,fontWeight:'400',color:'#939597',marginTop:5,marginLeft:16
    },
    light2:{
        fontSize:12,fontWeight:'400',color:'#C4C6CF',marginTop:5
    },
  

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
export default Payments;