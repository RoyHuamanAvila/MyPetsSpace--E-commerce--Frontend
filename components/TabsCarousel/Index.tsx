import * as React from 'react';
import { ScrollView, View, useWindowDimensions } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import CardItem from '../CardItem';

const renderTabBar = (props: any) => (
    <TabBar
        {...props}
        activeColor={'#0b863c'}
        indicatorStyle={{ backgroundColor: '#0b863c' }}
        style={{ backgroundColor: '#fff', paddingTop: 15 }}
        labelStyle={{ color: 'black', fontWeight: '500', textTransform: 'none' }}
    />
);


const TabCarousel = () => {
    const FirstRoute = () => (
        <ScrollView contentContainerStyle={{ backgroundColor: '#f1f1f1', flexWrap: 'wrap', flexDirection: 'row', margin: 20, justifyContent: 'space-evenly' }} >
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
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
