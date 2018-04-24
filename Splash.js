import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default class Splash extends React.Component {
    render() { 
      return (
       <View style={styles.wrapper}>
           
       </View>
      )
    }
  }
  
  const styles=StyleSheet.create({
    wrapper:{
    backgroundImage:'url(../img/xlarge.jpg)'
    }
});