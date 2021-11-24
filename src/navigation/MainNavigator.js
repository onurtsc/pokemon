import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import colors from '../constants/colors';

import PokemonsOverviewScreen from '../screens/PokemonsOverviewScreen'
import LoginScreen from '../screens/LoginScreen'

const defaultNavOptions = {
    headerTitle: '',
    headerStyle: {
        backgroundColor: colors.backgroundColor,
        elevation: 0,
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
    },
    headerBackTitleVisible: false,
    headerTintColor: colors.tertiary
}

const MainStack = createStackNavigator()

const MainNavigator = () => {

    return (
        <MainStack.Navigator screenOptions={defaultNavOptions} >
            <MainStack.Screen
                name="Login"
                component={LoginScreen}
            />
            <MainStack.Screen
                name="PokemonsOverview"
                component={PokemonsOverviewScreen}
            />
        </MainStack.Navigator>
    )
}

export default MainNavigator