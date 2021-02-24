import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const TaskDetailScreen = (props) => {
  const { navigation, route } = props;
  console.log('task in navigation', props);
  return (
    <SafeAreaView style={styles.detailContainer}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
          {route.params?.task.title}
        </Text>
      </View>
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
