import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Button from '../components/Button';
import { ROUTE_NAME } from '../navigations/routes';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_TASKS } from '../store';
import TaskCard from '../components/TaskCard';
import { useEffect } from 'react';

const TaskListScreen = (props) => {
  const [getTasks, { loading, data, error }] = useLazyQuery(GET_TASKS, {
    fetchPolicy: 'network-only',
  });
  const onNavigate = () => {
    props.navigation.navigate(ROUTE_NAME.TASK_ADD_SCREEN, {
      refreshTaskList: getTasks,
    });
  };

  useEffect(() => {
    getTasks();
  }, [getTasks]);

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

  const onTaskCardPress = (item) => {
    // console.log('task card press', item);
    props.navigation.navigate(ROUTE_NAME.TASK_DETAIL_SCREEN, {
      task: { ...item },
      refreshTaskList: getTasks,
    });
  };
  const renderItem = ({ item }) => (
    <TaskCard
      title={item.title}
      tags={item.tags}
      onPress={() => onTaskCardPress(item)}
    />
  );
  // console.log('data is', data);
  const onRefresh = () => {
    console.log('refreshing');
    getTasks();
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data?.tasks}
        refreshing={loading}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index.toString()}
        onRefresh={onRefresh}
      />
      <Button label="ADD" onPress={onNavigate} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffeee',
  },
});
export default TaskListScreen;
