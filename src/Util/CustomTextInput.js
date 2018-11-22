import React from 'react';
import {
    Text,
    View,
    TextInput,
    Image
} from 'react-native';

const CustomTextInput = ({
    label,
    secureTextEntry, 
    showValidation, 
    isValid,
    ...props}) => {
        return (
        <View style = {styles.containerStyle}>
            <Text 
                style = {
                styles.labelStyle}>
                {label}
            </Text>
            <TextInput 
                secureTextEntry = {secureTextEntry}
                placeholder = {props.placeHolder}
                autoCorrect = {false}
                value = {props.value}
                onChangeText = {props.onChangeText}
                style = {styles.inputStyle}
                returnKeyType = {props.returnKeyType}
                autoCapitalize = {'none'}
                
            />

            <View 
                style={{position: "absolute", 
                    right: 7, 
                    top: 33 }}
                >
                {showValidation ? (isValid ? 
                    <Image 
                        source = {require('/Users/sandeepagate/dev/ReactNative/LoginUtility/check1.png')} 
                        style = {{
                            width : 20,
                            height : 20,
                            justifyContent : 'flex-start',
                        }}
                    />
                 : '') : null}
            </View>
         </View>
    );
};

const styles = {
    inputStyle: {
        backgroundColor: '#ffffff',
        height: 45,
        padding: 10,
        fontSize: 14,
        marginTop: 5,
        borderRadius: 3,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowColor: 'lightgray',
        shadowOpacity: 1.0,
    },
    labelStyle: {
        fontSize: 14,
        color: 'gray',
        fontFamily : 'Arial'
    },
    containerStyle: {
        flexDirection: 'column',
        marginTop: 24,

    }
};


export {
    CustomTextInput
};