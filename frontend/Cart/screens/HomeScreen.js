import { useNavigation, useNavigationState } from "@react-navigation/native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { Image, LogBox, ScrollView, Text, TextInput, Touchable, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  ListBulletIcon
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import SanityClient from "../sanity";
import axios from "axios";

const HomeScreen = () => {
  // state and hooks
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  // side effects
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
   
    var url = "http://192.168.198.79:8080/user/getallCategories";
        // var data = {
        //     "id": title,
        //     "CategoryName": firstName,
        //     "Description": lastName
        // };

      

        axios.get(url)
            .then((res) => {
                
                setFeaturedCategories(res.data.users)
               
            })
            .catch((error) => {
                alert('Error in adding the details!');
            });

    


  }, []);


  return (
    <>
      <SafeAreaView className="bg-white pt-5">
        {/* header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            }}
            className=" h-7 w-7 bg-gray-300 p-4  rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
            <Text className="font-bold text-xl  ">
              Current location <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FavList");
            
            }}>
            <ListBulletIcon size={25} color="#00CCBB" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("insertPage");
            
            }}>
            <UserIcon size={25} color="#00CCBB" />
          </TouchableOpacity>




        </View>

        {/* search bar */}
        <View className="flex-row mx-4 items-center space-x-2 pb-2">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 rounded-md">
            <MagnifyingGlassIcon color="gray" />
            <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>

        {/* body */}
        <ScrollView className="bg-gray-100" contentContainerStyle={{ paddingBottom: 100 }}>
          {/* categories */}
          <Categories />

          {/* featured rows */}
          {featuredCategories.map((category) => (
            <FeaturedRow
              key={category._id}
              title={category.CategoryName}
              description={category.Description}
              id={category.id}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
