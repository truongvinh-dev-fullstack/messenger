/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { TabNames } from './RouteNames';
import DashBoardScreen from '../screens/dashboard/Dashboard';
import { BottomTabLabel } from './components/BottomTabLabel';
import HomeSVG from '../assets/svg/homeFocus';
import { appColors } from '../constants';
import InformationScreen from '../screens/informations/Information';
import InformationSVG from '../assets/svg/infomation.jsx';
import AccountScreen from '../screens/account/Account';
import AccountSVG from '../assets/svg/account.jsx';


const Tab = createBottomTabNavigator();

const BottomTabScreen = () => {
    const isFocused = useIsFocused();
    let { params }: any = useRoute();

    useEffect(() => {
        fetchData()
    }, [isFocused, params?.isRefeshCount]);

    const fetchData = async () => {
    };

    return (
        <Tab.Navigator
            initialRouteName={TabNames.DASHBOARD}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: Platform.OS == 'ios' ? 80 : 70,
                },
                lazy: true,
                tabBarLabelStyle: $tabBarLabel,
                tabBarItemStyle: $tabBarItem,
            }}>
            <Tab.Screen
                name={TabNames.DASHBOARD}
                component={DashBoardScreen}
                options={{
                    tabBarLabel: ({ focused }) => <BottomTabLabel focused={focused} content={'Báo cáo'} />,
                    tabBarIcon: ({ focused }: { focused: boolean }) => (
                        <HomeSVG color={focused ? appColors.main_button : appColors.gray_3} />
                    ),
                }}
            />

            <Tab.Screen
                name={TabNames.INFORMATION}
                component={InformationScreen}
                options={{
                    tabBarLabel: ({ focused }) => <BottomTabLabel focused={focused} content={'Thông tin'} />,
                    tabBarIcon: ({ focused }: { focused: boolean }) => (
                        <InformationSVG color={focused ? appColors.main_button : appColors.gray_3} />
                    ),
                }}
            />

            <Tab.Screen
                name={TabNames.ACCOUNT}
                component={AccountScreen}
                options={{
                    tabBarLabel: ({ focused }) => <BottomTabLabel focused={focused} content={'Tài khoản'} />,
                    tabBarIcon: ({ focused }: { focused: boolean }) => (
                        <AccountSVG color={focused ? appColors.main_button : appColors.gray_3} />
                    ),
                }}
            />


            {/* <Tab.Screen
				name={TabNames.Account}
				component={AccountPage}
				options={{
					// tabBarLabel: ({ focused }) => <BottomTabLabel focused={focused} content={'Dashboard'} />,
					tabBarShowLabel: false,
					tabBarIcon: ({ focused }: { focused: boolean }) => (
						<BottomTabButton source={icons.ic_user_home} focused={focused} name={TabNames.Account} />
					),
				}}
			/> */}

            {/* {screens?.map((item, i) => {
				return (
					<Tab.Screen
						key={i}
						name={item?.name}
						component={item?.component}
						options={{
							tabBarItemStyle: { display: 'none' },
							tabBarLabel: ({ focused }) => <BottomTabLabel focused={focused} content={''} />,
							tabBarIcon: ({ focused }: { focused: boolean }) => (
								<BottomTabButton source={icons.ic_menu_work} focused={focused} />
							),
							tabBarHideOnKeyboard: true,
						}}
					/>
				)
			})} */}
        </Tab.Navigator>
    );
};

export default BottomTabScreen;

const $tabBarItem: any = {
    paddingVertical: 7,
    justifyContent: 'space-around',
}

const $tabBarLabel: any = {
    fontSize: 15,
    fontWeight: '500',
};

const exitRoutes = ['Trang chủ']
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
