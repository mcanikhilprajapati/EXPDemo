import React, {Component} from 'react';
import {ActivityIndicator, Image, Text, TouchableHighlight, View} from 'react-native';
import {Input} from 'react-native-elements';
import styles from './LoginScreenStyle'
import tlogo from '../../../assets/tlogo.png'

class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            useremail: null,
            password: null,
            isError: '',
            showPassword: false,
            isPassword: true
        };
    }


    render() {
        return (
            <View style={styles.container1}>
                <View style={styles.container}>

                </View>
                <View style={styles.container2}>

                    <Image source={tlogo} style={styles.image}/>
                    <View style={styles.containerTop}>
                        <Input
                            inputContainerStyle={styles.inputContainerStyle}
                            placeholder='Username or email'
                            shake={true}
                            errorStyle={{color: 'red'}}
                            errorMessage={this.state.isError}
                        />
                        <Input
                            inputContainerStyle={styles.inputContainerStyle}
                            placeholder='Password'
                            shake={true}
                            errorStyle={{color: 'red'}}
                            errorMessage=''
                        />


                    </View>


                </View>

                <View>
                    <TouchableHighlight

                        onPress={()=>{
                            const {navigate} = this.props.navigation;
                            navigate('PostListScreen');
                        }}
                        style={styles.buttonstylelogin}
                        underlayColor='#fff'
                    >
                        <Text style={[styles.submitTextBlack]}>{'Sign In'}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.buttonstyleloginfb}
                        underlayColor='#fff'
                        onPress={() => {
                        }}
                    >
                        <Text style={[styles.submitTextBlack]}>{'Login with Facebook'}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => {
                            const {navigate} = this.props.navigation;
                            navigate('SignupScreen');

                        }}
                        style={styles.buttonstyleloginf}
                        underlayColor='#fff'>
                        <Text style={[styles.submitTextPrimary]}>{'Anyone Can join Free !'}</Text>
                    </TouchableHighlight>
                </View>
                {this.props.isLoading &&
                <View
                    style={styles.loaderStyle}>
                    <ActivityIndicator size="large" style={styles.progressView}/>
                </View>}
            </View>

        );
    }
}


export default LoginScreen;
