/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { AppText } from "../../components/text/AppText";
import { colors } from "constants/color";

type TabLaeblPropsType = {
	content: string
	focused?: boolean
}


export const BottomTabLabel: React.FC<TabLaeblPropsType> = React.memo(({ content, focused }) => {
	return (
		<AppText
			allowFontScaling={false}
			style={{
				color: focused ? colors.textPrimary : colors.textPlaceholder,
				fontSize: 13,
			}}>
			{content}
		</AppText>
	);
});

