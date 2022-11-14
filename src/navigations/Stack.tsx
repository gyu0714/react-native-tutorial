import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import Item from '../screens/Item';
import List from '../screens/List';

const Stack = createStackNavigator();

export type HomeNaviParams = {
  Home?: {};
  List?: {};
  Item?: {};
};

export type NaviParamsProps<T extends keyof HomeNaviParams> = StackScreenProps<
  HomeNaviParams,
  T
>;

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Item" component={Item} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
