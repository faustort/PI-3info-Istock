import { Text } from "react-native-paper";
import { View } from "react-native";
import { styles } from "../utils/styles";
import { useEffect } from "react";


/**
 * @author          Fausto Rodrigo Toloi <faustortoloi@gmail.com>
 * @since           0.1.0
 * @version         1.0.0
 *
 * @description     LoadingScreen função que reliza a renderização da tela de carregamento
 * @param           {Object} navigation Objeto de navegação do React Navigation
 * @export          {Function} LoadingScreen
 * @return          {React.Component} 
 */
export default function LoadingScreen({ navigation }) {

    useEffect(() => {
        // 
        setTimeout(() => {
            navigation.navigate('MBTNavigator')
        }, 500)
    }, [])

    return (
        <View
            style={styles.container}
        >
            <Text>Carregando...</Text>
        </View>
    )
}