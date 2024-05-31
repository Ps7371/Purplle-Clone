import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'
import ItemCardDisplay from './ItemCardDisplay'

const { width, heigth } = Dimensions.get('window')


const ItemCard = ({ data }) => {
    const [dataList, setDataList] = useState(data)

    useEffect(()=> {
        setDataList(data)

    })

    if (data && data.length) {
        return (
            <View>
                <FlatList data={data}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    initialNumToRender={2} 
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <ItemCardDisplay item={item} />
                    }}
                />

            </View>
        )
    }

    return null
}


const styles = StyleSheet.create({
})

export default ItemCard