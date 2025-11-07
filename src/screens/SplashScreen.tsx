/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image'
import { images } from '../images';
import { StyleSheet } from 'react-native';

const SplashScreen = () => {
    return (
        <SafeAreaView className='flex-1 items-center justify-center'>
            <FastImage source={images.iconMessage} style={styles.image} />
        </SafeAreaView>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150
    },
});
