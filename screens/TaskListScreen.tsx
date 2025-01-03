import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTaskContext } from '../context/TaskContext';  // Import useTaskContext
// task list testing
const TaskListScreen = () => {
  const { tasks, updateTask } = useTaskContext();  // Get tasks and updateTask from context

  const handleToggleStatus = (index: number) => {
    const updatedTask = { ...tasks[index], status: tasks[index].status === 'done' ? 'in progress' : 'done' };
    updateTask(index, updatedTask);  // Update task using context
  };

  const handleRemoveTask = (index: number) => {
    const updatedTask = { ...tasks[index], status: 'removed' };  // Mark task as removed
    updateTask(index, updatedTask);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task List</Text>
      <FlatList
        data={tasks.filter(task => task.status !== 'removed')}  // Filter out removed tasks
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text style={styles.taskDescription}>{item.description}</Text>
            <Text style={styles.taskDate}>Due Date: {item.dueDate.toLocaleDateString()}</Text>
            <Text style={styles.taskStatus}>Status: {item.status}</Text>
            <TouchableOpacity onPress={() => handleToggleStatus(index)}>
              <Text style={styles.toggleButton}>
                {item.status === 'done' ? 'Mark as In Progress' : 'Mark as Done'}
              </Text>
            </TouchableOpacity>
            {item.status === 'done' && (
              <Button title="Remove Task" onPress={() => handleRemoveTask(index)} />
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  taskContainer: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskDescription: {
    fontSize: 16,
  },
  taskDate: {
    fontSize: 14,
    color: '#555',
  },
  taskStatus: {
    fontSize: 14,
    marginBottom: 8,
  },
  toggleButton: {
    color: 'blue',
  },
});

export default TaskListScreen;
