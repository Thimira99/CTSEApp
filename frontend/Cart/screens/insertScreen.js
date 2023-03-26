import { Text, View, StyleSheet, TouchableOpacity, Pressable, Button, TextInput } from 'react-native';
import React, { useLayoutEffect, useState, useEffect } from "react";
import axios from 'axios';
// import { appURLs } from '../../../enums/url'
import { useNavigation, useNavigationState } from "@react-navigation/native";

export default function insertScreen(props) {

    // const [text, setText] = useState('');

    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);
  
    // side effects
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [title, setTitle] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleEmail = (email) => {
        setEmail(email);
    };

    const handleFname = (firstName) => {
        setFirstName(firstName);
    };

    const handleLname = (lastName) => {
        setLastName(lastName);
    };

    const handleTile = (title) => {
        setTitle(title);
    };

    const handlePhone = (phoneNumber) => {
        setPhoneNumber(phoneNumber);
    };

    const handleAddr = (address) => {
        setAddress(address);
    };


    //add
    const add = () => {


        var url = "http://192.168.198.79:8080/user/createMainCategory";
        var data = {
            "id": title,
            "CategoryName": firstName,
            "Description": lastName
        };

        console.log(data);

        axios.post(url, data)
            .then((res) => {
                console.log("Add");
            })
            .catch((error) => {
                alert('Error in adding the details!');
            });

    };

    return (
        <View style={styles.container}>
            <Text style={styles.des}>Main Category Table</Text>
            {/* <Image style={styles.image} source={require('../assets/login.png')} /> */}
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder={'Enter the title'}
                    placeholderTextColor={'#858277'}
                    onChangeText={(title) => handleTile(title)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder={'Enter First Your name'}
                    placeholderTextColor={'#858277'}
                    onChangeText={(firstName) => handleFname(firstName)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder={'Enter Your last name'}
                    placeholderTextColor={'#858277'}
                    onChangeText={(lastName) => handleLname(lastName)}
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
