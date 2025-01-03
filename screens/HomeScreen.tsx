import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  CreateQuest: undefined;
  TaskList: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Create Quest" onPress={() => navigation.navigate('CreateQuest')} />
      <Button title="Task List" onPress={() => navigation.navigate('TaskList')} />
    </View>
  );
};

export default HomeScreen;
