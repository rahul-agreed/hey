import React from 'react';
import { Image, View, StyleSheet, ImageBackground  } from 'react-native';


export default class authenticate extends React.Component {
  static navigationOptions = {
    header: null,
    };
    render() { 
      return (
        
        <View  style={styles.backgroundImage}>
          <Image style={styles.mainimg} source={require('../img/xlarge.jpg')}/>
          
        </View>
      );
    }
    
  }
  
  const styles=StyleSheet.create({
      backgroundImage:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: null,
      height: null,
    },
    mainimg:{
      flex: 1,
      resizeMode: 'cover',
      width:'100%'
    },
});
