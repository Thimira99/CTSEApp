import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import AllCasesScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import UpdateUser from './screens/UpdateUser';

//Screen names
const homeName = 'Home';
const allCases = 'All Cases';
const settingsName = 'Family Details';
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
					} else if (rn === allCases) {
						iconName = focused ? 'list' : 'list-outline';
					} else if (rn === settingsName) {
						iconName = focused ? 'settings' : 'settings-outline';
					} else if (rn === profile) {
						iconName = focused ? 'person' : 'person-outline';
					}

					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'grey',
				labelStyle: { paddingBottom: 5, fontSize: 10 },
				style: { padding: 1, height: 75 },
			}}
		>
			<Tab.Screen name={homeName} component={HomeScreen} />
			<Tab.Screen name={allCases} component={AllCasesScreen} />
			<Tab.Screen name={settingsName} component={SettingsScreen} />
			<Tab.Screen name={profile} component={ProfileScreen} />
		</Tab.Navigator>
	);
}

export default MainContainer;
