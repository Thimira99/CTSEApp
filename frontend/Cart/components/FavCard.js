import { View, Text, TouchableOpacity, Image } from "react-native";

import React from "react";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

export default function FavCard({
  idoftheDish,
  imgUrl,
  title,
  genre,
  address,
  short_description,
  
  
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
            idoftheDish,
            imgUrl,
            title,
            genre,
            address,
            short_description,
            
       
        });
      }}
      className="bg-white mb-5 shadow-md rounded-sm"
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-84 rounded-sm"
      />
      <View className="px-3 pb-4 space-y-1">
        <Text className="font-bold text-xl pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">4</Text> . {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
