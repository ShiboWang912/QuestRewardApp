import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useTaskContext } from '../context/TaskContext';  // Import useTaskContext

const CreateQuestScreen = ({ navigation }: { navigation: any }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { addTask } = useTaskContext();  // Get addTask from context

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || dueDate;
    setShowDatePicker(Platform.OS === 'ios');
    setDueDate(currentDate);
  };

  const handleAddQuest = () => {
    const newQuest = {
      title,
      description,
      dueDate,
      status: 'in progress',
    };
    addTask(newQuest);  // Add task using context
    navigation.navigate('TaskList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Quest</Text>
      <TextInput
        style={styles.input}
        placeholder="Quest Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Quest Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Select Due Date" onPress={() => setShowDatePicker(true)} />
      {showDatePicker && (
        <DateTimePicker
          value={dueDate}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      <Button title="Add Quest" onPress={handleAddQuest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
});

export default CreateQuestScreen;
