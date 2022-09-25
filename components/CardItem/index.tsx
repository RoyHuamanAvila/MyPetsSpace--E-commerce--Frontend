import { View, Text, StyleSheet, Image } from "react-native"
const CardItem = () => {
    return (
        <View style={Styles.card}>
            <Image style={Styles.imageProduct} source={{ uri: 'https://royalpet.pe/wp-content/uploads/2020/06/MIMASKOT-CARNE-CEREAL-15KG-806623.png' }} />
            <Text style={Styles.name}>Mimaskot Adulto 21 kg</Text>
        </View>
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
