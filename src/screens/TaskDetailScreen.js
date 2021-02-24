// base and lib imports
import React from 'react';
import { useMutation } from '@apollo/client';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';

// store actions
import { DELETE_TASK_BY_ID } from '../store';

// common components
import Button from '../components/Button';
import { CONSTANTS } from '../utils';

const TaskDetailScreen = (props) => {
  const { navigation, route } = props;
  const [deleteTask, { loading, error }] = useMutation(DELETE_TASK_BY_ID);
  // called when delete task clicked
  const onDeleteTask = () => {
    deleteTask({
      variables: {
        id: route.params?.task.id,
      },
    })
      .then(() => {
        // go back to main screen if delete completes
        navigation.goBack();
        route?.params?.refreshTaskList();
        ToastAndroid.show(CONSTANTS.TASK_DELETED, ToastAndroid.SHORT);
      })
      .catch(() => {
        // show error toast
        ToastAndroid.show(CONSTANTS.ERROR_MESSGAE, ToastAndroid.SHORT);
      });
  };
  if (loading) {
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
    <SafeAreaView style={styles.detailContainer}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
            {route.params?.task.title}
          </Text>
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
          {route.params?.task.start_time}
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
          {route.params?.task.end_time}
        </Text>
      </ScrollView>
      <Button label="DELETE TASK" onPress={onDeleteTask} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    margin: 20,
  },
});

export default TaskDetailScreen;
