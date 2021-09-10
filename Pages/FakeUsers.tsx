import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {UserFC} from '../components/UserFC';
import {FakeUser} from './Users';

interface Props {}

export const FakeUsers: React.FC<Props> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fakeUsers, setFakeUser] = useState<FakeUser[]>([]);

  const saveUser = () => {
    setFakeUser([...fakeUsers, {name, email, password, createdAt: new Date()}]);
    console.log(fakeUsers);
  };
  return (
    <View style={styles.box}>
      {fakeUsers.map(user => (
        <UserFC key={user.email} user={user} />
        // <Text key={user.email}>{user.email}</Text>
      ))}
      <View style={styles.middle}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    backgroundColor: 'white',
    width: '80%',
    marginVertical: 10,
  },
  middle: {
    display: 'flex',
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
});
