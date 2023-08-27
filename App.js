import { StyleSheet, Button, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AntDesign } from '@expo/vector-icons';

// Import Pages
import Task from './src/pages/Task';
import NewTask from './src/pages/NewTask';
import Details from './src/pages/Details';

// Create Stack
const Stack = createStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      {/* Initial Rote */}
      <Stack.Navigator initialRouteName='Task'>
        {/* Pages */}
        <Stack.Screen
          name='Task Manager'
          component={Task}
          options={{
            headerTintColor: '#f92e6a',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name='NewTask'
          component={NewTask}
          options={{
            headerBackImage: () => (
              <AntDesign 
                name='leftcircle'
                size={30}
                color={'#f92e6a'}
                style={{
                  marginLeft: 8
                }}
              />
            ),
            headerTintColor: '#f92e6a',
          }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            headerBackImage: () => (
              <AntDesign 
                name='leftcircle'
                size={30}
                color={'#f92e6a'}
                style={{
                  marginLeft: 8
                }}
              />
            ),
            headerTintColor: '#f92e6a'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
