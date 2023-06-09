/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	ScrollView,
	TouchableOpacity,
	Alert,
} from 'react-native';

import axios from 'axios';
import { appURLs } from '../../../enums/url';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import MainContainer from '../MainContainer';
import { useRoute } from '@react-navigation/native';

const updateDetails = (props) => {
	const [firstName, setFirstName] = useState('');
	const [email, setEmail] = useState('');
	const [lastName, setLastName] = useState('');
	const [title, setTitle] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const route = useRoute();


	const [data, setData] = useState({});
	// const [id, setid] = useState();
    const id = route.params.id;
    console.log("id",id);

    const handleDelete = () => {
        // const route = useRoute();
        // const id = route.params.id;

		console.log("id", id);

		var deleteAPI = appURLs.BaseURL + `deleteDetailsById/${id}`;
        axios.delete(deleteAPI).then(res => {
            alert("Deleted Successfully")
            props.navigation.navigate('placeOrder');
        })
	};

	const handleConfOrder= () =>{
		alert("Order Confirmed")
            props.navigation.navigate('cusHome');
	}

	React.useEffect(() => {
		var url = appURLs.BaseURL + `getDetails/${route.params.id}`;
		axios.get(url).then((res) => {
            console.log("data",res.data.data);
            setFirstName(res.data.data[0].firstName);
            setLastName(res.data.data[0].lastName);
            setTitle(res.data.data[0].title);
            setPhoneNumber(res.data.data[0].phoneNumber);
            setEmail(res.data.data[0].email);        
            setAddress(res.data.data[0].address);
        });
	}, []);

	const onChangeFName = (firstName) => {
		setFirstName(firstName);
	};

    const onChangeLName = (lastName) => {
		setLastName(lastName);
	};

    const onChangeTitle = (title) => {
		setTitle(title);
	};

    const onChangePhoneNo = (phoneNumber) => {
		setPhoneNumber(phoneNumber);
	};

	const onChangeEmail = (email) => {
		setEmail(email);
	};

	const onChangeAddress = (address) => {
		setAddress(address);
	};


	//create USer
	const update = () => {
		var url = appURLs.BaseURL + `updateDetailsById/${id}`;
		var data = {
			firstName,
            lastName,
			email,
			phoneNumber,
			title,
			address,
		};

		console.log("created data",data);

		axios
			.post(url, data)
			.then((res) => {
				props.navigation.navigate('placeOrder');
				alert('Updated Successfully');
			})
			.catch((error) => {
				alert('Error in updating');
			});
	};

	return (
		<View style={styles.container}>
			<ScrollView>
				<Text style={styles.title}>Update saved detials</Text>

				<View style={styles.card}>
                <Text style={styles.title2}>Title: </Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder='User Role'
                        id='title'
                        value={title}
                        placeholderTextColor={'#858277'}
                        onChangeText={(title) => onChangeTitle(title)}
                    />
                </View>
					<Text style={styles.title2}>First name: </Text>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							onChangeText={(firstName) => onChangeFName(firstName)}
							placeholderTextColor={'#858277'}
							value={firstName}
                            id='firstName'
						/>
					</View>
                    <Text style={styles.title2}>Last name: </Text>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							onChangeText={(lastName) => onChangeLName(lastName)}
							placeholderTextColor={'#858277'}
							value={lastName}
                            id='lastName'
						/>
					</View>
					<Text style={styles.title2}>Email: </Text>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='User Email'
							value={email}
                            id='email'
							placeholderTextColor={'#858277'}
							onChangeText={(email) => setEmail(email)}
						/>
					</View>
                    <Text style={styles.title2}>Phone number: </Text>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='User Email'
							value={phoneNumber}
                            id='phoneNumber'
							placeholderTextColor={'#858277'}
							onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
						/>
					</View>
					<Text style={styles.title2}>Address: </Text>

					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							value={address}
                            id='address'
							placeholder='Contact Number'
							placeholderTextColor={'#858277'}
							onChangeText={(address) => setAddress(address)}
						/>
					</View>
					
					<TouchableOpacity style={styles.registerBtn} onPress={update}>
						<Text style={styles.loginText}>Update</Text>
					</TouchableOpacity>

                    <TouchableOpacity style={styles.deleteBtn} onPress={handleDelete}>
						<Text style={styles.loginText}>Delete</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.confBtn} onPress={handleConfOrder}>
						<Text style={styles.loginText}>Confirm Order</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
};

export default updateDetails;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	card: {
		marginTop: 40,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#B8BFB9',
		width: 350,
		height: 'auto',
		borderRadius: 10,
	},
	image: {
		width: 150,
		height: 150,
		alignSelf: 'center',
	},
	topic: {
		marginLeft: 100,
		marginTop: 5,
	},
	inputView: {
		width: '70%',
		height: 45,
		margin: 10,
		backgroundColor: '#E8E8E8',
		borderRadius: 15,
		alignItems: 'center',
	},
	TextInput: {
		flex: 1,
		color: '#000000',
		height: 50,
		marginLeft: 15,
		padding: 10,
	},
	registerBtn: {
		backgroundColor: '#DCDC24',
		width: 300,
		height: 50,
		justifyContent: 'center',
		margin: 10,
		marginLeft: 20,
	},
	deleteBtn: {
		backgroundColor: '#B22525',
		width: 300,
		height: 50,
		justifyContent: 'center',
		margin: 10,
		marginLeft: 20,
	},
	confBtn: {
		backgroundColor: '#539061',
		width: 300,
		height: 50,
		justifyContent: 'center',
		margin: 10,
		marginLeft: 20,
	},
	loginText: {
		color: '#000000',
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
	},
	title: {
		fontSize: 40,
		fontWeight: 'bold',
		color: '#000000',
		textAlign: 'center',
		marginTop: '5%',
	},
	title2: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#000000',
		textAlign: 'left',
		marginTop: '5%',
	},
	des: {
		fontSize: 20,
		textAlign: 'center',
	},
});
