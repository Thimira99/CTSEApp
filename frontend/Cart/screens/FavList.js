import * as React from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	FlatList,
	TouchableOpacity,
    Image
} from 'react-native';


import axios from 'axios';
import FavCard from '../components/FavCard';

export default function FavList(props) {
	const [data, setData] = React.useState([]);

	var url = "http://192.168.198.79:8080/user/getallFavDish";
	React.useEffect(() => {
	
			axios.get(url).then((res) => {
				console.log(res.data.users);
				setData(res.data.users);
			});
	}, []);


	return (
		<View className="pb-29">
		
  
		<ScrollView
		  showsVerticalScrollIndicator={false}
		  contentContainerStyle={{ paddingHorizontal: 15 }}
		  
		  className="pt-4"
		>
		  {/* restaurant cards */}
		  {data?.map((restaurant) => (
			<FavCard
			  key={restaurant._id}
			  mongoid={restaurant.idoftheDish}
			
			  imgUrl={restaurant.imgUrl}
			  title={restaurant.title}
			
			  genre={restaurant.genre}
			  address={restaurant.address}
			  short_description={restaurant.short_description}
			
			/>
		  ))}
		</ScrollView>
	  </View>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		padding: 5,
// 		alignItems: 'center',
// 		backgroundColor: '#ffffff',
// 	},
// 	notificationList: {
// 		marginLeft: -30,
// 		padding: 5,
// 	},
// 	cardData: {
// 		flexDirection: 'row',
// 		marginTop: 20,
// 	},
//     cardImage2:{
//         marginLeft:55,
//         width:120,
//         height:120
//     },
// 	title: {
// 		color: '#000000',
// 		fontSize: 18,
// 		textDecorationLine: 'underline',
// 	},
// 	loginBtn: {
// 		backgroundColor: '#ffffff',
// 		width: 200,
// 		height: 25,
// 		justifyContent: 'center',
// 		borderRadius: 5,
// 		marginLeft: 40,
// 		marginTop: 5,
// 	},
// 	loginText: {
// 		color: '#000000',
// 		textAlign: 'center',
// 		fontSize: 18,
// 		fontWeight: 'bold',
// 	},
// 	card: {
// 		flex: 1,
// 		flexDirection: 'column',
// 		width: 320,
// 		backgroundColor: '#00BFA6',
// 		margin: 10,
// 		padding: 20,
// 		borderRadius: 15,
// 		elevation: 5,
// 	},
// 	cardRow: {
// 		flex: 1,
// 		flexDirection: 'row',
// 		padding: 5,
// 		marginTop: 20,
// 	},
// 	txt: {
// 		color: '#000000',
// 		fontSize: 20,
// 		textAlign: 'left',
// 		padding: 5,
// 		marginLeft: 40,
// 	},
// 	decline: {
// 		width: 100,
// 		color: '#ffffff',
// 		fontSize: 15,
// 		textAlign: 'center',
// 		padding: 5,
// 		margin: 5,
// 		backgroundColor: '#D41930',
// 		borderRadius: 20,
// 	},
// 	approve: {
// 		width: 100,
// 		color: '#ffffff',
// 		fontSize: 15,
// 		textAlign: 'center',
// 		padding: 5,
// 		margin: 5,
// 		backgroundColor: '#28A745',
// 		borderRadius: 20,
// 	},
// 	pending: {
// 		width: 100,
// 		color: '#ffffff',
// 		fontSize: 14,
// 		textAlign: 'center',
// 		padding: 5,
// 		margin: 5,
// 		marginBottom: 5,
// 		backgroundColor: '#D4890E',
// 		borderRadius: 20,
// 	},
// 	btn: {
// 		elevation: 5,
// 		margin: 10,
// 		padding: 3,
// 		width: 160,
// 		marginRight: 5,
// 		backgroundColor: '#01949A',
// 		borderRadius: 20,
// 		alignSelf: 'center',
// 		alignItems: 'center',
// 	},
// 	Invoicebtn: {
// 		marginTop: 30,
// 		marginRight: 50,
// 		elevation: 5,
// 		margin: 10,
// 		padding: 3,
// 		width: 160,
// 		height: 30,
// 		backgroundColor: '#01949A',
// 		borderRadius: 20,
// 		alignSelf: 'center',
// 		alignItems: 'center',
// 	},
// 	btnTxt: {
// 		color: 'white',
// 		fontSize: 15,
// 		textAlign: 'center',
// 	},
// 	header: {
// 		marginLeft: 30,
// 	},
// 	headerTxt: {
// 		marginLeft: 90,
// 		marginTop: 30,
// 		fontSize: 30,
// 		fontWeight: 'bold',
// 	},


// 	nameText: {
// 		color: '#000000',
// 		textAlign: 'center',
// 		fontSize: 18,
// 		fontWeight: 'bold',
// 	},
// 	emailText: {
// 		color: '#000000',
// 		textAlign: 'center',
// 		fontSize: 18,
// 		fontWeight: 'bold',
// 	},
// });
