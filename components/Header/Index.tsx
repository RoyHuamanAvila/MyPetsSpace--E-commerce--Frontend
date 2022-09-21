import { LinearGradient } from 'expo-linear-gradient';
import { Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AdsCarousel from '../AdsCarousel/Index';
import Search from '../Search/Index';

const Header = () => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.0, 0.37, 1]}
            colors={['#0b863c', '#23b54e', '#57af3a']}
            style={styles.background}>

            <Text style={styles.title}>Shop</Text>
            <StatusBar style='light' />
            <AdsCarousel />
            <Search />
        </LinearGradient>
    )
}


const styles = StyleSheet.create(
    {
        background: {
            height: 250,
            zIndex: 10
        },
        title: {
            marginTop: 50,
            margin: 20,
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold'
        }
    }
)
export default Header;
