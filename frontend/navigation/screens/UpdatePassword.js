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
import { appURLs } from '../../enums/url';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UpdatePassword = (props) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [contactNumber, setContactNumber] = useState('');
	const [role, setRole] = useState('');

	const [eemail, setEemail] = useState();

	useEffect(() => {
		(async () => {
			const email = await AsyncStorage.getItem('user');
			setEemail(email);

			var url = appURLs.BaseURL + `user/userById/${email}`;
			axios.get(url).then((res) => {
				setPassword(res.data.data[0].password);
				setName(res.data.data[0].name);
				setContactNumber(res.data.data[0].contactNumber);
				setRole(res.data.data[0].role);
				setEmail(res.data.data[0].email);
			});
		})();
	}, []);

	const onChangeEmail = (email) => {
		setEmail(email);
	};

	const onChangePassword = (pass) => {
		setPassword(pass);
	};

	//create USer
	const register = () => {
		var url = appURLs.BaseURL + `user/updateuserById/${eemail}`;
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
				alert('Password Updated Successfully');
			})
			.catch((error) => {
				alert('Not Registered');
			});
	};

	return (
		<View style={styles.container}>
			<ScrollView>
				<Text style={styles.title}>Update Password</Text>

				<View style={styles.card}>
					<Text style={styles.title2}>Email</Text>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							onChangeText={(email) => onChangeEmail(email)}
							placeholderTextColor={'#858277'}
							value={email}
						/>
					</View>
					<Text style={styles.title2}>New Password</Text>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='Password'
							placeholderTextColor={'#858277'}
							onChangeText={(pass) => onChangePassword(pass)}
						/>
					</View>

					<TouchableOpacity style={styles.registerBtn} onPress={register}>
						<Text style={styles.loginText}>Update</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
};

export default UpdatePassword;

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
		backgroundColor: '#35C953',
		width: 350,
		height: 550,
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
		backgroundColor: '#ffffff',
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
		textAlign: 'center',
		marginTop: '5%',
	},
	des: {
		fontSize: 20,
		textAlign: 'center',
	},
});
