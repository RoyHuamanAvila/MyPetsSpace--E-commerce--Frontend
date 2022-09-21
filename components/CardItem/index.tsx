import { View, Text, StyleSheet, Image } from "react-native"

const CardItem = () => {
    return (
        <View style={Styles.card}>
            <Text style={Styles.name}>Mimaskot</Text>
            <Image style={Styles.imageProduct} source={{ uri: 'https://royalpet.pe/wp-content/uploads/2020/06/MIMASKOT-CARNE-CEREAL-15KG-806623.png' }} />
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
        marginTop: 10
    },
    imageProduct: {
        flex: 1,
        resizeMode: "contain"
    }
})

export default CardItem;
