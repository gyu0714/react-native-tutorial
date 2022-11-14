import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {HomeNaviParams, NaviParamsProps} from '../navigations/Stack';

interface ListProps extends NaviParamsProps<'List'> {
  navigation: StackNavigationProp<HomeNaviParams, 'List'>;
  item: {_id: string; name: string};
}

const items = [
  {_id: 1, name: 'React Native'},
  {_id: 2, name: 'React Navigation'},
  {_id: 3, name: 'Test'},
];

const List = ({navigation}: ListProps) => {
  const _onPress = (item: ListProps) => {
    navigation.navigate('Item', {id: item?._id, name: item?.name});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.styledText}>List</Text>
      {items.map(item => (
        <Button
          key={item._id}
          title={item.name}
          onPress={() => _onPress(item)}
        />
      ))}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styledText: {
    fontSize: 30,
    marginBottom: 10,
  },
});
