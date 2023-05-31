import { useEffect, useState } from "react"
import { View } from "react-native"
import { FlatList } from "react-native-web"


export default function ViewWarehouse({ props }) {

    // get warehouse id from router
    const { id } = props.match.params

    // get warehouse data from api
    const [warehouse, setWarehouse] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(json => jsonTransformer(json.products))

    }, [id])

    return (
        <View
            style={styles.container}
        >
            <View
                style={{ ...styles.containerInner, ...styles.containerCenter }}
            >
                <FlatList
                    data={warehouses}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item, index }) => {
                        return (
                            <View
                                style={styles.listItem}
                            >
                                {item.title}
                            </View>
                        )

                    }}
                />
            </View>
        </View>

    )

