import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Colors
import { colors } from './src/config/theme';

// Import Icons
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

// Import Pages
import Task from './src/pages/Task';
import NewTask from './src/pages/NewTask';
import Details from './src/pages/Details';

// Create Stack
const Stack = createStackNavigator();

export default function App() {
  // Define Theme
  const theme = {mode: 'dark'};
  let activeColors = colors[theme.mode];

  return (
    <NavigationContainer>
      {/* Initial Rote */}
      <Stack.Navigator initialRouteName='Task'>
        {/* Pages */}
        <Stack.Screen
          name='Task'
          component={Task}
          options={{
            headerTitle: 'Task Manager',
            headerTitleAlign: 'center',
            headerTintColor: activeColors.secondary,
            headerStyle: {
              backgroundColor: activeColors.primary
            },
            headerRight: () => (
              <TouchableOpacity
              // Ativar / Desativar DarkMode Theme
                //onPress={() => {darkMode()}}
              >
                <FontAwesome5 
                  name='moon'
                  size={25}
                  color={activeColors.secondary}
                  style={{
                    marginRight: 25
                  }}
                />
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen
          name='NewTask'
          component={NewTask}
          options={{
            headerTintColor: activeColors.secondary,
            headerStyle: {
              backgroundColor: activeColors.primary
            },
            headerBackImage: () => (
              <AntDesign 
                name='leftcircle'
                size={30}
                color={activeColors.secondary}
                style={{
                  marginLeft: 8
                }}
              />
            )
          }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            headerTintColor: activeColors.secondary,
            headerStyle: {
              backgroundColor: activeColors.primary
            },
            headerBackImage: () => (
              <AntDesign 
                name='leftcircle'
                size={30}
                color={activeColors.secondary}
                style={{
                  marginLeft: 8
                }}
              />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
