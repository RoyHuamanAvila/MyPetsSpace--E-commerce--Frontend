import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0.0, 0.37, 1]}
        colors={['#0b863c', '#23b54e', '#57af3a']}
        style={styles.header}>
        <Text style={styles.title}>Home</Text>
        <View style={styles.searchBar}>
          <TextInput placeholder='Search for food, toys... ' />
        </View>
        <ScrollView horizontal={true} contentContainerStyle={styles.content_banners_scroll}>
          <View style={styles.banner}>
            <Image style={styles.banner_image} source={{
              uri:
                'https://superpet.pe/modules/ps_imageslider/images/04aea0404a89ce78e7da3e9959d935e63e452515_PROPLAN_Banner_S751X361_B.jpg'
            }} />
          </View>
          <View style={styles.banner}>
            <Image style={styles.banner_image} source={{
              uri:
                'https://pbs.twimg.com/media/D4nBsw5UYAAZwIh?format=jpg&name=large'
            }} />
          </View>
          <View style={styles.banner}>
            <Image style={styles.banner_image} source={{
              uri:
                'https://www.purina-latam.com/sites/g/files/auxxlc391/files/2021-08/JUNTOS-LE-DAMOS-MAS-BANNER-.jpg'
            }} />
          </View>
        </ScrollView>
      </LinearGradient>
      <StatusBar style="auto" />
      <View style={styles.tabs}>
        <Text style={styles.itemTab}>Food</Text>
        <Text style={styles.itemTab}>Toys</Text>
        <Text style={styles.itemTab}>Articles</Text>
        <Text style={styles.itemTab}>Vet</Text>
      </View>
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.contentScroll}>
          <View style={styles.card}>
            <Image style={styles.card_image} source={{
              uri: 'https://royalpet.pe/wp-content/uploads/2020/06/MIMASKOT-CARNE-CEREAL-15KG-806623.png'
            }} />
          </View>
          <View style={styles.card}>
            <Image style={styles.card_image} source={{
              uri: 'https://royalpet.pe/wp-content/uploads/2020/06/GATO-ADULTO-SALMON-ATUN-SARDINA.png'
            }} />
          </View>
          <View style={styles.card}>
            <Image style={styles.card_image} source={{
              uri: 'https://www.whiskas.com.ar/wp-content/uploads/2018/12/LataWhiskasCarne-01.png'
            }} />
          </View>
          <View style={styles.card}>
            <Image style={styles.card_image} source={{
              uri: 'https://royalpet.pe/wp-content/uploads/2020/06/Mockup-Frontal-Cordero_Cereales-RMG-RicoCan.png'
            }} />
          </View>
          <View style={styles.card}>
            <Image style={styles.card_image} source={{
              uri: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_360/public/Dog-Chow-Maximus-Dry-Salud-Visible-Cachorros-Medianos-y-Grandes.png?itok=jw84P_rY'
            }} />
          </View>
          <View style={styles.card}>
            <Image style={styles.card_image} source={{
              uri: 'https://royalpet.pe/wp-content/uploads/2020/06/Mockup-Frontal-Atun_Sardina_Truchas-RicoCat.png'
            }} />
          </View>
          <View style={styles.card}>
            <Image style={styles.card_image} source={{
              uri: 'https://www.pedigree.com.ar/wp-content/uploads/2018/09/PEDIGREE-ADULTO-PEQUE.png'
            }} />
          </View>
          <View style={styles.card}>
            <Image style={styles.card_image} source={{
              uri: 'https://estiloperuano.com/wp-content/uploads/2020/05/Comida-para-Perro-THOR-Adulto-Sabor-Cl%C3%A1sico-Bolsa-25Kg.png'
            }} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.navBar}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 3,
    width: '100%',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    marginTop: 50,
    marginBottom: 10,
    color: '#fff',
    alignSelf: 'flex-start'
  },
  tabs: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
    flex: 0.75
  },
  itemTab: {
    marginRight: 40,
    fontWeight: '500'
  },
  navBar: {
    flex: 0.5,
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 10,
    zIndex: 10
  },
  content: {
    flex: 5,
    width: '100%',
    backgroundColor: '#f1f1f1',
  },
  content_banners_scroll: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20
  },
  banner: {
    width: 200,
    height: 110,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginRight: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  banner_image: {
    borderRadius: 5,
    flex: 1,
  },
  contentScroll: {
    margin: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  searchBar: {
    width: '85%',
    zIndex: 90,
    height: 40,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    position: 'absolute',
    bottom: -20,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: 170,
    height: 140,
    marginBottom: 10,
    borderRadius: 15,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 1,
  },
  card_image: {
    flex: 1,
    resizeMode: 'contain',
    borderRadius: 15,
  }
});
