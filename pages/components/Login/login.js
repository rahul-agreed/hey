import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, } from 'react-native';


export default class authenticate extends React.Component {
    static navigationOptions = {
        header: null,
        };
    constructor(props){

        super()
        this.state={
            username:'',
            password:''
        }
    }
    login() { 
        if(this.state.username != '' && this.state.password !=''){
            fetch('http://testingoncloud.com/chat/index.php/chatroom/login?username='+this.state.username+'&password='+this.state.password, {              
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                secret_question: this.state.secretQuestion,
                secret_ans: this.state.secretAns,
                chatroom_id: this.state.chatroomId
            }),
        })
        .then((response) => response.json())
        .then((responseJson)=>{
            if(responseJson.response.status == 'Success') {
                //alert('Successfully Login.');
                this.props.navigation.navigate("group")
                //this.props.navigation.navigate("Group1",{chatroom_id:this.state.chatroomId});
            }
            else {
                alert('Wrong details.');
            }
        });
        } else{
            alert('Wrong Details.');
        }
    }
    render() {
        
      return (
          <KeyboardAvoidingView behavior="padding">
        <ScrollView>
            <View>
            <TextInput style={styles.components} placeholder="Username" placeholderTextColor='#222' onChangeText={username => this.setState({username})} />
            </View>
            <View >
                <TextInput style={styles.components} placeholder="Password" placeholderTextColor='#222' onChangeText={password => this.setState({password})}/>
            </View>
            
            <View >
            <TouchableOpacity onPress={() => this.login()}>
                <View style={styles.button}>
                    <Text >Submit</Text>
                </View>
            </TouchableOpacity>
            </View>
        </ScrollView>
        </KeyboardAvoidingView>
      );
    }
  }
  
const styles=StyleSheet.create({
    components:{
        borderWidth:1,
        borderColor:'#ccc',
        padding:10,
        margin:10
    },
    button:{
        borderWidth:1,
        borderColor:'#00F',
        backgroundColor:'#00F',
        //color:'#fff',
        padding:10,
        margin:10,
        alignItems: 'center',
    },
    margintop:{
        marginTop:50, 
    }
    
});