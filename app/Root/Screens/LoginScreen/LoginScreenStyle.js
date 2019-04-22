import {StyleSheet} from "react-native";
import {color} from "../../../Theme";


const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    container2: {
        flex: 1,
        height: 20,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#ffffff',
        marginTop: -90,
        marginBottom: 10,
        borderColor: color.primary,
        borderRadius: 10,
        borderWidth: 0.5,
        padding: 10,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    container: {
        height: 150,
        alignItems: 'center',
        backgroundColor: color.primary,
    },
    containerTop: {
        flex: 1, padding: 10,

    },
    image: {
        height: 80,
        width: 80,
        alignSelf: 'center'
    },
    text: {
        color: '#000',
        backgroundColor: 'transparent',
        marginTop: 10,
        marginLeft: 20
    }, textInput: {
        color: '#000',
        backgroundColor: 'transparent',
        marginLeft: 20,
        marginRight: 20,
        padding: 10
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
        marginTop: -30,
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
        marginBottom: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: color.primary,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: color.primary
    },
    buttonstyleloginf: {
        marginRight: 50,
        marginLeft: 50,
        marginBottom: 25,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        borderWidth: 1,
        borderColor:color.primary
    }
    , submitfb: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 40,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: color.primary,
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
        color: '#ffffff',
        textAlign: 'center',
    }, submitTextWhite: {
        color: '#fff',
        textAlign: 'center',
    }, submitTextPrimary: {
        color: color.primary,
        textAlign: 'center',
    },
    imageRight: {
        height: 20,
        width: 20,
        position: 'absolute',
        right: 15,
        bottom: 15,
        padding: 5,
        zIndex: 3
    },
    labelError: {
        color: '#ff041f', textAlign: 'center', fontSize: 12
    }, loaderStyle: {
        alignItems: 'center', justifyContent: 'center',
        backgroundColor: '#220a9c99',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0, zIndex: 2
    }, progressView: {
        height: 100, width: 100
    }, forgotpasswordContainer: {
        padding: 10,

    },inputContainerStyle:{marginTop:10, borderRadius: 20,paddingLeft:10,paddingRight:10,
        borderWidth: 1,
        borderColor: color.primary}

});

export default styles;
