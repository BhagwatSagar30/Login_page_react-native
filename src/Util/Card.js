import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

const Card = (props) => {
    return (
        <View style ={styles.cardContainer}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer : {
        flex :1,
        flexDirection : 'column',
        backgroundColor : '#ffffff',
        borderWidth : 1,
        borderRadius : 12,
        shadowColor : '#ddd',
        borderLeftWidth : 3,
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowColor: 'lightgray',
        shadowOpacity: 1.0,
        marginLeft : 24,
        marginRight : 24,
        marginBottom : 24,
        marginTop : 100,
        borderColor : '#ebebeb',
        paddingLeft : 24,
        paddingRight : 24 
    }
});

export {Card};