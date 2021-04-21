//Ahmad Naufal Ibad bin Mohd Lazim 1910457

import React, { Component } from 'react';
import {  View, Text, TextInput, Button, } from 'react-native';
import {TouchableOpacity, StyleSheet} from 'react-native';
import styles from './styles';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        matricno: '',
        email: '',
        password: '',
        registration: [],
    };
  }


  register = () => {
          var register = {username: this.state.username, matricno: this.state.matricno, email: this.state.email, password: this.state.password};
          var arr = this.state.registration;
          arr.push(register);
          this.setState((prevState) => {prevState.course, arr});   
          
          for (let index = 0; index < this.state.registration.length; index++) {
            console.log(this.state.registration[index])
          }
  }

  render() {
    return (
      <View style={styles.container}>


        <Text style={styles.header}> REGISTRATION FORM </Text>
        
        <TextInput 
        placeholder='Enter username'
        style={styles.input}
        onChangeText={(username) => this.setState({username})}
        />

        <TextInput
        placeholder='Enter Matric No'
        style={styles.input}
        onChangeText={(matricno) => this.setState({matricno})}
        />  

        <TextInput
        placeholder='Enter email'
        style={styles.input}
        onChangeText={(email) => this.setState({email})}
        />

        <TextInput
        placeholder='Enter password'
        style={styles.input} secureTextEntry
        onChangeText={(password) => this.setState({password})}
        />
      

        <TouchableOpacity style={styles.button} onPress={this.register} >
            <Text style={styles.btntext}>Sign Up</Text>    
        </TouchableOpacity>

      </View>
    );
  }
}

export default Register;