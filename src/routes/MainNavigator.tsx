/**
 * @format
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PlayerList from '../screens/PlayerList';
import PlayerDetail from '../screens/PlayerDetail';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Players" component={PlayerList} />
      <Stack.Screen name="Player" component={PlayerDetail} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
