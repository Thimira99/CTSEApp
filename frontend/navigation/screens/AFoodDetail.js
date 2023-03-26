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


const UpdateUser = (props) => {
	const route = useRoute();

    const id = route.params.id;

	const [name, setName] = useState('');
	const [logoUrl, setLogo] = useState('');
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState('');

	const [data, setData] = useState({});

	useEffect(() => {

		var url = appURLs.BaseURL + `food/getAFood/${id}`;
		axios.get(url).then((res) => {
			setName(res.data.data[0].name);
			setLogo(res.data.data[0].logoUrl);
			setDescription(res.data.data[0].description);
			setQuantity(res.data.data[0].quantity);
		});
	}, []);

	const onChangeName = (name) => {
		setName(name);
	};

	const onChangeLogo = (logoUrl) => {
		setLogo(logoUrl);
	};

	const onChangeDescription = (description) => {
		setDescription(description);
	};

	const onChangeQuantity = (quantity) => {
		setQuantity(quantity);
	};

    const deleteFood = () => {
        var deleteAPI = appURLs.BaseURL + `food/deleteFoodById/${id}`;
        axios.delete(deleteAPI).then(res => {
            alert("Deleted Successfully")
            props.navigation.navigate('main');
        })
    }

	//create USer
	const register = () => {
		var url = appURLs.BaseURL + `food/updateFoodById/${id}`;
		var data = {
			name,
			logoUrl,
			description,
			quantity,
		};

		console.log(data);

		axios
			.post(url, data)
			.then((res) => {
				props.navigation.navigate('addFood');
				alert('Updated Successfully');
			})
			.catch((error) => {
				alert('Not Registered');
			});
	};

	return (
		<View style={styles.container}>
			<ScrollView>
				<Text style={styles.title}>Food Details</Text>

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
					<Text style={styles.title2}>Logo URL</Text>
					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='Logo Url'
							value={logoUrl}
							placeholderTextColor={'#858277'}
							onChangeText={(logoUrl) => onChangeLogo(logoUrl)}
						/>
					</View>
					<Text style={styles.title2}>Description</Text>

					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							value={description}
							placeholder='Description'
							placeholderTextColor={'#858277'}
							onChangeText={(description) => onChangeDescription(description)}
						/>
					</View>
					<Text style={styles.title2}>Quantity</Text>

					<View style={styles.inputView}>
						<TextInput
							style={styles.TextInput}
							placeholder='Quantity'
							value={quantity}
							placeholderTextColor={'#858277'}
							onChangeText={(quantity) => onChangeQuantity(quantity)}
						/>
					</View>
					<TouchableOpacity style={styles.registerBtn} onPress={register}>
						<Text style={styles.loginText}>Update</Text>
					</TouchableOpacity>
                    <TouchableOpacity style={styles.registerBtn} onPress={deleteFood}>
						<Text style={styles.loginText}>Delete</Text>
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
		backgroundColor: '#ffffff',
		width: 300,
		height: 50,
		justifyContent: 'center',
		margin: 10,
		marginLeft: 20,
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
