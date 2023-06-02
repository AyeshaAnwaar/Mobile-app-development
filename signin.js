import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SigninScreen = ({ navigation }) => {
    const handleSignin = () => {
        // Handle signin logic
        // Example: Perform signin API call
        // If signin is successful, navigate to the profile screen
        navigation.navigate('Profile');
    };

    return (
        <View>
            <Text>Signin Screen</Text>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Password" secureTextEntry />
            <Button title="Sign In" onPress={handleSignin} />
            <Button
                title="Create Account"
                onPress={() => navigation.navigate('Signup')}
            />
        </View>
    );
};

export default SigninScreen;