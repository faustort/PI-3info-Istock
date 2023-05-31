import { Animated, View } from "react-native";
import { Avatar, Surface, Text, TouchableRipple } from "react-native-paper";
import { styles } from "../../utils/styles";
import { useEffect, useRef, useState } from "react";

/**
 * @author Fausto Rodrigo Toloi <faustortoloi@gmail.com>
 * @since 0.1.0
 * @version 1.0.0
 * 
 * @param {Object} props
 * @description ListWarehousesScreen função que reliza a renderização da tela de listagem de armazéns
 * @returns {React.Component} ListWarehousesScreen component
 */
export default function ListWarehousesScreen({ navigation }) {
    const [warehouses, setWarehouses] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const scrollY = useRef(new Animated.Value(0)).current;


    useEffect(() => {
        fetch('https://dummyjson.com/products/')
            .then(res => res.json())
            .then(json => jsonTransformer(json.products))

    }, [])

    function jsonTransformer(json) {
        // const resultGabarito = {
        //     "id": 1,
        //     "title": "iPhone 9",
        //     "description": "An apple mobile which is nothing like apple",
        //     "price": 549,
        //     "discountPercentage": 12.96,
        //     "rating": 4.69,
        //     "stock": 94,
        //     "brand": "Apple",
        //     "category": "smartphones",
        //     "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        //     "images": [
        //         "https://i.dummyjson.com/data/products/1/1.jpg",
        //         "https://i.dummyjson.com/data/products/1/2.jpg",
        //         "https://i.dummyjson.com/data/products/1/3.jpg",
        //         "https://i.dummyjson.com/data/products/1/4.jpg",
        //         "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        //     ]
        // }
        const result = [];
        for (let i = 0; i < json.length; i++) {
            const element = json[i];
            const newElement = {
                key: element.id,
                title: element.title,
                description: element.description,
                avatar: element.thumbnail
            }
            result.push(newElement)
        }
        console.log(result);
        setWarehouses(result)
    }

    return (
        <View
            style={styles.container}
        >
            <Text>Lista de armazéns</Text>
            <View style={styles.containerInner}>
                <Animated.FlatList
                    data={warehouses}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item, index }) => {
                        return (
                            <Animated.View>
                                <TouchableRipple
                                    onPress={() => {
                                        console.log('clicou')
                                        navigation.navigate("ViewWarehouse", { id: item.key })
                                    }}
                                    style={styles.surfaceTouch}
                                >
                                    <Surface style={styles.surface}>

                                        <View style={styles.surfaceInnerLeft}>
                                            <Avatar.Image size={52} source={{ uri: item.avatar }} />
                                        </View>
                                        <View
                                            style={styles.surfaceInnerRight}
                                        >
                                            <Text variant="titleMedium">
                                                {item.title}
                                            </Text>
                                            <Text variant="bodySmall">{item.description}</Text>
                                        </View>
                                    </Surface>
                                </TouchableRipple>
                            </Animated.View>
                        );
                    }}
                />
            </View>
        </View>
    )
}


