import React from 'react';
import { Image, View, StyleSheet, TextInput, TouchableOpacity, FlatList, Text } from 'react-native';


export default class authenticate extends React.Component {
    static navigationOptions = {
        title: 'Sunil Sir',
      };
    render() { 
      return (
        
        <View source={require('../../../img/xlarge.jpg')}  style={styles.backgroundImage}>
        

          <View style={styles.mainScrollContainer} behavior="padding">
          <View > 
                <Text style={styles.nameStyle}>Sunil Sir</Text>
                <Text style={styles.msgStyle}>When building your own native code, GIF and WebP are not supported by default on Android.</Text>
                <Text style={styles.timeStyle}></Text> 
                </View>
           
            <View> 
              <TextInput placeholder = "Type here..." returnKeyType="next" placeholderTextColor='#666' style={styles.input} />
              <TouchableOpacity style = {styles.buttonContainer}>
                  <Image source={require('../../../img/send.png')}  style = {styles.sendbtn} />
              </TouchableOpacity>
            </View>
        </View>
        </View>
      );
    }
    
  }
  
  const styles=StyleSheet.create({
    mainScrollContainer: {
      flex: 1,
    },
      backgroundImage:{
      width:'100%',
      height:'100%',
    },
    nameStyle:{
     
      fontFamily:'serif',
      color: '#003171',

  },
  msgStyle:{
      flex:1,
      fontFamily:'serif',  
      alignItems:'flex-end',
  },
  timeStyle: {
      color:'#006442',
  },
  componentContainer: {
      flex:1,
      flexDirection:'row',
      alignItems:'flex-end',
      padding:5, 
             
  },
  input: {
      padding:10,
      height: 40,
      marginBottom: 10,
      width:'90%',
      backgroundColor:'#fff',
      height:38,
      borderWidth:1,
        borderColor:'#ccc',
        fontSize:16,
  },
  buttonContainer:
  {
    width:35,
    height:35,
  },
  sendbtn: {
      width:35,
      height:35,
      marginBottom:5,
  },
});
