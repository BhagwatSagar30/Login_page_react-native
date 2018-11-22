import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import * as CustomFont from './FontSize.js'


const CustomButton = ({children, ...props}) =>{
    return(
        <TouchableOpacity 
            onPress ={props.onPress} 
            disabled = {props.disabled}
            style ={
                [styles.buttonStyle, 
                { 
                    backgroundColor : props.backgroundColor 
                }]}>

            <Text 
                style ={
                    [styles.textStyle,
                    {
                        fontSize :  CustomFont.SIZE_14,
                        fontWeight : props.fontWeight 
                    } ]}
                > {children}
            </Text>
        </TouchableOpacity>
    );
};

// set default color to button
CustomButton.defaultProps = {
    backgroundColor: "#0276FD",
    fontSize : 16,
    fontWeight : 'bold',
}

CustomButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    backgroundColor : PropTypes.string,
    fontSize : PropTypes.number,
    fontWeight : PropTypes.string
  };


  //defines style to button
const styles = StyleSheet.create({
    buttonStyle :{
        alignItems : 'center',
        borderRadius : 3,
    },
    textStyle :{
        alignSelf : 'center',
        color : '#fff',
        paddingTop : 10,
        paddingBottom : 10
    }
});

export {CustomButton};