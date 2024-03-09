import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ride from '../assets/ride.jpg'
import food from '../assets/food.png'
import laundry from '../assets/laundry.jpg'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/core'


const NavOptions = () => {

    const navigation = useNavigation()

    const data = [
        {
            id: "123",
            title: "Get a ride",
            image: ride,
            screen: "MapScreen"
        },
        {
            id: "456",
            title: "Order Food",
            image: food,
            screen: "EatScreen"
        },
        {
            id: "789",
            title: "Do Laundry",
            image: laundry,
            screen: "LaundryScreen"
        },
    ]


    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <TouchableOpacity className={`p-2 pl-6 pb-8 pt-4 m-2 w-40 shadow-xl border-[1px] border-gray-300 items-center rounded-lg`}
                onPress={()=>navigation.navigate(item.screen)}
                >
                    <View className={``}>
                        <Image
                            style={{ width: 120, height: 120, resizeMode: "contain", }}
                            className={``}
                            source={{
                                uri: Image.resolveAssetSource(item.image).uri
                            }} />
                        <Text className={`mt-2 text-md font-semibold`}>{item.title}</Text>
                        <Icon
                            type="antdesign"
                            name="arrowright"
                            color="white"
                            className={`w-10 mt-4 p-2 bg-black rounded-full`}
                        />
                    </View>
                </TouchableOpacity>
            )}

        />
    )
}

export default NavOptions