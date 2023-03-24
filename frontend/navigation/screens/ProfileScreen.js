import * as React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { appURLs } from '../../enums/url';

import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

export default function ProfileScreen(props) {
	const [email, setEmail] = React.useState();

	const [data, setData] = React.useState({});

	const [name, setName] = React.useState('');

	React.useEffect(() => {
		(async () => {
			const email = await AsyncStorage.getItem('user');
			setEmail(email);

			var url = appURLs.BaseURL + `user/userById/${email}`;
			axios.get(url).then((res) => {
				console.log(res.data.data[0]);
				setData(res.data.data[0]);
				setName(res.data.data[0].name);
			});
		})();
	}, []);

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text
					style={{
						fontSize: 26,
						fontWeight: 'bold',
						marginTop: 10,
					}}
				>
					My Profile
				</Text>
				<Image
					style={styles.image}
					source={require('../../assets/profile.png')}
				/>
				<View style={styles.body}>
					<Text
						style={[
							styles.btnTxt,
							{
								color: '#0C1446',
								marginBottom: 40,
								fontSize: 26,
								marginLeft: 120,
								fontWeight: 'bold',
							},
						]}
					>
						My Profile
					</Text>
					<View style={styles.data}>
						<Text style={{ fontSize: 19, fontWeight: 'bold' }}>Name :</Text>

						<Text style={{ fontSize: 19 }}>{name}</Text>
					</View>
					<View style={styles.data}>
						<Text style={{ fontSize: 19, fontWeight: 'bold' }}>Email :</Text>

						<Text style={{ fontSize: 19 }}>{data.email}</Text>
					</View>
					<View style={styles.data}>
						<Text style={{ fontSize: 19, fontWeight: 'bold' }}>
							Contact Number :
						</Text>

						<Text style={{ fontSize: 19 }}>{data.contactNumber}</Text>
					</View>
					<View style={styles.data}>
						<Text style={{ fontSize: 19, fontWeight: 'bold' }}>Role :</Text>

						<Text style={{ fontSize: 19 }}>{data.role}</Text>
					</View>
					<TouchableOpacity
						style={styles.loginBtn}
						onPress={() => props.navigation.navigate('updatePass')}
					>
						<Text style={styles.loginText}>Reset Password</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.loginBtn}
						onPress={() => props.navigation.navigate('update')}
					>
						<Text style={styles.loginText}>Update Profile</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 200,
		height: 200,
		marginBottom: 10,
	},
	body: {
		backgroundColor: '#35C953',
		width: 350,
		height: 430,
		borderRadius: 10,
	},
	data: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 30,
	},
	loginBtn: {
		backgroundColor: '#ffffff',
		width: 300,
		height: 50,
		justifyContent: 'center',
		borderRadius: 10,
		marginLeft: 30,
		marginBottom: 10,
	},
	loginText: {
		color: '#000000',
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
	},
});
