/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { appURLs } from '../enums/url';

import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
	Button,
} from 'react-native';

// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const LogInScreen = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	//validation
	const submit = async () => {
		// try {
		// 	var url = appURLs.BaseURL + `user/userById/${email}`;
		// 	axios
		// 		.get(url)
		// 		.then(async (res) => {
		// 			console.log(res.data.data[0]);
		// 			await AsyncStorage.setItem('user', res.data.data[0].email);

		// 			if (
		// 				res.data.data[0].email === email &&
		// 				res.data.data[0].password === password
		// 			) {
		// 				if (res.data.data[0].role === 'gramasewaka') {
		// 					props.navigation.navigate('main');
		// 					console.log('Fine')

		// 			} 
					
		// 			else if (res.data.data[0].role === 'customer') {
		// 				props.navigation.navigate('cusHome');
		// 				console.log('Fine')
		// 			} 

		// 			}else if (res.data.data[0].role === 'delivery person') {
		// 				props.navigation.navigate('deliveryPersonHome');
		// 				console.log('Fine')
		// 		}
					

		// 			else {
		// 				alert('Invalid Password or Email');
		// 			}
		// 		}
		// 		)

		// 		.catch((err) => {
		// 			alert('No User Found');
		// 		});
		// } catch (error) {
		// 	alert(error);
		// }
	};

	const handleEmail = (email) => {
		setEmail(email);
	};

	const handlePassword = (pass) => {
		setPassword(pass);
	};

	return (
		<View style={styles.container}>
			<Text
				style={[
					styles.btnTxt,
					{
						color: '#0C1446',
						marginBottom: 40,
						fontSize: 26,
						fontWeight: 'bold',
					},
				]}
			>
				Login
			</Text>
			<Text style={styles.des}>Lets help you meet up the tasks</Text>
			<Image style={styles.image} source={require("./assets/home.png")} />
			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder={'Enter Email'}
					placeholderTextColor={'#858277'}
					onChangeText={(email) => handleEmail(email)}
				/>
			</View>
			<View style={styles.inputView}>
				<TextInput
					style={styles.passwordInput}
					placeholder={'Enter Password'}
					placeholderTextColor={'#858277'}
					onChangeText={(pass) => handlePassword(pass)}
				/>
			</View>
			<TouchableOpacity style={styles.loginBtn} onPress={() => props.navigation.navigate('Home')}>
				<Text style={styles.loginText}>Log In</Text>
			</TouchableOpacity>
			<Text style={styles.loginTxt}>Don’t have an account?</Text>
			<Text
				style={styles.loginTxt}
				onPress={() => props.navigation.navigate('register')}
			>
				Sign Up
			</Text>
		</View>
	);
};

export default LogInScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	des: {
		marginTop: -20,
		fontSize: 20,
		textAlign: 'center',
	},
	image: {
		width: 200,
		height: 200,
		marginBottom: 30,
	},
	inputView: {
		backgroundColor: '#E8E8E8',
		borderRadius: 15,
		width: '70%',
		height: 45,
		marginBottom: 20,

		alignItems: 'center',
	},
	TextInput: {
		height: 50,
		flex: 1,
		color: '#000000',
	},
	passwordInput: {
		marginTop:13,
		marginLeft: 20,
	},

	loginBtn: {
		backgroundColor: '#00BFA6',
		width: 300,
		height: 50,
		justifyContent: 'center',
		margin: 10,
		marginTop: '20%',
		borderRadius: 10,
	},
	loginText: {
		color: '#000000',
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
	},
});
