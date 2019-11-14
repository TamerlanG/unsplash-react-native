import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View, Alert } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import colors from '../themes/color';

//Import Screens
import Home from '../screens/Home';
import Photo from '../screens/Photo';

const StackNavigator = createStackNavigator({
    "Home": { screen: Home },
    "Photo": { screen: Photo }
},
    {
        initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerTitle: "UnSplash Downloader",
            headerStyle: {
                backgroundColor: colors.PRIMARY,
            },
            headerTintColor: colors.BLACK,
            headerTitleStyle: {
                fontWeight: "400",
            },
            headerRight: () => (
                <View style={{ marginRight: 16 }}>
                    <Ionicons
                        name="md-information-circle-outline"
                        size={32}
                        color={colors.BLACK}
                        onPress={() => { Alert.alert("Unsplash Downloader", "Created By Tamerlan Gudabayev", []) }}
                    />
                </View>
            )
        },
    }
)

export default createAppContainer(StackNavigator);