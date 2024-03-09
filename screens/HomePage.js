import { View, Text, SafeAreaView, Image } from 'react-native'
import zoomer from '../assets/zoomer.png'
import NavOptions from '../components/NavOptions'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'

const HomePage = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
}, [])
  return (
    <SafeAreaView className={`bg-white h-full`}>
      <View className={`p-5 `}>
        <View className={`w-full flex-row items-center`}>
          <Image
            style={{ width: 100, height: 100, resizeMode: "contain" }}
            className={``}
            source={{
              uri: Image.resolveAssetSource(zoomer).uri
            }}
          />
          <Text className={`mt-2 text-4xl font-extrabold`}>Zoomer.</Text>
        </View>
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomePage