import React from 'react';
import {StyleSheet} from 'react-native';
import {color} from "../../../Theme";

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ffffff',
        },
        innerContainer: {
            flex: 1,
            marginLeft: 15,
            marginRight: 15,
            backgroundColor: '#ffffff',
            marginTop: -100,
            marginBottom: 25,
            borderColor: '#c9c9ca',
            borderRadius: 10,
            borderWidth: 1,
            padding: 20,

        },
        imageCcontainer: {
            height: 150,
            alignItems: 'center',
            backgroundColor: color.primary,
        },
        containerTop: {
            marginBottom: 5, alignItems: 'center', justifyContent: 'center',
        },
        image: {

            height: 100,
            width: 100,
            alignSelf: 'center'
        },
        text: {
            color: '#000',
            fontWeight: 'bold',
            backgroundColor: 'transparent',
            marginTop: 10,
            marginLeft: 20
        }, textInput: {
            color: '#000',
            backgroundColor: 'transparent',
            marginLeft: 20,
            marginRight: 20,
            borderBottomColor: '#c2c2c2',
            borderBottomWidth: 1, paddingRight: 20,
        }, buttonStyle: {
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            borderColor: '#d6d7da',
            backgroundColor: 'transparent'
        },

        buttonstylelogin: {
            marginRight: 50,
            marginLeft: 50,
            marginTop: -40,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: color.primary,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: color.primary
        },

        buttonstyleloginfb: {
            marginRight: 50,
            marginLeft: 50,
            marginTop: 20,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: color.primary,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: color.primary,
        }, buttonstyleloginalready: {
            marginRight: 50,
            marginLeft: 50,
            marginBottom: 5,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#ffffff',

        }, submitfb: {
            marginRight: 20,
            marginLeft: 20,
            marginTop: 40,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#3A22FF',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#fff'
        }, submitinsta: {
            marginRight: 20,
            marginLeft: 20,
            marginTop: 20,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#FF2F44',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#fff'
        }, registerbtn: {
            marginRight: 20,
            marginLeft: 20,
            marginTop: 40,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#ffffff',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#c9c9ca'
        },
        submitTextBlack: {
            color: '#b3b3b4',
            textAlign: 'center',
        }, submitTextWhite: {
            color: '#fff',
            textAlign: 'center',
        }, imageRight: {
            height: 20,
            width: 20,
            position: 'absolute',
            right: 15,
            bottom: 15
        }, labelError: {
            color: '#ff041f', textAlign: 'center', fontSize: 12
        }, loaderStyle: {
            alignItems: 'center', justifyContent: 'center',
            backgroundColor: '#00000099',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0, zIndex: 2
        }, inputContainerStyle: {
            marginTop: 10, borderRadius: 5, paddingLeft: 10, paddingRight: 10,
            borderWidth: 1,
            borderColor: color.primary
        }
    })
;
export default styles;
