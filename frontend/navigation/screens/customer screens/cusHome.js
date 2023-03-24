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
				{/* <Image style={styles.image} source={require('../../assets/admin.png')} /> */}
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
						{/* <Image
							style={styles.cardImage}
							source={require('../../assets/all.png')}
						/> */}
						<TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("placeOrder")}>
				            <Text style={styles.loginText}>Place order</Text>
			            </TouchableOpacity>
						
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
		height:735
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
		backgroundColor: '#00BFA6',
		borderRadius: 10,
	},
	cardImage2: {
		width: 120,
		height: 120,
		margin: 13,
		backgroundColor: '#00BFA6',
		borderRadius: 10,
		marginLeft: 80,
	},
	body: {
		marginTop: 20,
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
		backgroundColor: '#00BFA6',
		borderRadius: 10,
	},
	card2: {
		flexDirection: 'row',
		backgroundColor: '#00BFA6',
		borderRadius: 10,

	},
});
