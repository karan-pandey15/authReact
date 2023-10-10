import {View,Text , TouchableOpacity, StyleSheet , Alert, TextInput} from 'react-native';
import React, {useRef,useState} from 'react';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../config';
import firebase from 'firebase/compat/app';

function Otp() {

    const [phoneNumber,setPhoneNumber] = useState('');
    const [code,setCode] = useState('');
    const [verificationId,setVerifiactionId] = useState(null);
    const recapthaVerifier = useRef(null);

    const sendVerification= ()=>{
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider.verifyPhoneNumber(phoneNumber,recapthaVerifier.current).then(setVerifiactionId);
        setPhoneNumber('');
    }
    const confirmCode = ()=>{
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,code
        );
        firebase.auth().signInWithCredential(credential).then(()=>{
            setCode('');
        }).catch((err)=>{
            alert(err);
        })
        Alert.alert(
            'login successfully, welcome to the App'
        );
    }
    return(
        <View style={styles.container}>
           <FirebaseRecaptchaVerifierModal  
              ref={recapthaVerifier}
              firebaseConfig={firebaseConfig}
           />
           <Text>
              Login using Otp 
           </Text>

           <TextInput 
            placeholder='Phone number' 
            onChangeText={setPhoneNumber}
            keyboardType='phone-pad'
            autoCompleteType='tel'
            style={styles.TextInput}
           />

           <TouchableOpacity 
             style={styles.sendVerification}
             onPress={sendVerification}>
              <Text style={styles.buttonText} >
                 Send Verification 
              </Text>
           </TouchableOpacity>

           <TextInput  
            placeholder='Confirm Code'
            onChangeText={setCode}
            keyboardType='number-pad'
            style={styles.TextInput}
           />

           <TouchableOpacity 
           style={styles.sendCode}
           onPress={confirmCode}>
            <Text style={styles.buttonText} >
               confirm Verification 
            </Text>
         </TouchableOpacity>

        </View>
    )
}

export default Otp




const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000',
        alignItems:'center',
        justifyContent:'center'
    },
    TextInput:{
        paddingTop:40,
        paddingBottom:20,
        paddingHorizontal:20,
        fontSize:24,
        borderBottomColor:'#fff',
        marginBottom:20,
        borderBottomWidth:2,
        textAlign:'center',
        color:'#fff'
    },
    sendVerification:{
        padding:20,
        backgroundColor:'#3498db',
        borderRadius:10 
    },
    sendCode:{
        padding:20,
        backgroundColor:'#9b59b6',
    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:"bold"
    },
    otpText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
        margin:20
    }
});