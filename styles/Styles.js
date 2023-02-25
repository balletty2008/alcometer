import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from "expo-constants";  //Constants library can void content overlap with status bar

export default StyleSheet.create({  //StyleSheet, App.js import Style, no need {Style}    
    container: {
        marginTop: Constants.statusBarHeight+5,
        margin: 10,
        padding: 10,
    },
    form:{
        padding: 10,
    },
    label: {
        marginTop: 20,
        fontSize: 20,
        color: '#ea7430',
        marginBottom: 10
    },
    result:{
        marginTop: 20,
        color: '#ea7430',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center'
    },
    textInput:{
        fontSize: 30,
        borderWidth: 1,
        borderRadious: 5,
        backgroundColor: '#ffffff',
        padding: 10,
        marginBottom: 20    //marginBottom don't change block size
    },
    button: {
        position: 'relative',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20,
        marginLeft: 35,
        width: 300,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#c46210',
        color: 'white',
        fontWeight: 'bold'
    },
    switch: {
        alignItems: 'flex-end',
        backgroundColor:'transparent'
    },
    NumericInput:{
        marginBottom:30
    },
    RadioButton:{
        color:'pink',
        fontSize: 20
    },
});