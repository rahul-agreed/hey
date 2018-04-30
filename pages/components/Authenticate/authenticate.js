import React from 'react';
import { Image, View, StyleSheet,Text, TextInput,TouchableOpacity } from 'react-native';


export default class authenticate extends React.Component {
    static navigationOptions = {
        title: 'Security  Question',
      };
    render() { 
      return (
        
        <View source={require('../../../img/xlarge.jpg')} style={styles.backgroundImage}>
            <View style={styles.components}>
              <Text style={styles.inputlabel}>
                Question 1
              </Text>
            </View>
            <View style={styles.components}>
              <TextInput  style={styles.inputStyle} placeholder="Answer" placeholderTextColor='#222'/>
            </View>
            <View >
              <TouchableOpacity onPress={() => this.login()}>
                <View style={styles.button}>
                  <Text style={styles.buttontext}>SUBMIT</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
      );
    }
    
  }
  
  const styles=StyleSheet.create({
      backgroundImage:{
      width:'100%',
      height:'100%',
      padding:20,
    },
    inputlabel:{
      padding:10,
      fontSize:16,
    },
    inputStyle:{
      borderWidth:1,
      borderColor:'#ccc',
      padding:10,
      margin:10,
      fontSize:16,
    },
    button:{
      borderWidth:1,
      borderColor:'#3a2d7d',
      backgroundColor:'#3a2d7d',
      //color:'#fff',
      padding:10,
      margin:10,
      alignItems: 'center',
  },
  buttontext:{
      color:'#fff',
      fontSize:16,
  }
});