import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "./screens/LoadingScreen";
import React from "react";


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
            <Stack.Navigator>
                <Stack.Screen name="Home" component={LoadingScreen} />
                <Stack.Screen name="NovaTela" component={LoadingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}