import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {BSON} from 'realm';
import {realmMain, User} from '../schema/Schema';

interface Props {
  save: () => void;
}

export const CrearUser: React.FC<Props> = ({save}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //
  //
  const saveUser = () => {
    realmMain.write(() => {
      realmMain.create<User>('User', {
        _id: new BSON.ObjectId(),
        name: name,
        email: email,
        password: password,
      });
    });
    save();
  };

  return (
    <View style={styles.center}>
      <Text>Crear Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="email"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        keyboardType="visible-password"
        onChangeText={setPassword}
        value={password}
      />

      <Button onPress={() => saveUser()} title="Guardar" />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    backgroundColor: 'white',
    width: '80%',
    marginVertical: 10,
  },
});
