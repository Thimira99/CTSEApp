import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import SplashScreen from './src/SplashScreen';
//
import 'react-native-gesture-handler';
//
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//
import LogInScreen from './src/LogInScreen';
import RegisterScreen from './src/RegisterScreen';

import UpdateUser from './navigation/screens/UpdateUser';
import ViewCase from './navigation/screens/ViewCase';
import AssignFamily from './navigation/screens/AssignFamily';
import UpdatePassword from './navigation/screens/UpdatePassword';


import customerHome from './navigation/screens/customer screens/cusHome';
import placeOrder from './navigation/screens/customer screens/placeOrder';
import Details from './navigation/screens/customer screens/details';
import updateDetails from './navigation/screens/customer screens/updateDetails';

//delivery person
import DeliveryPersonHomePage from './DeliveryPerson/DeliveryPersonHomePage';
import ViewOrder from './DeliveryPerson/screens/ViewOrder';
import ViewNote from './DeliveryPerson/screens/ViewNote';
import UpdateNote from './DeliveryPerson/screens/UpdateNote';
import HomeScreen from './Cart/screens/HomeScreen';
import RestaurantScreen from './Cart/screens/RestaurantScreen';
import insertScreen from './Cart/screens/insertScreen';
import FavList from './Cart/screens/FavList';
import insertDishes from './Cart/screens/insertDishes';
import insertSubDish from './Cart/screens/insertSubDish';
import BasketScreen from './Cart/screens/BasketScreen';
import PreparingScreen from './Cart/screens/PreparingScreen';
import DeliveryScreen from './Cart/screens/DeliveryScreen';

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
	<NavigationContainer>
		<Navigator initialRouteName='splash'>
			<Screen name='splash' component={SplashScreen} />
			<Screen name='Login' component={LogInScreen} />
			<Screen name='main' component={MainContainer} />
			<Screen name='register' component={RegisterScreen} />

			<Screen name='update' component={UpdateUser} />
			<Screen name='viewCase' component={ViewCase} />
			<Screen name='assignFam' component={AssignFamily} />
			<Screen name='updatePass' component={UpdatePassword} />


			<Screen name='cusHome' component={customerHome} />
			<Screen name='placeOrder' component={placeOrder} />

			<Screen name='details' component={Details} />
			<Screen name='updateDetails' component={updateDetails} />




			{/* delivery person */}
			<Screen name='deliveryPersonHome' component={DeliveryPersonHomePage} />
			<Screen name='viewOrder' component={ViewOrder} />
			<Screen name='viewNote' component={ViewNote} />
			<Screen name='updateNote' component={UpdateNote} />

			{/* Cart */}

			<Screen name="Home" component={HomeScreen} />
			<Screen name="Restaurant" component={RestaurantScreen} />
			<Screen name="insertPage" component={insertScreen} />
			<Screen name="FavList" component={FavList} />

			<Screen name="insertDishes" component={insertDishes} />
			<Screen name="insertSubDish" component={insertSubDish} />

			<Screen
              name="Basket"
              component={BasketScreen}
              options={{
                presentation: "modal",
                headerShown: false,
              }}
            />
            <Screen
              name="Prepare"
              component={PreparingScreen}
              options={{
                headerShown: false,
              }}
            />
            <Screen
              name="Delivery"
              component={DeliveryScreen}
              options={{
                headerShown: false,
              }}
            />


		</Navigator>
	</NavigationContainer>
);

export default AppNavigator;
