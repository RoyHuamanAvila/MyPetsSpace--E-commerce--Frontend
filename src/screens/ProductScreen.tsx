import { View, Image, Text, StyleSheet, Pressable, ScrollView } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import CounterInput from "react-native-counter-input";
import { PropsProduct } from "../../types";

const ProductScreen = ({ route }: PropsProduct) => {
    const productData = route.params;
    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <View>
                <View style={styles.productContainer}>
                    <Image style={styles.productImage} source={{ uri: `${productData.image}` }} />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.nameProduct}>
                        {productData.name}
                    </Text>
                    <AntDesign style={{ flex: 1 }} name="hearto" size={24} color="black" />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                    <CounterInput
                        horizontal
                        increaseButtonBackgroundColor="#308b4a"
                        decreaseButtonBackgroundColor="#308b4a"
                        onChange={(counter) => {
                            console.log("onChange Counter:", counter);
                        }}
                    />
                    <Text style={{ fontSize: 30, marginLeft: 20 }}>
                        {productData.price}
                    </Text>
                </View>
                <View>
                    <Text style={styles.subtitle}>Description</Text>
                    <Text style={styles.text}>
                        {productData.description}
                    </Text>
                </View>
                <View>
                    <Text style={styles.subtitle}>About this shop</Text>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Image
                            style={styles.shopLogo}
                            source={{
                                uri: 'https://www.adobe.com/es/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium'
                            }} />
                        <View>
                            <Text>Golden View Shop</Text>
                            <Text>500 followers</Text>
                            <Pressable style={styles.buttonVisitShop}>
                                <Text style={{ textAlign: "center" }}>View shop</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
            <Pressable style={styles.buttonBuy}>
                <Text style={styles.textButton}>Buy</Text>
            </Pressable>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flexDirection: "column",
        justifyContent: "space-between"
    },
    productContainer: {
        backgroundColor: '#fff',
        height: 200,
        width: '95%',
        alignSelf: "center",
        marginTop: 10,
        borderRadius: 5
    },
    productImage: {
        flex: 1,
        resizeMode: "contain"
    },
    nameProduct: {
        margin: 10,
        fontSize: 18,
        fontWeight: "500",
        flex: 6
    },
    subtitle: {
        margin: 10,
        fontSize: 16,
        fontWeight: "400"
    },
    text: {
        marginLeft: 10,
        marginBottom: 30,
        fontSize: 14,
    },
    buttonBuy: {
        width: "95%",
        backgroundColor: '#308b4a',
        alignSelf: "center",
        borderRadius: 5,
        marginBottom: 20
    },
    buttonVisitShop: {
        backgroundColor: '#b2bcbc',
        marginTop: 10,
        padding: 5,
        borderRadius: 5
    },
    textButton: {
        fontSize: 18,
        color: '#fff',
        textAlign: "center",
        margin: 10
    },
    shopLogo: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 50
    }
})

export default ProductScreen;
