import { Text } from "react-native-paper";
import { View } from "react-native";
import React from "react";


/**
 * @function
 * @author          Fausto Rodrigo Toloi <faustortoloi@gmail.com>
 * @name            HomeScreen
 * @description     Exibe a página incial
 * @param           {object} props Properties inject by router
 * @param           {object} props.location Location object from react router
 * @returns         {React.Component} HomeScreen component
 * @version         1.0.0
 * @since           0.1.0
 */
export default function HomeScreen({ props }) {
    return (
        <View>
            <Text>Carregando...</Text>
        </View>
    )
}