import * as React from 'react';
import { Linking } from 'react-native';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
} from 'react-native';

// import ProfileScreen from './ProfileScreen';

export default function HomeScreen({ navigation }) {
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
					Welcome Dashboard!
				</Text>
				<View style={styles.body}>
					<View style={styles.card2}>
					<Text 
							style={{
								fontSize: 17,
								fontWeight: 'bold',
								marginLeft: 25,
								marginTop: 17,
							}}
							onPress={() => Linking.openURL('http://google.com')}
						>
							Orders
						</Text>

						 
						<Image
							style={styles.cardImage1}
							source={require('../../assets/orders.png')}
						/>
					</View>
	 
				</View>
				<View style={styles.body2}>
					<View style={styles.card2}>
						<Text
							style={{
								fontSize: 17,
								fontWeight: 'bold',
								marginLeft: 25,
								marginTop: 17,
							}}
						>
							Tracking
						</Text>
						<Image
							style={styles.cardImage2}
							source={require('../../assets/tracking.png')}
						/>
					</View>
				</View>
				<View style={styles.body}>
					<View style={styles.card2}>
						<Text
							style={{
								fontSize: 17,
								fontWeight: 'bold',
								marginLeft: 25,
								marginTop: 17,
							}}
						>
							Notes
						</Text>
						<Image
							style={styles.cardImage3}
							source={require('../../assets/notes.png')}
						/>
					</View>
				</View>
				<View style={styles.body2}>
					<View style={styles.card2}>
						<Text
							style={{
								fontSize: 17,
								fontWeight: 'bold',
								marginLeft: 22,
								marginTop: 17,
							}}
						>
							Google Map
						</Text>
						<Image
							style={styles.cardImage4}
							source={require('../../assets/map.png')}
						/>
					</View>
				</View>

				<View style={styles.body}>
					<View style={styles.card2}>
						<Text
							style={{
								fontSize: 17,
								fontWeight: 'bold',
								marginLeft: 22,
								marginTop: 10,
							}}
						>
							Details
						</Text>
						<Image
							style={styles.cardImage3}
							source={require('../../assets/details.png')}
						/>
					</View>
				</View>
				<View style={styles.body2}>
					<View style={styles.card2}>
						<Text
							style={{
								fontSize: 17,
								fontWeight: 'bold',
								marginLeft: 22,
								marginTop: 17,
							}}
						>
							Profile
						</Text>
						<Image
							style={styles.cardImage2}
							source={require('../../assets/prof.png')}
						/>
					</View>
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
 
	cardImage1: {
		width: 60,
		height: 60,
		margin: 13,
		backgroundColor: '#00BFA6',
		// borderRadius: 10,
		marginLeft: -50,
		marginTop: 50,
	},
	cardImage2: {
		width: 60,
		height: 60,
		margin: 13,
		backgroundColor: '#00BFA6',
		// borderRadius: 10,
		marginLeft: -40,
		marginTop: 50,
	},
	cardImage3: {
		width: 60,
		height: 60,
		margin: 13,
		backgroundColor: '#00BFA6',
		// borderRadius: 10,
		marginLeft: -65,
		marginTop: 50,
	},
	cardImage4: {
		width: 60,
		height: 60,
		margin: 13,
		backgroundColor: '#00BFA6',
		// borderRadius: 10,
		marginLeft: -90,
		marginTop: 50,
	},
	body: {
		marginTop: 20,
		backgroundColor: '#00BFA6',
		width: 150,
		height: 150,
		borderRadius: 10,
		marginLeft: -130,
	},
	body2: {
		marginTop: -150,
		marginLeft: 170,
		backgroundColor: '#00BFA6',
		width: 150,
		height: 150,
		borderRadius: 10,
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
	card: {
		flexDirection: 'row',
	},
	card2: {
		flexDirection: 'row',
		backgroundColor: '#ffffff',
		width: 130,
		height: 130,
		marginLeft: 10,
		marginTop: 10,
		borderRadius: 20,
	},
	card3: {
		flexDirection: 'row',
		backgroundColor: '#ffffff',
		width: 130,
		height: 130,
		marginLeft: 30,
		marginTop: 10,
		borderRadius: 20,
	},
});
