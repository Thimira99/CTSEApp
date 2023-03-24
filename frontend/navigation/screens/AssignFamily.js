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
import { appURLs } from '../../enums/url';

import * as ImagePicker from 'expo-image-picker';

const AssignFamily = (props) => {
	const [caseTitle, setTitle] = useState('');
	const [description, setDes] = useState('');
	const [location, setLocation] = useState('');
	const [image, setImage] = useState('');
	const [assignDate, setassignDate] = useState('');

	const pickFromGallery = async () => {
		const data = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 0.5,
		});

		setImage(data.uri);
	};

	const onChangeTitle = (title) => {
		setTitle(title);
	};

	const onChangeDescription = (des) => {
		setDes(des);
	};

	const onChangeLocation = (loc) => {
		setLocation(loc);
	};

	const onChangeDate = (date) => {
		setassignDate(date);
	};

	//create USer
	const register = () => {
		var url = appURLs.BaseURL + 'Family/createFamily';
		var data = {
			caseTitle,
			description,
			location,
			image,
			assignDate,
		};

		console.log(data);

		axios
			.post(url, data)
			.then((res) => {
				props.navigation.navigate('Family Details');
			})
			.catch((error) => {
				alert('Not Registered');
			});
	};

	return (
		<View style={styles.container}>
			<ScrollView>
				<Text style={styles.title}>Assign Family Details</Text>

				<View style={styles.card}>
					<Text style={styles.title2}>Case Title</Text>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='Enter Name'
							placeholderTextColor={'#858277'}
							onChangeText={(title) => onChangeTitle(title)}
						/>
					</View>
					<Text style={styles.title2}>Description</Text>

					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='User Email'
							placeholderTextColor={'#858277'}
							onChangeText={(des) => onChangeDescription(des)}
						/>
					</View>
					<Text style={styles.title2}>Location</Text>

					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='Password'
							placeholderTextColor={'#858277'}
							secureTextEntry={true}
							onChangeText={(loc) => onChangeLocation(loc)}
						/>
					</View>
					<Text style={styles.title2}>Image</Text>
					<TouchableOpacity
						style={styles.registerBtn}
						onPress={pickFromGallery}
					>
						<Image
							style={styles.image}
							source={require('../../assets/photo.png')}
						/>
					</TouchableOpacity>

					<Text style={styles.title2}>Assign Date</Text>

					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='User Role'
							placeholderTextColor={'#858277'}
							onChangeText={(date) => onChangeDate(date)}
						/>
					</View>
				</View>
				<TouchableOpacity style={styles.registerBtn} onPress={register}>
					<Text style={styles.loginText}>Assign</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

export default AssignFamily;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	card: {
		width: 350,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: '#35C953',
		marginTop: 20,
		marginLeft: 10,
	},
	title2: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#000000',
		textAlign: 'center',
	},
	image: {
		width: 50,
		height: 50,
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
		width: 350,
		height: 50,
		justifyContent: 'center',
		margin: 10,
		borderRadius: 10,
	},
	loginText: {
		color: '#000000',
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
	},
	title: {
		fontSize: 30,
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
