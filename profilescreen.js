import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    const handleSignout = () => {
        // Handle signout logic
        // Example: Perform signout API call or clear session
        navigation.navigate('Signin');
    };

    return (
        <View>
            <Text>Profile Screen</Text>
            <Button title="Sign Out" onPress={handleSignout} />
        </View>
    );
};

export default ProfileScreen;