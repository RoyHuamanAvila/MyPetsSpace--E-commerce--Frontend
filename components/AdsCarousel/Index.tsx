import { ScrollView, StyleSheet, View, Image } from "react-native"

const AdItem = () => {
    return (
        <View style={styles.adItem}>
            <Image style={styles.adImage} source={{ uri: 'https://pbs.twimg.com/media/D4nBsw5UYAAZwIh?format=jpg&name=large' }} />
        </View>
    )
}

const AdsCarousel = () => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.scroll}>
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
    adImage: {
        flex: 1,
        borderRadius: 5,
    },
    scroll: {
        flexDirection: "row",
        marginLeft: 20
    }
})

export default AdsCarousel;
