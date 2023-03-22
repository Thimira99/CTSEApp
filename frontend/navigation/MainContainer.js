import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';

//Screen names

const Tab = createBottomTabNavigator();

function MainContainer() {
	return (
		<Tab.Navigator>
		</Tab.Navigator>
	);
}

export default MainContainer;
