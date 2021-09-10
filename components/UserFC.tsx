import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {User} from '../schema/Schema';
import {FakeUser} from '../schema/types';

interface Props {
  user: User | FakeUser;
}

export const UserFC: React.FC<Props> = ({user}) => {
  return (
    <View style={styles.box}>
      <Text>{user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Fecha: {user.createdAt?.toLocaleDateString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    padding: 10,
    backgroundColor: 'white',
    elevation: 1,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
