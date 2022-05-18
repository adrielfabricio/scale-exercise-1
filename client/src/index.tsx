import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import Header from './components/Header';
import Users from './screens/Users';

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';
	const backgroundStyle = {
		backgroundColor: '#ffffff',
		flex: 1,
	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<Header />
			<Users />
		</SafeAreaView>
	);
};

export default App;
