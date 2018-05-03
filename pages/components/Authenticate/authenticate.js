import React from 'react';
import { Image, View, StyleSheet,Text, TextInput,TouchableOpacity, KeyboardAvoidingView } from 'react-native';


export default class authenticate extends React.Component {
    static navigationOptions = {
        title: 'Security  Question',
      };
    render() { 
      return (
        <KeyboardAvoidingView style={styles.mainScrollContainer} behavior="padding">
        <View source={require('../../../img/xlarge.jpg')} style={styles.container}>
            <View style={styles.components}>
              <Text style={styles.inputlabel}>
                When building your own native code,  GIF and WebP are not supported When building your 
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
        </KeyboardAvoidingView>
      );
    }
    
  }
  
  const styles=StyleSheet.create({
    mainScrollContainer: {
      flex: 1,
      backgroundColor: '#ecf0f1',
  },
  container:{
      padding:20,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    inputlabel:{
      padding:10,
      fontSize:16,
      lineHeight:28,
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