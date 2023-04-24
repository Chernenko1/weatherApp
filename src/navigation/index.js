import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import {SettingScreen} from '../screens/SettingScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

// const Tabs = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen name="Settings" component={SettingScreen} />
//     </Tab.Navigator>
//   );
// };

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: 'rgba(232, 230, 230, 0.25)'}}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
