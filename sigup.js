import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
    const handleSignup = () => {
        // Handle signup logic
        // Example: Perform signup API call
        // If signup is successful, navigate to the profile screen
        navigation.navigate('Profile');
    };

    return (
        <View>
            <Text>Signup Screen</Text>
            <TextInput placeholder="Name" />
            <TextInput placeholder="Email" />
            <TextInput placeholder="Password" secureTextEntry />
            <Button title="Sign Up" onPress={handleSignup} />
            <Button
                title="Already have an account? Sign in"
                onPress={() => navigation.navigate('Signin')}
            />
        </View>
    );
};

export default SignupScreen;