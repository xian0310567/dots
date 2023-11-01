import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigatorCallback, TabsCallback} from './lib/Navigator';

import Home from '@/page/Home';
import AddEvent from '@/modal/AddEvent';
import SetTodo from '@/modal/SetTodo';
import My from '@/page/My';

import useDarkMode from '@/hooks/util/useDarkMode';

const Tabs = createBottomTabNavigator<TabsCallback>();
const Stack = createNativeStackNavigator<NavigatorCallback>();

const ModalStackNavigator = () => {
  const isDarkMode = useDarkMode();

  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
      })}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={20} color={color} />
          ),
          tabBarLabel: () => <></>,
        }}
      />
      <Tabs.Screen
        name="My"
        component={My}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user-circle" size={20} color={color} />
          ),
          tabBarLabel: () => <></>,
        }}
      />
    </Tabs.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={ModalStackNavigator}
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
        <Stack.Screen
          name="SetTodo"
          component={SetTodo}
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
