import { useState } from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import Icons
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
// Import Pages
import Task from './src/pages/Task';
import NewTask from './src/pages/NewTask';
import Details from './src/pages/Details';
// Import Colors
import { colors } from './src/config/theme';
// Import the Context
import { ThemeContext } from './src/contexts/ThemeContext';


// Create Stack
const Stack = createStackNavigator();

export default function App() {
  // Context Theme
  const [theme, setTheme] = useState({mode: 'light'});

  const updateTheme = (newTheme) => {
    let mode;
    if (!newTheme) {
      mode = theme.mode === 'dark' ? 'light' : 'dark';
      newTheme = {mode};
    }
    setTheme(newTheme);
  }

  // Define Theme (manual)
  let activeColors = colors[theme.mode];

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
        <NavigationContainer>
          <StatusBar 
            backgroundColor={activeColors.primary}
            barStyle={theme.mode === 'dark' ? 'light-content' : 'dark-content'}
          />
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
                    onPress={() => {updateTheme()}}
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
    </ThemeContext.Provider>
  );
}
