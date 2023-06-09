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

import axios from 'axios';
import { useRoute } from '@react-navigation/native';

export default function ViewOrder(props) {
	const route = useRoute();
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		var url = appURLs.BaseURL + `delivery/getOrd/${route.params.id}`;
		axios.get(url).then((res) => {
			setData(res.data.data[0]);
		});
	}, []);

	return (
		<ScrollView>
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={require('../../assets/ord.png')}
				/>
				 
				<View style={styles.body}>
					<View style={styles.data}>
					 
						<Text style={{ fontSize: 19, fontWeight: 'bold', marginLeft: 20 }}>Order Id :</Text>

						<Text style={{ fontSize: 19 }}>{data.orderId}</Text>
					</View>
					<View style={styles.data}>
						<Text style={{ fontSize: 19, fontWeight: 'bold', marginLeft: 20 }}>Name :</Text>

						<Text style={{ fontSize: 19 }}>{data.name}</Text>
					</View>
					<View style={styles.data}>
						<Text style={{ fontSize: 19, fontWeight: 'bold', marginLeft: 20 }}>
							Contact Number :
						</Text>

						<Text style={{ fontSize: 19 }}>{data.contactNumber}</Text>
					</View>
					<View style={styles.data}>
						<Text style={{ fontSize: 19, fontWeight: 'bold', marginLeft: 20 }}>Location :</Text>

						<Text style={{ fontSize: 19 }}>{data.deliveryAddress}</Text>
					</View>
					
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop:100,
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
		paddingTop:20,
		backgroundColor: '#00BFA6',
		width: 340,
		height: 300,
		borderRadius: 10,
		 
	},
	data: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 30,
		 
	},
	loginBtn: {
		backgroundColor: '#35C953',
		width: 350,
		height: 50,
		justifyContent: 'center',
		borderRadius: 10,
		marginBottom: 10,
		marginTop: 10,
	},
	loginText: {
		color: '#000000',
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
	},
});
