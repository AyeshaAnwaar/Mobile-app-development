// LoginScreen
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, AsyncStorage } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        // Clear the input fields when the login screen is rendered
        setEmail('');
        setPassword('');
    }, []);

    const handleLogin = async () => {
        try {
            // Get user data from AsyncStorage
            const userData = await AsyncStorage.getItem('userData');

            if (!userData) {
                // No user data found
                alert('No registered users found');
                return;
            }

            const users = JSON.parse(userData);

            // Find the user with matching email and password
            const user = users.find(u => u.email === email && u.password === password);

            if (!user) {
                // Invalid login information
                alert('Invalid email or password');
                return;
            }

            // Valid login information
            alert('Login successful');
            navigation.navigate('Profile');
        } catch (error) {
            console.log(error);
            alert('Error occurred during login');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
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
            <Button title="Login" onPress={handleLogin} />
            <Button
                title="Create an account"
                onPress={() => navigation.navigate('Signup')}
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

export default LoginScreen;