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

