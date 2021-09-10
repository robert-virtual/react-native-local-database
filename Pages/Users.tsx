import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {UserFC} from '../components/UserFC';
import {realmMain, User} from '../schema/Schema';
import {CrearUser} from './CrearUser';

interface Props {}

export const Users: React.FC<Props> = () => {
  const [users, setUsers] = useState<Realm.Results<User & Realm.Object>>();
  const [crear, setCrear] = useState(false);
  useEffect(() => {
    setUsers(realmMain.objects<User>('User'));
  }, []);

  if (crear) {
    return <CrearUser save={() => setCrear(false)} />;
  }
  const verAlert = () => {
    Alert.alert('Titulo', 'Mensaje', [
      {
        text: 'Si',
        onPress: () => '',
      },
      {
        text: 'No',
        onPress: () => '',
      },
    ]);
  };
  return (
    <View style={styles.box}>
      <FlatList
        contentContainerStyle={styles.list}
        data={users}
        renderItem={({item: user}) => (
          <UserFC key={user._id.toHexString()} user={user} />
        )}
      />

      <TouchableOpacity
        style={{...styles.btn, right: 80}}
        onPress={() => verAlert()}>
        <Text style={styles.btnText}>A</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => setCrear(true)}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  middle: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
  btn: {
    position: 'absolute',
    width: 50,
    height: 50,
    bottom: 10,
    right: 10,
    lineHeight: 50,
    backgroundColor: '#0984e3',
    borderRadius: 100,
    padding: 15,
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});
