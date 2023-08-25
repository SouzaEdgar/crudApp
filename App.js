import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Pages
import Task from './src/pages/Task';
import NewTask from './src/pages/NewTask';
import Details from './src/pages/Details';

// Create Stack
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Initial Rote */}
      <Stack.Navigator initialRouteName='Task'>
        {/* Pages */}
        <Stack.Screen
          name='Task'
          component={Task}
          options={{
            headerTintColor: '#f92e6a'
          }}
        />
        <Stack.Screen
          name='NewTask'
          component={NewTask}
          options={{
            headerTintColor: '#f92e6a'
          }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
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
  },
});
