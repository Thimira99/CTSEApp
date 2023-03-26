import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, SafeAreaView } from 'react-native';


export default function MapScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <MapView style={styles.map} 
	  initialRegion={{
		latitude: 6.930831,
		longitude: 79.984218,
		latitudeDelta: 0.09,
		longitudeDelta: 0.04
	  }}
	  />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},
	map: {
	  width: '100%',
	  height: '100%',
	},
  });

 