import { Text, View, StyleSheet, TouchableOpacity, Pressable, Button, TextInput } from 'react-native';
import React, { useLayoutEffect, useState, useEffect } from "react";
import axios from 'axios';

// import { appURLs } from '../../../enums/url'
import { useNavigation, useNavigationState } from "@react-navigation/native";

export default function insertSubDish(props) {

    // const [text, setText] = useState('');
    const navigation = useNavigation();


    // side effects
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const [formData, setFormData] = useState({
        mainDishId: '',
        image: '',
        name: '',
        short_description: '',
        price: 0,
       
    });

    // const handleEmail = (email) => {
    //     setEmail(email);
    // };

    // const handleFname = (firstName) => {
    //     setFirstName(firstName);
    // };

    // const handleLname = (lastName) => {
    //     setLastName(lastName);
    // };

    // const handleTile = (title) => {
    //     setTitle(title);
    // };

    // const handlePhone = (phoneNumber) => {
    //     setPhoneNumber(phoneNumber);
    // };

    // const handleAddr = (address) => {
    //     setAddress(address);
    // };

    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    //add
    const add = () => {


        var url = "http://192.168.198.79:8080/user/createSubDishesCard";
        // var data = {
        //     "id": title,
        //     "CategoryName": firstName,
        //     "Description": lastName
        // };

        console.log(formData);

        axios.post(url, formData)
            .then((res) => {
                console.log("Add");
            })
            .catch((error) => {
                alert('Error in adding the details!');
            });

    };

    return (
        <View style={styles.container}>
            <Text style={styles.des}>Insert Sub Dish</Text>
            {/* <Image style={styles.image} source={require('../assets/login.png')} /> */}
            <View style={styles.inputView}>
                <TextInput
                    id="mainDishId"
                    name="mainDishId"
                    value={formData.mainDishId}
                    onChangeText={(value) => handleChange('mainDishId', value)}
                    placeholder="Main Dish ID"
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    id="image"
                    name="image"
                    value={formData.image}
                    onChangeText={(value) => handleChange('image', value)}
                    placeholder="Image"
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    id="name"
                    name="name"
                    value={formData.name}
                    onChangeText={(value) => handleChange('name', value)}
                    placeholder="Name"
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    id="short_description"
                    name="short_description"
                    value={formData.short_description}
                    onChangeText={(value) => handleChange('short_description', value)}
                    placeholder="Short Description"
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    id="price"
                    name="price"
                    value={formData.price}
                    onChangeText={(value) => handleChange('price', value)}
                    placeholder="Price"
                    keyboardType='numeric'
                />
            </View>







            <TouchableOpacity style={styles.addBtn} onPress={add}>
                <Text style={styles.addText}>Add</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addBtn} onPress={() => {
                navigation.navigate("insertDishes");
            }}>
                <Text style={styles.addText}>nextDishes</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        margin: 20,
    },
    input: {

        marginBottom: 20,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'

    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        backgroundColor: '#E8E8E8',
        borderRadius: 15,
        width: '70%',
        height: 45,
        marginBottom: 20,

        alignItems: 'center',
    },
    addBtn: {
        backgroundColor: '#00BFA6',
        width: 300,
        height: 50,
        justifyContent: 'center',
        margin: 10,
        marginTop: '20%',
        borderRadius: 10,
    },
    addText: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },


})
