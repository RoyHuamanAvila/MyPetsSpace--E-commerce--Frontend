import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProductScreen from './screens/ProductScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator initialRouteName='login'>
            <Stack.Screen name='login' component={Login} options={{
                headerShown: false,
            }} />
            <Stack.Screen name='home' component={MyTabs} options={{
                headerShown: false
            }} />
            <Stack.Screen name='product' component={ProductScreen} options={{
                headerTitle: ''
            }} />
        </Stack.Navigator>
    )
}

const MyTabs = () => {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{
            tabBarActiveTintColor: '#11a76a',
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="md-home-sharp" size={size} color={color} />
                ),
                headerShown: false
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" size={size} color={color} />
                ),
                headerShown: false
            }} />
        </Tab.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}

export default Navigation;
