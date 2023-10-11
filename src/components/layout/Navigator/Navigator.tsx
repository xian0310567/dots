import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorCallback} from './lib/Navigator';

import Home from '@/page/Home';
import AddEvent from '@/modal/AddEvent';

import HeaderSaveButton from '@/components/feature/AddEventModal/HeaderSaveButton';

import useDarkMode from '@/hooks/feature/days/useDarkMode';

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
            title: '',
            headerRight: () => <HeaderSaveButton />,
            headerStyle: {
              backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
