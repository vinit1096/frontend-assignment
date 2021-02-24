import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_TASK, GET_TAGS } from '../store';
import TagList from '../components/TagList';

const TaskAddScreen = (props) => {
  // const { loading, error, data } = useQuery(GET_TASKS);
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState(0);
  const { loading: tag_loading, data: tags_data } = useQuery(GET_TAGS);
  const [addTodo, { loading, error }] = useMutation(ADD_TASK);

  const onAddTask = () => {
    addTodo({
      variables: {
        title: title,
      },
    });
    console.log('data', data, loading, error);
    // gets called when add task clicked
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={{ padding: 20, fontSize: 24 }}>Enter task name</Text>
        <TextInput
          value={title}
          onChangeText={(text) => setTitle(text)}
          onSubmitEditing={onAddTask}
          style={styles.inputText}
          placeholder="Enter title"
        />
        <TextInput
          value={title}
          onChangeText={(text) => setTitle(text)}
          onSubmitEditing={onAddTask}
          style={styles.inputText}
          placeholder="Enter start date"
        />
        <TextInput />
        <TagList
          tags={tags_data.tags}
          selectedTag={tag}
          setSelectedTag={setTag}
        />
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={onAddTask}>
        <Text style={styles.buttonText}>Add task</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  inputText: {
    padding: 8,
    fontSize: 14,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2E2D4D',
  },
});
export default TaskAddScreen;
