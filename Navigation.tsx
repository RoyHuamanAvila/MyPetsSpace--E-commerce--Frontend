import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProductScreen from './src/screens/ProductScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import { useContextPet } from './src/context/index';
import { RootStackParamList } from './types';
import Register from './src/screens/Register';

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();
const MyStack = () => {

    return (
        <Stack.Navigator initialRouteName='login'>
            <Stack.Screen name='login' component={Login} options={{
                headerShown: false,
            }} />
            <Stack.Screen name='register' component={Register} options={{
                headerTitle: '',
                headerShadowVisible: false,
                headerTransparent: true
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
    const { userLogged } = useContextPet();

    return (
        <Tab.Navigator initialRouteName="home" screenOptions={{
            tabBarActiveTintColor: '#11a76a',
        }}>
            <Tab.Screen name="home" component={Home} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="md-home-sharp" size={size} color={color} />
                ),
                headerShown: false
            }} />
            <Tab.Screen name="profile" component={Profile} initialParams={userLogged} options={{
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
