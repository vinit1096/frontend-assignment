import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TagList = (props) => {
  const { tags, selectedTag, setSelectedTag } = props;
  const onChipPress = (item) => {
    setSelectedTag(item);
  };
  const renderItem = (item, index) => {
    const activeStyle =
      selectedTag?.id === item.id
        ? {
            backgroundColor: '#71C19E',
            borderWidth: 0,
          }
        : {};
    // adding comma to each element,except the last one
    return (
      <TouchableOpacity
        style={[styles.chip, { ...activeStyle }]}
        onPress={() => onChipPress?.(item)}
        key={index.toString()}>
        <Text style={styles.chipText}>{item?.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.tagsContainer}>
      {tags?.map((item, index) => renderItem(item, index))}
    </View>
  );
};

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  chip: {
    width: 70,
    height: 40,
    fontSize: 12,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
  },
});

export default TagList;
