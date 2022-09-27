import { View, StyleSheet, Text, ScrollView, Image } from "react-native"
import { Entypo } from '@expo/vector-icons';
import CardItem from "../../components/CardItem";
import { PropsProfile, userType } from "../../types";
import { productType } from "../../types";
import { useState, useEffect } from 'react';
import axios from "axios";
const Profile = ({ route }: PropsProfile) => {
    const profile = route.params;
    const [products, setProducts] = useState<productType[]>();

    useEffect(() => {
        const axiosData = async () => {
            const data: userType = await (await axios.get(`https://mypetsspace.onrender.com/user/${profile._id}`)).data;

            setProducts(data.listProducts);
        }

        axiosData();
    })

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 60 }}>
                    <View style={styles.profileContainer}>
                        <Image style={styles.imageProfile} source={{ uri: `${profile.imagePerfil}` }} />
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.title}>{profile.name}</Text>
                        <Text style={styles.text}>Usuario reciente</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: 40 }}>
                    <Entypo name="location-pin" size={24} color="#fff" />
                    <Text style={styles.text}>{profile.direction}</Text>
                </View>
                <View style={styles.flexContainer}>
                    <View>
                        <Text style={styles.title}>{products?.length}</Text>
                        <Text style={styles.text}>Posts</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>{profile.sales}</Text>
                        <Text style={styles.text}>Sales</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>{profile.followers}</Text>
                        <Text style={styles.text}>Followers</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <Entypo style={{ alignSelf: "center", marginTop: 15, marginBottom: 15 }} name="shop" size={24} color="#0b863c" />
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {
                        products && (
                            products.map(p => <CardItem {...p} />)
                        )
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#308b4a'
    },
    header: {
        flex: 0.65,
        backgroundColor: '#308b4a'
    },
    description_container: {

    },
    title: {
        fontSize: 24,
        color: '#fff',
        fontWeight: "500"
    },
    text: {
        color: '#fff',
    },
    profileContainer: {
        backgroundColor: 'white',
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 20,
        marginLeft: 40
    },
    imageProfile: {
        flex: 1,
        borderRadius: 40
    },
    flexContainer: {
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    container: {
        flex: 1,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        backgroundColor: '#f1f1f1',
        overflow: "hidden"
    },
    scrollContainer: {
        margin: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    }
})

export default Profile;
