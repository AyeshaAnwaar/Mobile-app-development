// SignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, AsyncStorage } from 'react-native';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            // Passwords don't match
            alert('Passwords do not match');
            return;
        }

        try {
            // Get existing user data from AsyncStorage
            const userData = await AsyncStorage.getItem('userData');
            let users = [];

            if (userData) {
                // Parse the existing user data
                users = JSON.parse(userData);
            }

            // Check if the email already exists
            const existingUser = users.find(user => user.email === email);

            if (existingUser) {
                // Email already exists
                alert('Email already registered');
                return;
            }

            // Create a new user object
            const newUser = {
                email,
                password,
            };

            // Add the new user to the array
            users.push(newUser);

            // Save the updated user data to AsyncStorage
            await AsyncStorage.setItem('userData', JSON.stringify(users));

            alert('Signup successful');
            navigation.navigate('Login');
        } catch (error) {
            console.log(error);
            alert('Error occurred during signup');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Signup</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
            />
            <Button title="Signup" onPress={handleSignup} />
            <Button
                title="Back to Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default SignupScreen;