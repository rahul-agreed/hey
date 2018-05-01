import React from 'react';
import { Image, View, StyleSheet, TextInput, TouchableOpacity, FlatList, Text,TouchableHighlight, flex,start,end} from 'react-native';


export default class authenticate extends React.Component {
    static navigationOptions = {
        title: 'Sunil Sir',
      };
    render() { 
      return (
        
        <View source={require('../../../img/xlarge.jpg')}  style={styles.backgroundImage}>
        

          <View style={styles.mainScrollContainer} behavior="padding">
            <View style={styles.componentContainer}>

            <View style={styles.msgLeftWrap} >
              <View style={styles.msgLeft}> 
                <Text style={styles.nameStyle}>Sunil Sir</Text>
                <Text style={styles.msgStyle}>When building your own native code, GIF and WebP are not supported by default on Android.When building your own native code, GIF and WebP are not supported by default on Android.</Text>
                <Text style={styles.timeStyleRight}>1:13 pm</Text> 
              </View>
            </View>

              <View  style={styles.msgRightWrap}> 
              <View style={styles.msgRight}> 
                <Text style={styles.nameStyle}>Rahul</Text>
                <Text style={styles.msgStyle} >When building your own native code,  GIF and WebP are not supported</Text>
                <Text style={styles.timeStyleLeft}>2:13 pm</Text> 
              </View>
              </View>

              <View  style={styles.msgLeftWrap}> 
              <View style={styles.msgLeft}>
                <Text style={styles.nameStyle}>Sunil Sir</Text>
                <Text style={styles.msgStyle}>When building your</Text>
                <Text style={styles.timeStyleRight}>6:13 pm</Text> 
              </View>
              </View>

              <View  style={styles.msgRightWrap}> 
              <View style={styles.msgRight}>
                <Text style={styles.nameStyle}>Sunil Sir</Text>
                <Text style={styles.msgStyle}>When building your GIF and WebP are not</Text>
                <Text style={styles.timeStyleLeft}>1:53 pm</Text> 
              </View>
              </View>
            
              
              <View style={styles.msgText}> 
                <TextInput  style={styles.input} />
                <TouchableOpacity style = {styles.buttonContainer}>
                    <Image source={require('../../../img/send.png')}  style = {styles.sendbtn} />
                </TouchableOpacity>
              </View>
              
              
            </View>
        </View>
        </View>
      );
    }
    
  }
  
  const styles=StyleSheet.create({
    mainScrollContainer: {
    flex:1
    },
    componentContainer: {
      
      padding:5,  
      width:'100%',
      height:'100%',     
  },
  nameStyle:{
    fontWeight:'500',
    color:'#332b61',
    marginBottom:5,
  },
  msgLeft:{
    marginRight:10,
    marginLeft:10,
    marginTop:5,
    marginBottom:5,
    backgroundColor:'#fff',
    padding:10,
    borderRadius:5,
    
  }, 
  timeStyleRight:{
    alignItems:'flex-end',
    fontSize:12,
    color:'#999',
    marginTop:5,
  },
  timeStyleLeft:{
    alignItems:'flex-start',
    fontSize:12,
    color:'#999',
    marginTop:5,
  },
  msgLeftWrap:{
    alignItems:'flex-start',
  },
  msgRightWrap:{
    alignItems:'flex-end',
  },
  msgRight:{
    marginRight:10,
    marginLeft:10,
    marginTop:5,
    marginBottom:5,
    backgroundColor:'#fff',
    padding:10,
    alignItems:'flex-end',
    borderRadius:5,
    
  }, 
  msgText:{
    alignItems:'flex-start',
    flexDirection:'row',
    padding:10,
    backgroundColor:'#fff',
    borderWidth:1,
    borderTopColor:'#ccc',
    borderBottomColor:'transparent',
    borderLeftColor:'transparent',
    borderRightColor:'transparent',
    marginTop:10,
  },
  input: {
      padding:10,
      height: 40,
      width:'90%',
      marginRight:8,
      backgroundColor:'#fff',
      height:38,
      borderWidth:1,
      borderColor:'#ccc',
      fontSize:16,
  },
  buttonContainer:{
    width:35,
    height:35,
  },
  sendbtn: {
      width:35,
      height:35,
  },
});
