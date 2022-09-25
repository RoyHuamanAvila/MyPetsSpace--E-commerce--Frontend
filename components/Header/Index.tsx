import { LinearGradient } from 'expo-linear-gradient';
import { Text, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AdsCarousel from '../AdsCarousel/Index';
import Search from '../Search/Index';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.0, 0.37, 1]}
            colors={['#0b863c', '#23b54e', '#57af3a']}
            style={styles.background}>

            <View style={{
                flexDirection: 'row',
                alignItems: 'baseline',
                justifyContent: 'space-between'
            }}>
                <Text style={styles.title}>Shop</Text>
                <View style={styles.buttons_top}>
                    <MaterialCommunityIcons style={styles.heart} name="cards-heart-outline" size={24} color="white" />
                    <Ionicons name="cart-outline" size={24} color="white" />
                </View>
            </View>
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
        },
        heart: {
            marginRight: 20
        },
        buttons_top: {
            flexDirection: 'row',
            marginRight: 30
        }
    }
)
export default Header;
