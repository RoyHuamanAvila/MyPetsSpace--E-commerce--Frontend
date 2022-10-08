import * as React from 'react';
import { ScrollView, View, useWindowDimensions } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import CardItem from '../CardItem';
import axios from 'axios';
import { productType } from '../../types';
import { EvilIcons } from '@expo/vector-icons';

const renderTabBar = (props: any) => (
    <TabBar
        {...props}
        activeColor={'#0b863c'}
        indicatorStyle={{ backgroundColor: '#0b863c' }}
        style={{ backgroundColor: '#fff', paddingTop: 15 }}
        labelStyle={{ color: '#5b5b5c', fontWeight: '500', textTransform: 'none' }}
    />
);


const TabCarousel = () => {
    const [products, setProducts] = React.useState<productType[]>();

    React.useEffect(() => {
        const useAxios = async () => {
            const axiosData = await axios.get('https://us-central1-mypetsspace-b4e25.cloudfunctions.net/app/api/product');
            setProducts(axiosData.data);
        }
        useAxios();
    }, [])


    const FirstRoute = () => (
        <ScrollView contentContainerStyle={{ backgroundColor: '#f1f1f1', flexWrap: 'wrap', flexDirection: 'row', margin: 20, justifyContent: 'space-evenly' }} >
            {
                !products && (
                    <EvilIcons name="spinner-3" size={24} color="black" />
                )
            }
            {
                products && (
                    products.map((p, index) => <CardItem key={index} {...p} />)
                )
            }
        </ScrollView>
    );

    const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#f1f1f1' }} />
    );

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'food', title: 'Food' },
        { key: 'toys', title: 'Toys' },
    ]);

    const renderScene = SceneMap({
        food: FirstRoute,
        toys: SecondRoute,
    });

    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    )
}

export default TabCarousel;
