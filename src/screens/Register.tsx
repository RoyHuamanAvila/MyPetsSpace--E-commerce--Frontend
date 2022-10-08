import { Text, ScrollView, TextInput, Pressable, View, StyleSheet, Platform, SafeAreaView } from "react-native"
import React from 'react';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [direction, setDirection] = React.useState('');
    const navigation = useNavigation();
    const handleSignUp = async () => {
        const axiosData = await axios.post('https://us-central1-mypetsspace-b4e25.cloudfunctions.net/app/auth/local/register', {
            email: email,
            password: password,
            name: name,
            direction: direction,
        });

        navigation.navigate('login' as never);
    }



    return (
        <SafeAreaView style={styles.screen}>
            <Text style={styles.title}>Sign Up</Text>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelText}>Name</Text>
                    <TextInput
                        placeholder='Karen'
                        onChangeText={(text) => setName(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelText}>Email</Text>
                    <TextInput
                        placeholder='example@mail.com'
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelText}>Direction</Text>
                    <TextInput
                        placeholder='Av Siempre Viva, Calle 4'
                        onChangeText={(text) => setDirection(text)}
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
                <Pressable style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.textButton}>Sign Up</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#0b863c',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    title: {
        textAlign: "center",
        color: '#fff',
        fontSize: 30,
        marginTop: 50,
        marginBottom: 40
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopStartRadius: 80,
        paddingTop: 30
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
    labelText: {
        color: '#0b863c',
    },
    button: {
        backgroundColor: '#0b863c',
        flex: 0.7,
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
})

export default Register;
