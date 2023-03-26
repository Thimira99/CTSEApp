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
import { useRoute } from '@react-navigation/native';

const UpdateNote = (props) => {
	const route = useRoute();

    const id = route.params.id;

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [date, setDate] = useState('');
	 

	const [data, setData] = useState({});

	useEffect(() => {

		var url = appURLs.BaseURL + `delivery/getNotes/${id}`;
		axios.get(url).then((res) => {
			setTitle(res.data.data[0].title);
			setDescription(res.data.data[0].description);
			setDate(res.data.data[0].date);
		});
	}, []);

	const onChangeTitle = (title) => {
		setTitle(title);
	};

	const onChangeDescription = (description) => {
		setDescription(description);
	};

	const onChangeDate = (date) => {
		setDate(date);
	};

    const deleteNote = () => {
        var deleteAPI = appURLs.BaseURL + `delivery/getNotes/delete/${id}`;
        axios.delete(deleteAPI).then(res => {
            alert("Deleted Successfully")
            props.navigation.navigate('deliveryPersonHome');
        })
    }

	//create USer
	const register = () => {
		var url = appURLs.BaseURL + `delivery/getNotes/update/${id}`;
		var data = {
			title,
			description,
			date,
		};

		console.log(data);

		axios
			.post(url, data)
			.then((res) => {
				alert('Updated Successfully');
				props.navigation.navigate('main');
			})
			.catch((error) => {
				alert('Updated Successfully');
			});
	};

	return (
		<View style={styles.container}>
			<ScrollView>
				<Text style={styles.title}>Update Note</Text>

				<View style={styles.card}>
                <Text style={styles.title2}>Title</Text>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='Title'
							value={title}
							placeholderTextColor={'#858277'}
							onChangeText={(title) => onChangeTitle(title)}
						/>
					</View>
					<Text style={styles.title2}>Description</Text>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='Description'
							value={description}
							placeholderTextColor={'#858277'}
							onChangeText={(description) => onChangeDescription(description)}
						/>
					</View>

                    <Text style={styles.title2}>Date</Text>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='Date'
							value={date}
							placeholderTextColor={'#858277'}
							onChangeText={(date) => onChangeDate(date)}
						/>
					</View>
					 
					<TouchableOpacity style={styles.registerBtn} onPress={register}>
						<Text style={styles.loginText}>Update</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.deleteBtn} onPress={deleteNote}>
						<Text style={styles.loginText}>Delete</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
};

export default UpdateNote;


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
		backgroundColor: '#00BFA6',
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
		backgroundColor: '#52F7E1',
		width: 300,
		height: 50,
		justifyContent: 'center',
		margin: 10,
		marginLeft: 20,
		color: '#ffffff'
	},
	deleteBtn: {
		backgroundColor: '#EF484B',
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
