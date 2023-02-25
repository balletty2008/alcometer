import React from 'react';
import { StyleSheet } from 'react-native';

const darkTheme = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#006e33',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: '#f9f7f3',
        fontWeight: 'bold'
    },
});    

const lightTheme = StyleSheet.create({
    container: {
      ...darkTheme.container,
      backgroundColor: '#ccffe5',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: 'green',
        fontWeight: 'bold'
    },
});

export {darkTheme,lightTheme};
