import React, { useEffect, useState } from 'react'
import { FlatList, View, Text } from 'react-native'
// import repositories from '../data/repositories.js'
import CastListItem from './CastListItem.jsx'
import  ApiCats from '../data/ApiCats'

const CatsList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        ApiCats().then((response) => { setData(response) }).catch((error) => { console.log(error) })
    }, []);


    return (
        // <View></View>
        <FlatList
            data={data}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem={({ item: repo }) => (
                <CastListItem {...repo} />
            )}
        />
    )
}
export default CatsList