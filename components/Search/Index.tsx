import { SearchBar } from "@rneui/base"
import { StyleSheet, View } from 'react-native'
import { useState } from 'react';

const Search = () => {
    const [search, setSearch] = useState('');

    const updateSearch = (search: string) => {
        setSearch(search);
    };
    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Search for food, toys..."
                inputStyle={styles.placeholderStyle}
                inputContainerStyle={styles.backgroundInput}
                onChangeText={updateSearch}
                value={search}
                lightTheme
                containerStyle={styles.search} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    search: {
        width: '90%',
        height: 18,
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
    },
    backgroundInput: {
        backgroundColor: 'white',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 6,
        borderRadius: 10,
    },
    placeholderStyle: {
        fontSize: 14
    }
})

export default Search;
