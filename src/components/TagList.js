import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TagList = (props) => {
  const { tags } = props;
  console.log('Taglist', tags);
  const renderItem = ({ item, index }) => {
    // adding comma to each element,except the last one
    const lastString = index === tags.length - 1 ? '' : ',';
    return <Text style={styles.chip}>{item?.name}</Text>;
  };
  return (
    <View style={styles.tagsContainer}>
      <FlatList
        data={tags}
        // horizontal={true}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 1,
  },
  chip: {
    width: 80,
    height: 40,
    backgroundColor: 'red',
  },
});

export default TagList;
