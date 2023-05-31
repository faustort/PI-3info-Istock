import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "./screens/LoadingScreen";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListWarehousesScreen from "./screens/ListWarehousesScreen";
import ViewWarehouse from "./screens/Warehouses/ViewWarehouse";


const Stack = createNativeStackNavigator();


/**
 * @author          Fausto Rodrigo Toloi <faustortoloi@gmail.com>
 * @description     Navegação principal do aplicativo
 * @version         1.0.1
 * @since           1.0.0
 *
 * @export          RootNavigation função relacionada ao roteamento de telas
 * @return          {React.Component} Navegação principal 
 */
export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="LoadingScreen"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
                <Stack.Screen name="MBTNavigator" component={MBTNavigator} />
                <Stack.Screen name="ViewWarehouse" component={ViewWarehouse} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

/** @type {JSX.Element} */
const MTB = createMaterialBottomTabNavigator();

export function MBTNavigator() {
    return (
        <MTB.Navigator>
            <MTB.Screen
                name="Home"
                component={HomeScreen}
                // create options with Icon, Icon color, description etc
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <MTB.Screen
                name="ListWarehouses"
                component={ListWarehousesScreen}
                // create options with Icon, Icon color, description etc
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="warehouse" color={color} size={26} />
                    ),
                }}
            />
        </MTB.Navigator>
    )
}