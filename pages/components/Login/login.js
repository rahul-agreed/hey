import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, } from 'react-native';
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
        <KeyboardAvoidingView style={styles.mainScrollContainer} behavior="padding">
            <ScrollView>
                <View style={styles.container} source={require('../../../img/patternbg.png')} >
                    <View style = {{alignItems: 'center'}}>
                    <Image source={require('../../../img/logo.png')} style={styles.logo} />
                    </View>
                    <View>
                        <TextInput style={styles.components} placeholder="Username" placeholderTextColor='#222' onChangeText={username => this.setState({username})} />
                    </View>
                    <View >
                        <TextInput style={styles.components} placeholder="Password" placeholderTextColor='#222' onChangeText={password => this.setState({password})}/>
                    </View>
                    <View >
                        <TouchableOpacity onPress={() => this.login()}>
                            <View style={styles.button}>
                                <Text style={styles.buttontext}>SUBMIT</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
      );
    }
  }
  
const styles=StyleSheet.create({
    mainScrollContainer: {
        flex: 1,
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding:10,
        width:'100%',
      height:'100%',
    },
    logo:{
        flex: 1,
        justifyContent: 'center',
        marginTop:'40%',
        marginBottom:30,
    },
    components:{
        borderWidth:1,
        borderColor:'#ccc',
        padding:10,
        margin:10
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
    },
    margintop:{
        marginTop:50, 
    }
});