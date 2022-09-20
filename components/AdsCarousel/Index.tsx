import { ScrollView, StyleSheet, View } from "react-native"

const AdItem = () => {
    return (
        <View style={styles.adItem} />
    )
}

const AdsCarousel = () => {
    return (
        <ScrollView horizontal contentContainerStyle={styles.scroll}>
            <AdItem />
            <AdItem />
            <AdItem />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    adItem: {
        width: 200,
        height: 110,
        backgroundColor: '#fff',
        marginRight: 10,
        borderRadius: 5,
    },
    scroll: {
        flexDirection: "row",
        marginLeft: 20
    }
})

export default AdsCarousel;
