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

//delivery person
import DeliveryPersonHomePage from './DeliveryPerson/DeliveryPersonHomePage';
import ViewOrder from './DeliveryPerson/screens/ViewOrder';
import ViewNote from './DeliveryPerson/screens/ViewNote';
import UpdateNote from './DeliveryPerson/screens/UpdateNote';

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


			{/* delivery person */}
			<Screen name='deliveryPersonHome' component={DeliveryPersonHomePage} />
			<Screen name='viewOrder' component={ViewOrder} />
			<Screen name='viewNote' component={ViewNote} />
			<Screen name='updateNote' component={UpdateNote} />

		</Navigator>
	</NavigationContainer>
);

export default AppNavigator;
