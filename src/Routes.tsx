import React, { useRef, useEffect } from "react"
import { View, Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Login from "./Screens/Auth/_Login"
import Splash from "./Screens/Auth/_Splash"

import Home from "./Screens/Home"
import Settings from "./Screens/Settings"
import Notification from "./Screens/Notification"

import Help from "./Screens/Common/_Help"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

export default function StackNavigator(props:any): JSX.Element {

    const stackRef = useRef(null);
    
    useEffect(() => {
        props.stackRef(stackRef);
    }, []);

    return <NavigationContainer ref={stackRef}>
        <Stack.Navigator initialRouteName="Splash">
            {props.isLoggedIn ? (<Stack.Group>
                <Stack.Screen
                    name={'Home'}
                    component={Home}
                    navigationKey="home"
                    options={{ statusBarColor:"white"}}
                />
                <Stack.Screen
                    name={'Settings'}
                    component={Settings}
                    options={{ statusBarColor:"white"}}
                />
                <Stack.Screen
                    name={'Notification'}
                    component={Notification}
                    options={{ statusBarColor:"white"}}
                />
            </Stack.Group>) : (<Stack.Group>
                <Stack.Screen
                    name={'Login'}
                    component={Login}
                    options={{ statusBarColor:"white"}}
                />
                <Stack.Screen
                    name={'Splash'}
                    component={Splash}
                    options={{ headerShown:false, statusBarColor:"white"}}
                />
            </Stack.Group>)}

            <Stack.Group>
                <Stack.Screen
                    name={'Help'}
                    component={Help}
                    options={{ statusBarColor:"white"}}
                />
            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
}