import React, {Component} from 'react';
import {ActivityIndicator, Image, ScrollView, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import logoImg from '../../../assets/tlogo.png';
import styles from './SignupScreenStyle'
import { TextInput } from 'react-native-paper';


class SignupActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            useremail: null,
            password: null,
            dob: null,
            gender: 'Men',
            location: null,
            lat: null,
            lng: null,
            device_token: null,
            isDateTimePickerVisible: false,
            currentLocation: '',
            isFetchingLocation: false,
            currentUserLocation: null,
        };
    }


    render() {
        let data = [{
            value: 'Men',
        }, {
            value: 'Women',
        }];
        return (

            <View style={styles.container}>
                <View style={styles.imageCcontainer}>

                </View>
                <View style={styles.innerContainer}>

                    <ScrollView>
                        <Image source={logoImg} style={styles.image}/>
                        <TextInput
                            label='Name'
                            value={this.state.text}
                            onChangeText={text => this.setState({ text })}
                            mode={'outlined'}
                            style={{width:'100%',backgroundColor:'#ffffff'}}
                        />

                        <TextInput
                            label='Email'
                            value={this.state.text}
                            onChangeText={text => this.setState({ text })}
                            mode={'outlined'}
                            style={{width:'100%',backgroundColor:'#ffffff'}}
                        />

                        <TextInput
                            label='Password'
                            value={this.state.text}
                            onChangeText={text => this.setState({ text })}
                            mode={'outlined'}
                            style={{width:'100%',backgroundColor:'#ffffff'}}
                        />
                        <TextInput
                            label='Confirm Password'
                            value={this.state.text}
                            onChangeText={text => this.setState({ text })}
                            mode={'outlined'}
                            style={{width:'100%',backgroundColor:'#ffffff'}}
                        />

                        <View style={[styles.inputContainerStyle, { height: 55}]}>

                            <Dropdown
                                value={"Men"}
                                data={data}
                                labelFontSize={16}
                                fontSize={16}
                                labelPadding={0}
                                rippleOpacity={0}
                                onChangeText={(text) => {
                                    this.setState({gender: text})
                                }}
                                containerStyle={{paddingLeft: 5, marginRight: 5, marginTop: -23}}
                            />

                        </View>

                    </ScrollView>
                </View>

                <TouchableHighlight
                    style={styles.buttonstylelogin}
                    underlayColor='#fff'
                    onPress={() => {
                        const {navigate} = this.props.navigation;
                        navigate('PostListScreen');
                    }}>
                    <Text style={[styles.submitTextWhite]}>{'Sign Up Free!'}</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => {

                    }}
                    style={styles.buttonstyleloginfb}
                    underlayColor='#fff'>
                    <Text style={[styles.submitTextWhite]}>{'Sign Up with Facebook'}</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.buttonstyleloginalready}
                    underlayColor='#fff'
                    onPress={() => {
                        const {navigate} = this.props.navigation;
                        navigate('LoginScreen');
                    }}
                >
                    <Text style={[styles.submitTextBlack]}>{'Already a Member?'}</Text>
                </TouchableHighlight>

                {this.props.isLoading &&
                <View
                    style={styles.loaderStyle}>
                    <ActivityIndicator size="large"/>
                </View>}
            </View>

        );
    }
}


export default SignupActivity
