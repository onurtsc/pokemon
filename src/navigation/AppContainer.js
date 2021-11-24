import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import MainNavigator from './MainNavigator'
import colors from '../constants/colors';

const AppContainer = () => {

    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: colors.backgroundColor,
        }
    }

    return (
        <NavigationContainer theme={theme}>
            <MainNavigator />
        </NavigationContainer>
    )
};

export default AppContainer;