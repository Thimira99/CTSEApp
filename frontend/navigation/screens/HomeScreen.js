import * as React from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
} from 'react-native';

export default function HomeScreen({ navigation }) {
	return (
		<ScrollView>
			<View style={styles.container}>
				<Image style={styles.image} source={require('../../assets/Home.png')} />
				<Text
					style={{
						fontSize: 26,
						fontWeight: 'bold',
						marginTop: 10,
					}}
				>
					Welcome !
				</Text>
				<View style={styles.body}>
					<View style={styles.card}>
						<Image
							style={styles.cardImage}
							source={require('../../assets/all.png')}
						/>
						<Text
							style={{
								fontSize: 30,
								fontWeight: 'bold',
								marginLeft: 30,
								marginTop: 17,
							}}
						>
							All Cases
						</Text>
						<Text
							style={{
								fontSize: 50,
								fontWeight: 'bold',
								marginLeft: -75,
								marginTop: 50,
							}}
						>
							3
						</Text>
					</View>
				</View>
				<View style={styles.body}>
					<View style={styles.card2}>
						<Text
							style={{
								fontSize: 30,
								fontWeight: 'bold',
								marginLeft: 10,
								marginTop: 17,
							}}
						>
							All Employees
						</Text>
						<Text
							style={{
								fontSize: 50,
								fontWeight: 'bold',
								marginLeft: -125,
								marginTop: 50,
							}}
						>
							18
						</Text>
						<Image
							style={styles.cardImage2}
							source={require('../../assets/emp.png')}
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
	cardImage: {
		width: 127,
		height: 120,
		margin: 13,
		backgroundColor: '#35C953',
		borderRadius: 10,
	},
	cardImage2: {
		width: 120,
		height: 120,
		margin: 13,
		backgroundColor: '#35C953',
		borderRadius: 10,
		marginLeft: 80,
	},
	body: {
		marginTop: 20,
		backgroundColor: '#35C953',
		width: 350,
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
	},
});
