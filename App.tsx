import { registerRootComponent } from 'expo';
import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CreateQuestScreen from './screens/CreateQuestScreen';
import TaskListScreen from './screens/TaskListScreen';
import { useColorScheme } from './hooks/useColorScheme';
import { Colors } from './constants/Colors';
import { TaskProvider } from './context/TaskContext';  // Import TaskProvider

const Stack = createStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: Colors.light.primary,
    background: Colors.light.background,
    card: Colors.light.card,
    text: Colors.light.text,
    border: Colors.light.border,
    notification: Colors.light.notification,
  },
  fonts: {
    regular: {
      fontFamily: 'System',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'System',
      fontWeight: 'bold',
    },
    heavy: {
      fontFamily: 'System',
      fontWeight: '900',
    },
  },
};

function App() {
  const colorScheme = useColorScheme();

  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CreateQuest" component={CreateQuestScreen} />
          <Stack.Screen name="TaskList" component={TaskListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}

export default App;
registerRootComponent(App);
