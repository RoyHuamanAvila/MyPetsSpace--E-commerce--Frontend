import { Pressable, Text, StyleSheet, Image } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { productType } from "../../types";

const CardItem = (product: productType) => {
    const navigation = useNavigation();
    return (
        <Pressable style={Styles.card} onPress={() => navigation.navigate("product" as never, product as never)}>
            <Image style={Styles.imageProduct} source={{ uri: `${product.image}` }} />
            <Text style={Styles.name}>{product.name}</Text>
        </Pressable>
    )
}

const Styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        width: 170,
        height: 140,
        marginBottom: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
        borderRadius: 8
    },
    name: {
        textAlign: "center",
        margin: 10,
        color: '#5b5b5c',
        fontSize: 12
    },
    imageProduct: {
        flex: 1,
        resizeMode: "contain",
        marginTop: 10
    },
    mark: {
        position: "absolute",
        right: 0,
        top: 0
    }
})

export default CardItem;
