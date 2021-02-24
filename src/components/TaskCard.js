import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import TagList from './TagList';

const TaskCard = (props) => {
  const { title, tags, onPress } = props;
  return (
    <TouchableOpacity style={styles.taskCard} onPress={onPress}>
      <Text>{title}</Text>
      <TagList tags={tags} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskCard: {
    height: 80,
    elevation: 1,
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
});
export default TaskCard;
