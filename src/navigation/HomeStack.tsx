import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScren/HomeScreen';
import DetailsScreen from '../screens/DetailScreen/DetailScreen';
import { HomeStackNavigatorParamList } from './types';

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
        </HomeStack.Navigator>
    );
};

export default HomeStackNavigator;