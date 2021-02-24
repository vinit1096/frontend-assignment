import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_TASK, GET_TAGS } from '../store';
import TagList from '../components/TagList';
import { CONSTANTS, convertStringToDateFormat } from '../utils';

const TaskAddScreen = (props) => {
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  // add task callback to post a task from graphql api
  const [addTask, { loading, error }] = useMutation(ADD_TASK);
  // fetches tags list and use loading to show loader
  const { loading: tag_loading, data: tags_data } = useQuery(GET_TAGS);
  const { navigation, route } = props;

  // calls when user click on add task button
  const onAddTask = () => {
    // converts passed time string to date object,so that it can get posted
    // to the gql server
    const startTimeFormatted = new Date(convertStringToDateFormat(startTime));
    const endTimeFormatted = new Date(convertStringToDateFormat(endTime));

    // callback method from mutuation to add the task
    addTask({
      variables: {
        title: title,
        start_time: startTimeFormatted,
        end_time: endTimeFormatted,
        tag_id: tag?.id,
      },
    })
      .then((res) => {
        ToastAndroid.show(CONSTANTS.TASK_ADDED, ToastAndroid.SHORT);
        route?.params?.refreshTaskList();
        navigation.goBack();
      })
      .catch(() => {
        // handle error
        ToastAndroid.show(CONSTANTS.ERROR_MESSGAE, ToastAndroid.SHORT);
      });
  };

  if (tag_loading || loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#00ff00"
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      />
    );
  }
  if (error) {
    return <Text>Error Occured</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={{ padding: 20, fontSize: 24 }}>Enter task name</Text>
        <TextInput
          value={title}
          onChangeText={(text) => setTitle(text)}
          style={styles.inputText}
          placeholder="Enter title"
        />
        <TextInput
          value={startTime}
          onChangeText={(text) => setStartTime(text)}
          style={styles.inputText}
          placeholder="MMDDYYY"
          keyboardType="phone-pad"
        />
        <TextInput
          value={endTime}
          onChangeText={(text) => setEndTime(text)}
          style={styles.inputText}
          placeholder="MMDDYYY"
          keyboardType="phone-pad"
        />
        <View style={{ margin: 20 }}>
          <TagList
            tags={tags_data.tags}
            selectedTag={tag}
            setSelectedTag={setTag}
          />
        </View>
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
