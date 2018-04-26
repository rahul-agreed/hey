import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView,url, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, FlatList, Button } from 'react-native';

export default class group extends Component {
  static navigationOptions={
    title:'Chats'
  }
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView  behavior="padding" >
        <ScrollView source={require('../../../img/xlarge.jpg')}>
        
          <FlatList
            data={[{key: 'Rahul', id:'1'}, {key: 'Sunil Sir', id:'2'}, {key: 'Anurag', id:'3'}, {key: 'Abdullah', id:'4'}, {key: 'Roy', id:'5'}]}
            renderItem={({item}) =>
            
            <Text onPress={() => this.props.navigation.navigate('chat')} style={styles.grouplist}>            
            <Image style={styles.user} source={require('../../../img/user.png')}/> {item.key}  <Image style={styles.rightarrow} source={require('../../../img/rightarrow.png')}  />
            </Text>
            }
          />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles=StyleSheet.create({
  backgroundImage:{
  width:'100%',
  height:'100%',
},
grouplist:{
  padding:15,
  borderBottomWidth: 1,
  borderBottomColor:'#ccc',
  fontSize:16,
},
user:{
  flex: 1,
  justifyContent: 'center',
},


});
