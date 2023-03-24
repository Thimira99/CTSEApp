import * as React from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	FlatList,
	TouchableOpacity,
} from 'react-native';

import { appURLs } from '../../enums/url';
import axios from 'axios';

export default function DetailsScreen(props) {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		var url = appURLs.BaseURL + `user/getUsers`;
			axios.get(url).then((res) => {
				console.log(res.data.users);
				setData(res.data.users);
			});
	}, []);

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.header}>
					<Text style={styles.headerTxt}>All Cases</Text>
					<FlatList
						style={styles.notificationList}
						data={data}
						keyExtractor={(item) => {
							return item.id;
						}}
						renderItem={({ item }) => {
							return (
								<View style={styles.card}>
									<View style={styles.cardRow}>
										<View style={styles.cardColumn}></View>
										<View style={styles.cardColumn}>
											<Text
												style={[
													styles.txt,
													{
														marginLeft: 20,
														color: '#000000',
														fontSize: 20,
														fontWeight: 'bold',
														marginTop: -20,
													},
												]}
											><Text style={styles.nameText}>Name : </Text>
												{item.name}
											</Text>
											<Text
												style={[
													styles.txt,
													{
														marginLeft: 35,
														color: '#000000',
														fontSize: 20,
														fontWeight: 'bold',
														marginTop: 10,
													},
												]}
											><Text style={styles.emailText}>Email : </Text>
												{item.email}
											</Text>

											<View style={styles.cardData}>
												<TouchableOpacity
													style={styles.loginBtn}
													onPress={() =>
														props.navigation.navigate('viewCase', {
															id: item._id,
														})
													}
												>
													<Text style={styles.loginText}>View</Text>
												</TouchableOpacity>
											</View>
										</View>
									</View>
								</View>
							);
						}}
					/>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 5,
		alignItems: 'center',
		backgroundColor: '#ffffff',
	},
	notificationList: {
		marginLeft: -30,
		padding: 5,
	},
	cardData: {
		flexDirection: 'row',
		marginTop: 20,
	},
	title: {
		color: '#000000',
		fontSize: 18,
		textDecorationLine: 'underline',
	},
	loginBtn: {
		backgroundColor: '#ffffff',
		width: 100,
		height: 25,
		justifyContent: 'center',
		borderRadius: 5,
		marginLeft: 10,
		marginTop: 5,
	},
	loginText: {
		color: '#000000',
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
	},
	card: {
		flex: 1,
		flexDirection: 'column',
		width: 320,
		backgroundColor: '#35C953',
		margin: 10,
		padding: 20,
		borderRadius: 15,
		elevation: 5,
	},
	cardRow: {
		flex: 1,
		flexDirection: 'row',
		padding: 5,
		marginTop: 20,
	},
	txt: {
		color: '#000000',
		fontSize: 20,
		textAlign: 'left',
		padding: 5,
		marginLeft: 40,
	},
	decline: {
		width: 100,
		color: '#ffffff',
		fontSize: 15,
		textAlign: 'center',
		padding: 5,
		margin: 5,
		backgroundColor: '#D41930',
		borderRadius: 20,
	},
	approve: {
		width: 100,
		color: '#ffffff',
		fontSize: 15,
		textAlign: 'center',
		padding: 5,
		margin: 5,
		backgroundColor: '#28A745',
		borderRadius: 20,
	},
	pending: {
		width: 100,
		color: '#ffffff',
		fontSize: 14,
		textAlign: 'center',
		padding: 5,
		margin: 5,
		marginBottom: 5,
		backgroundColor: '#D4890E',
		borderRadius: 20,
	},
	btn: {
		elevation: 5,
		margin: 10,
		padding: 3,
		width: 160,
		marginRight: 5,
		backgroundColor: '#01949A',
		borderRadius: 20,
		alignSelf: 'center',
		alignItems: 'center',
	},
	Invoicebtn: {
		marginTop: 30,
		marginRight: 50,
		elevation: 5,
		margin: 10,
		padding: 3,
		width: 160,
		height: 30,
		backgroundColor: '#01949A',
		borderRadius: 20,
		alignSelf: 'center',
		alignItems: 'center',
	},
	btnTxt: {
		color: 'white',
		fontSize: 15,
		textAlign: 'center',
	},
	header: {
		marginLeft: 30,
	},
	headerTxt: {
		marginLeft: 90,
		marginTop: 30,
		fontSize: 30,
		fontWeight: 'bold',
	},


	nameText: {
		color: '#000000',
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
	},
	emailText: {
		color: '#000000',
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
	},
});
