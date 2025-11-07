/* eslint-disable quotes */
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteNames } from './RouteNames';
import { RootStackParamList } from './RootStackParamList';
import SplashScreen from '@screens/SplashScreen';
// import BottomTabScreen from './BottomTabNavigator';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();
export default function RootNavigator() {
	useEffect(() => {
	}, []);

	return (
		<Navigator
			screenOptions={{ headerShown: false, gestureEnabled: false }}
			initialRouteName={RouteNames.SPLASH_SCREEN}
		>
			<Screen options={{ gestureEnabled: false, headerLeft: () => null }} name={RouteNames.SPLASH_SCREEN} component={SplashScreen} />
			{/* <Screen options={{ gestureEnabled: false, headerLeft: () => null }} name={RouteNames.LOGIN} component={Login} />
			<Screen options={{ gestureEnabled: false, headerLeft: () => null }} name={RouteNames.REGISTER} component={RegisterScreen} />
			<Screen options={{ gestureEnabled: false, headerLeft: () => null }} name={RouteNames.FORGOT_PASSWORD} component={ForgotPasswordScreen} /> */}
			{/* <Screen name={RouteNames.MAIN} component={BottomTabScreen} /> */}
		</Navigator>
	);
}
