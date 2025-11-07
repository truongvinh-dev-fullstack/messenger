/* eslint-disable quotes */
import { colors } from '../../constants/color';
import { fontSizes } from '../../constants/fontstyle';
import React from 'react';
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native';
// import { appFontSizes, appColors } from 'src/themes'

export type AppTextProps = {
	fontSize?: keyof typeof fontSizes
	color?: keyof typeof colors
	fontWeight?:
		| 'normal'
		| 'bold'
		| '100'
		| '200'
		| '300'
		| '400'
		| '500'
		| '600'
		| '700'
		| '800'
		| '900'
		| undefined
	// style?: TextStyle,
} & TextProps

export const AppText = (props: AppTextProps) => {
	let fontSizeText = props?.fontSize ? props?.fontSize : "sm";
	const customStyle = {
		lineHeight: fontSizes[fontSizeText] + 6,
		fontSize: fontSizes[fontSizeText],
		color: 'black',
		fontWeight: '400',
		// marginBottom: 4,
		fontFamily: 'Be Vietnam Pro Black',
	};
	const styleDefault = StyleSheet.flatten([customStyle as StyleProp<TextStyle>, props.style]);

	return (
		<Text {...props} style={[styleDefault]}>
			{/* {children} */}
		</Text>
	);
};
