import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import OrdersScreen from './screens/OrdersScreen';
import NotesScreen from './screens/NotesScreen';
import ProfileScreen from './screens/ProfileScreen';

//Screen names
const homeName = 'Home';
const orders = 'Orders';
const notes = 'Notes';
const profile = 'Profile';

const Tab = createBottomTabNavigator();

function MainContainer() {
	return (
		<Tab.Navigator
			initialRouteName={homeName}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					let rn = route.name;

					if (rn === homeName) {
						iconName = focused ? 'home' : 'home-outline';
					} else if (rn === orders) {
						iconName = focused ? 'list' : 'list-outline';
					} else if (rn === notes) {
						iconName = focused ? 'checkmark-done-circle' : 'checkmark-done-circle-outline'; 
					} else if (rn === profile) {
						iconName = focused ? 'person' : 'person-outline';
					}

					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: 'green',
				inactiveTintColor: 'grey',
				labelStyle: { paddingBottom: 10, fontSize: 10 },
				style: { padding: 10, height: 70 },
			}}
		>
			<Tab.Screen name={homeName} component={HomeScreen} />
            <Tab.Screen name={orders} component={OrdersScreen} />
			<Tab.Screen name={notes} component={NotesScreen} />
			<Tab.Screen name={profile} component={ProfileScreen} />
		</Tab.Navigator>
	);
}

export default MainContainer;
