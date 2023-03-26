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

import { appURLs } from '../../enums/url';
import axios from 'axios';

export default function AddNotes(props) {

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [date, setDate] = useState('');

	const onChangeTitle = (title) => {
		setTitle(title);
	};

	const onChangeDescription = (description) => {
		setDescription(description);
	};

	const onChangeDate = (date) => {
		setDate(date);
	};

	// const viewNotes = () => {
	// 	props.navigation.navigate('deliveryPersonHome');
	// }

	//create USer
	const addNote = () => {
		var url =  appURLs.BaseURL + 'delivery/createNote';
		var data = {
			title,
			description,
			date,
		};

		console.log(data);

		axios
			.post(url, data)
			.then((res) => {
				alert('Added successfully');
				props.navigation.navigate('deliveryPersonHome');
			})
			.catch((error) => {
				alert('Not Registered');
			});
	};

	return (
		<View style={styles.container}>
			<ScrollView>
				<Text style={styles.title}>Add a Note</Text>

				<View style={styles.card}>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='Enter Title'
							placeholderTextColor={'#858277'}
							onChangeText={(title) => onChangeTitle(title)}
						/>
					</View>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='Description'
							placeholderTextColor={'#858277'}
							onChangeText={(description) => onChangeDescription(description)}
						/>
					</View>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='Date'
							placeholderTextColor={'#858277'}
							onChangeText={(date) => onChangeDate(date)}
						/>
					</View>
				</View>
				<TouchableOpacity style={styles.registerBtn} onPress={addNote}>
					<Text style={styles.loginText}>Add Now</Text>
				</TouchableOpacity>
				{/* <TouchableOpacity style={styles.registerBtn} onPress={viewFoods}>
					<Text style={styles.loginText}>View Foods</Text>
				</TouchableOpacity> */}
			</ScrollView>
		</View>
	);
}

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
	Image: {
		width: '100%',
		height: '50%',
		resizeMode: 'contain',
		borderRadius: 10,
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
		backgroundColor: '#00BFA6',
		width: 300,
		height: 50,
		justifyContent: 'center',
		margin: 10,
		marginLeft: 30,
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
