import { Text, View, StyleSheet, TouchableOpacity, Pressable, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { appURLs } from '../../../enums/url'

export default function placeOrder(props) {

    // const [text, setText] = useState('');

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
    const add =() =>{
        console.log("Add");

        var url =  appURLs.BaseURL + 'addOrderDetails';
        var data = {
			firstName,
			lastName,
			title,
			phoneNumber,
			email,
            address
		};

        console.log(data);

        axios.post(url, data)
			.then((res) => {
				props.navigation.navigate('details');
			})
			.catch((error) => {
				alert('Error in adding the details!');
			});

    };

    return (
        <View style={styles.container}>
           <Text style={styles.des}>Lets help you place the order!</Text>
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
            <View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder={'Enter Your phone number'}
					placeholderTextColor={'#858277'}
					onChangeText={(phoneNumber) => handlePhone(phoneNumber)}
				/>
			</View>
            <View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder={'Enter Your email'}
					placeholderTextColor={'#858277'}
					onChangeText={(email) => handleEmail(email)}
				/>
			</View>
            <View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder={'Enter Your address'}
					placeholderTextColor={'#858277'}
					onChangeText={(address) => handleAddr(address)}
				/>
			</View>

			<TouchableOpacity style={styles.addBtn} onPress={add}>
				<Text style={styles.addText}>Add</Text>
			</TouchableOpacity>

            <TouchableOpacity style={styles.addBtn} onPress={() => props.navigation.navigate('details')}>
				<Text style={styles.addText}>View History</Text>
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
