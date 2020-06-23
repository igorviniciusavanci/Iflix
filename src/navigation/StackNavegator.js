import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import Signin from '../screens/Signin';

const Stack = createStackNavigator();

const headerOptions = {
  title: 'IFLIX',
  headerStyle: {
    backgroundColor: '#000',
  },
  headerTitleAlign: 'center',
  headerTintColor: '#db0000',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontFamily: 'bebas-neue-regular',
  },
};

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={Signin} options={headerOptions} />
      <Stack.Screen name="Home" component={Home} options={headerOptions} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={headerOptions}
      />
    </Stack.Navigator>
  );
}
