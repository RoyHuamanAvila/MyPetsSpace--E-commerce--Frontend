import { View, StyleSheet, Text, ScrollView } from "react-native"
import { Entypo } from '@expo/vector-icons';
import CardItem from "../components/CardItem";

const Profile = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 60 }}>
                    <View style={styles.profileContainer}>

                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.title}>Louis Saville</Text>
                        <Text style={styles.text}>Usuario reciente</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: 40 }}>
                    <Entypo name="location-pin" size={24} color="#fff" />
                    <Text style={styles.text}>Lima, Lima, Perú</Text>
                </View>
                <View style={styles.flexContainer}>
                    <View>
                        <Text style={styles.title}>150</Text>
                        <Text style={styles.text}>Posts</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>215</Text>
                        <Text style={styles.text}>Sales</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>100</Text>
                        <Text style={styles.text}>Followers</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
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
