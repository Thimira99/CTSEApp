/* eslint-disable prettier/prettier */
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const SplashScreen = (props) => {
	return (
		<View style={styles.container}>
			<Image style={styles.Image} source={require('../assets/First.png')} />
			<Text style={styles.title}>Lets get started</Text>
			<Text style={styles.des}>
				Be the reason someone smiles today! Together, we can be the generation
				that ends hunger.
			</Text>
			<TouchableOpacity
				style={styles.loginBtn}
				onPress={() => props.navigation.navigate('Login')}
			>
				<Text style={styles.loginTxt}>Get Started</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SplashScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		alignItems: 'center',
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
	loginBtn: {
		backgroundColor: '#35C953',
		width: 300,
		height: 50,
		justifyContent: 'center',
		margin: 10,
		marginTop: '20%',
		borderRadius: 10,
	},
	loginTxt: {
		color: '#000000',
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
	},

	Image: {
		width: '100%',
		height: '50%',
		resizeMode: 'contain',
		borderRadius: 10,
	},
});
