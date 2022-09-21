import Header from "../components/Header/Index";
import { View, StyleSheet } from 'react-native';
import TabCarousel from "../components/TabsCarousel/Index";

const Home = () => {
    return (
        <View style={styles.screen}>
            <Header />
            <TabCarousel />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f1f1f1'
    }
})
export default Home;
