/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react-native/no-inline-styles */
//@ts-nocheck
import "./global.css"
import React from 'react';
import {useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
enableScreens();
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/routers/NavigationService';
import RootNavigator from './src/routers/RootNavigator';

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
        <NavigationContainer
          theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
          ref={navigationRef}>
          {/* <LoadingProvider> */}
            <RootNavigator />
          {/* </LoadingProvider> */}
        </NavigationContainer>
    </SafeAreaProvider>
    
  );
}

export default App;
