import React,{Component} from 'react';

import {
    View,
    Text,
    Button,
    Image
} from 'react-native';
import Login from  './components/login'


export default class App extends Component {
    
    render(){
        return(
            <Login/>
        );
    }
}