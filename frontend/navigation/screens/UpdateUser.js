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
import MainContainer from '../MainContainer';

const UpdateUser = (props) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [contactNumber, setContactNumber] = useState('');
	const [role, setRole] = useState('');

	const [data, setData] = useState({});
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

	const onChangeName = (name) => {
		setName(name);
	};

	const onChangeEmail = (email) => {
		setEmail(email);
	};

	const onChangeContactNumber = (num) => {
		setContactNumber(num);
	};

	const onChangeRole = (role) => {
		setRole(role);
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
				alert('Updated Successfully');
			})
			.catch((error) => {
				alert('Not Registered');
			});
	};

	return (
		<View style={styles.container}>
			<ScrollView>
				<Text style={styles.title}>Update Profile</Text>

				<View style={styles.card}>
					<Text style={styles.title2}>Name</Text>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							onChangeText={(name) => onChangeName(name)}
							placeholderTextColor={'#858277'}
							value={name}
						/>
					</View>
					<Text style={styles.title2}>Email</Text>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='User Email'
							value={email}
							placeholderTextColor={'#858277'}
							onChangeText={(email) => setEmail(email)}
						/>
					</View>
					<Text style={styles.title2}>Contact Number</Text>

					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							value={contactNumber}
							placeholder='Contact Number'
							placeholderTextColor={'#858277'}
							onChangeText={(num) => setContactNumber(num)}
						/>
					</View>
					<Text style={styles.title2}>Role</Text>

					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='User Role'
							value={role}
							placeholderTextColor={'#858277'}
							onChangeText={(role) => setRole(role)}
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

export default UpdateUser;

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
