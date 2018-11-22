import React,{Component} from 'react';

import {
    View,
    Text,
    Button,
    Image,
    ScrollView,
    StyleSheet
} from 'react-native';
import { Card,CustomTextInput,CustomButton, SIZE_44 } from '../../Util';

export default class Login extends Component {
    state = {
        showValidationImage: false,
        userName : '',
        password : '',
        isValidUserName : false,
        isValidPassword : false
    }

    onSignInButtonPress () {
        const {userName,password } = this.state;
        console.log(userName,password);
    }

    validateStringLength = text => {
        if (text.length > 4) {
            return true;
        } 
        return false;
    }
    
    render(){
        return(
            <View style={{flex :1,backgroundColor:"#fff"}}>

                <View style = {styles.backgroundImageContainer}>
                    <Image 
                        source = {require('/Users/sandeepagate/dev/ReactNative/LoginUtility/travelImage.jpeg')} 
                        style = {styles.backgroundImage}
                    />
                </View>
                    
                <View style={{flex :6,backgroundColor:"#fff"}}/>

                <View 
                    style = {{position : 'absolute',flex : 1,top : 0,right : 0, bottom : 0,left : 0}}>

                    <ScrollView>

                        <Text style = {styles.titleText}> TRAVELOGRAM </Text>

                        <Text style = {styles.subTitleText}> ALL IN ONE TRAVELING APP </Text>

                        <Card>
                            <CustomTextInput 
                                placeHolder = ''
                                label = 'User Name'
                                value = {this.setState.userName}
                                onChangeText = {userName => {this.setState({userName})}}
                                showValidation={true}
                                isValid = {this.validateStringLength(this.state.userName)}

                            />

                            <CustomTextInput 
                                placeHolder = ''
                                label = 'Password'
                                secureTextEntry = {true}
                                value = {this.setState.password}
                                onChangeText = {password => this.setState({password})}
                                showValidation={true}
                                isValid = {this.validateStringLength(this.state.password )}

                            />

                            <View style = {styles.checkBoxContainer}>>
                                <Image 
                                    source = { require('/Users/sandeepagate/dev/ReactNative/LoginUtility/check.png')} 
                                    style = {styles.checkBoxImage}
                                />

                                <Text style={styles.checkBoxText}> Remember Me </Text>

                            </View>

                            <View style = {{marginTop : 25}}>
                                <CustomButton 
                                    onPress ={
                                        this.onSignInButtonPress.bind(this)}
                                        fontSize ={17}
                                        disabled = {!(this.validateStringLength(this.state.userName) && this.validateStringLength(this.state.password))}
                                    >Sign In
                                </CustomButton>

                            </View>
                            
                            <Text 
                                style={styles.forgotPasswordText}
                                onPress ={() => alert("Forgot Passowrd")}>
                                Forget Password?
                            </Text>

                            <Text style={styles.orContinueWithText}>
                                OR CONTINUE WITH
                            </Text>

                            <View style = {styles.socialAuthContainer}>
                                <Image 
                                    source = {require('/Users/sandeepagate/dev/ReactNative/LoginUtility/facebook.png')} 
                                    style = {styles.facebookImage}
                                />

                                <View style = {{flex :1}}>
                                    <CustomButton  
                                        onPress = {() => null} 
                                        backgroundColor = {"#1876D2"}
                                        fontSize ={14}
                                        fontWeight = {"700"} 
                                        >FACEBOOK 
                                    </CustomButton>
                                </View>

                                <Image source = {require('/Users/sandeepagate/dev/ReactNative/LoginUtility/google-plus.png')} 
                                    style = {styles.googleImage}
                                />

                                <View style = {{flex :1}}>
                                    <CustomButton 
                                        onPress = {() => null} 
                                        backgroundColor = {"#F34B38"}
                                        fontSize ={14}
                                        fontWeight = {"700"} 
                                        >GOOGLE + 
                                    </CustomButton>
                                </View>

                            </View>

                            <View 
                            style={{
                                    marginTop: 24,
                                    marginBottom :24,
                                    justifyContent : 'flex-start',
                                    flexDirection: 'row',
                                    alignItems : 'center',
                                    justifyContent : 'center'}}>
                                <Text 
                                    style={styles.dontHaveAccoountText}
                                    > Don't have account?
                                 </Text>
                                <Text 
                                    style ={styles.signUpText}
                                    onPress={() => alert("Sign Up ")}>{"Sign Up"}
                                </Text>
                            </View>
                        </Card>

                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    backgroundImageContainer : {
        flex : 4,
        backgroundColor : 'white',
        borderBottomRightRadius : 30,
        overflow :'hidden'
    },
    backgroundImage:{
        width : '100%',
        height : '100%',
        opacity : 0.90
    },
    titleText :{
        textAlign: 'center',
        fontSize : SIZE_44,
        marginTop : 90, 
        color : 'white',
        fontWeight: 'bold'
    },
    subTitleText :{
        textAlign: 'center',
        fontSize : 14,
        marginTop : 10, 
        color : 'white',
        fontWeight: 'bold'
    },
    checkBoxContainer:{
        justifyContent : 'flex-start',
        flexDirection: 'row',
        alignItems : 'center',
        marginTop : 16
    }, 
    checkBoxImage:{
        width : 20,
        height : 20,
        justifyContent : 'flex-start',
    },
    checkBoxText:{
        fontSize: 13,
        color: 'gray',
        marginLeft: 5,
        alignSelf:'center'
    },
    forgotPasswordText:{
        fontSize: 11,
        color: 'gray',
        marginTop :10
    },
    orContinueWithText :{
        fontSize: 10,
        color: 'gray',
        marginLeft: 24,
        marginTop :45,
        alignSelf:'center'
    },
    socialAuthContainer:{
        justifyContent : 'flex-start',
        flexDirection: 'row',
        alignItems : 'center',
        marginTop : 16
    },
    facebookImage:{
        width : 20,
        height : 20,
        justifyContent : 'flex-start',    
    },
    googleImage:{
        width : 22,
        height : 22,
        marginLeft : 30,
        marginRight : 5
    },
    dontHaveAccoountText:{
        fontSize: 14,
        color: 'gray',
        alignSelf:'center'
    },
    signUpText :{
        color: 'black',
        fontWeight :'bold',
        marginLeft :5
    }

});