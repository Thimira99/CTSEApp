/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
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
import { appURLs } from '../enums/url'

const RegisterScreen = (props) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [contactNumber, setContactNumber] = useState('');
	const [role, setRole] = useState('');

	const onChangeName = (name) => {
		setName(name);
	};

	const onChangeEmail = (email) => {
		setEmail(email);
	};

	const onChangePassword = (pass) => {
		setPassword(pass);
	};

	const onChangeContactNumber = (num) => {
		setContactNumber(num);
	};

	const onChangeRole = (role) => {
		setRole(role);
	};

	//create USer
	const register = () => {
		var url =  appURLs.BaseURL + 'user/createUser';
		var data = {
			name,
			email,
			password,
			contactNumber,
			role,
		};

		console.log(data);

		axios
			.post(url, data)
			.then((res) => {
				props.navigation.navigate('Login');
			})
			.catch((error) => {
				alert('Not Registered');
			});
	};

	return (
		<View style={styles.container}>
			<ScrollView>
				<Text style={styles.title}>Welcome Onboard!</Text>
				<Text style={styles.des}>Let’s help you meet up the tasks</Text>

				<View style={styles.card}>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='Enter Name'
							placeholderTextColor={'#858277'}
							onChangeText={(name) => onChangeName(name)}
						/>
					</View>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='User Email'
							placeholderTextColor={'#858277'}
							onChangeText={(email) => onChangeEmail(email)}
						/>
					</View>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='Password'
							placeholderTextColor={'#858277'}
							secureTextEntry={true}
							onChangeText={(pass) => onChangePassword(pass)}
						/>
					</View>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='Contact Number'
							placeholderTextColor={'#858277'}
							secureTextEntry={true}
							onChangeText={(num) => onChangeContactNumber(num)}
						/>
					</View>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='User Role'
							placeholderTextColor={'#858277'}
							onChangeText={(role) => onChangeRole(role)}
						/>
					</View>
				</View>
				<TouchableOpacity style={styles.registerBtn} onPress={register}>
					<Text style={styles.loginText}>Register Now</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

export default RegisterScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	card: {
		marginTop: 40,
		width: 350,
		justifyContent: 'center',
		alignItems: 'center',
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
		marginBottom: 20,
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
		backgroundColor: '#35C953',
		width: 300,
		height: 50,
		justifyContent: 'center',
		margin: 10,
		marginLeft: 30,
		marginTop: '20%',
		borderRadius: 10,
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
	des: {
		fontSize: 20,
		textAlign: 'center',
	},
});
