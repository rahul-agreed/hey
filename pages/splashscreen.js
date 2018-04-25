import React from 'react';
import { Image, View, StyleSheet  } from 'react-native';


export default class authenticate extends React.Component {
  static navigationOptions = {
    header: null,
    };
    render() { 
      return (
        
        <View source={require('../img/xlarge.jpg')}  style={styles.backgroundImage}>
        <Image />
        </View>
      );
    }
    
  }
  
  const styles=StyleSheet.create({
      backgroundImage:{
      width:'100%',
      height:'100%',
    }
});
