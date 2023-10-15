import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorCallback} from './lib/Navigator';

import Home from '@/page/Home';
import AddEvent from '@/modal/AddEvent';

import useDarkMode from '@/hooks/util/useDarkMode';

const Stack = createNativeStackNavigator<NavigatorCallback>();

const Navigator = () => {
  const isDarkMode = useDarkMode();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddEvent"
          component={AddEvent}
          options={{
            presentation: 'modal',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
