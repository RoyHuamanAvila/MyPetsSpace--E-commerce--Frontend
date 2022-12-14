import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { useContextPet } from '../context/index'

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigation = useNavigation();
    const { setUserLogged } = useContextPet();

    const handleLogin = async () => {
        const axiosData = await axios.post('https://us-central1-mypetsspace-b4e25.cloudfunctions.net/app/auth/local/login', {
            email: email,
            password: password
        });
        const { profile } = axiosData.data;

        if (profile) {
            setUserLogged(profile)
            navigation.navigate('home' as never);
        }
    }


    return (
        <View style={styles.screen}>
            <StatusBar style='light' />
            <View style={styles.header}>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelText}>Email</Text>
                    <TextInput
                        placeholder='example@mail.com'
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelText}>Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        placeholder='••••••••••••'
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <Pressable style={styles.button} onPress={handleLogin}>
                    <Text style={styles.textButton}>Login</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('register' as never)}>
                    <Text style={styles.textSignUp}>
                        Don´t have any account? Sign Up
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#0b863c'
    },
    header: {
        flex: 1,
        backgroundColor: '#0b863c'
    },
    content: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopStartRadius: 80
    },
    title: {
        color: '#0b863c',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 30
    },
    labelText: {
        color: '#0b863c',
    },
    inputContainer: {
        margin: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowOpacity: 0.9,
        shadowRadius: 20.32,
        elevation: 16,
    },
    button: {
        backgroundColor: '#0b863c',
        flex: 0.40,
        margin: 20,
        borderRadius: 10,
        borderTopEndRadius: 0,
        justifyContent: 'center'
    },
    textButton: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16
    },
    textSignUp: {
        textAlign: 'center',
        color: '#0b863c',
    }
})


export default Login;
