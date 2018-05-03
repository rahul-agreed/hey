import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView,url, KeyboardAvoidingView, Image, FlatList, } from 'react-native';

export default class group extends Component {
  static navigationOptions={
    title:'Chats',
    headerLeft: null,
  }
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };
  
  render() {
    var navigate  = this.props.navigation.navigate
    
    return (
      <KeyboardAvoidingView style={styles.mainScrollContainer} behavior="padding" >
        <ScrollView source={require('../../../img/xlarge.jpg')}>
          <FlatList
            data={[{key: 'Rahul', id:'1'}, {key: 'Sunil Sir', id:'2'}, {key: 'Anurag', id:'3'}, {key: 'Abdullah', id:'4'}, {key: 'Roy', id:'5'}, {key: 'Anurag', id:'6'}, {key: 'Abdullah', id:'7'}, {key: 'Rahul', id:'8'}, {key: 'Anurag', id:'9'}, {key: 'Abdullah', id:'10'}, {key: 'Roy', id:'11'}]}
            renderItem={({item}) =>
            <Text onPress={() => this.props.navigation.navigate('authenticate')} style={styles.grouplist}>            
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
  mainScrollContainer: {
    flex: 1,
    
  },
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
