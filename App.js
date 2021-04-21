import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import AddCourse from './addCourse';
import Register from './register/Register';
import Login from './login/login';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    {/* Ahmad Naufal Ibad bin Mohd Lazim 1910457 */}
                    <Register />
                </View>

                <View style={styles.header}>
                    {/* Muhammad Farhan bin Jamal 1611595 */}
                    <Login />
                </View>

                    {/* Muhammad 'Afif Hazim bin Mat Najib 1811167
                        Ahmad syahril danial bin che zainal 1812603 */}
                    <AddCourse />

            </View>
        );
    }
}
