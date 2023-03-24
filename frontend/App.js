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

		</Navigator>
	</NavigationContainer>
);

export default AppNavigator;
