import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {PostFC} from './components/PostFC';
import {Post, realmMain} from './schema/Schema';

interface Props {}

export const App: React.FC<Props> = () => {
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState<Realm.Results<Post & Realm.Object>>();
  const savePost = () => {
    realmMain.write(() => {
      realmMain.create<Post>('Post', {
        content: content,
      });
    });
  };
  useEffect(() => {
    setPosts(realmMain.objects<Post>('Post'));
  }, []);

  const haddleSave = () => {
    savePost();

    setPosts(realmMain.objects<Post>('Post'));
  };
  return (
    <View style={styles.box}>
      <TextInput placeholder="Post" onChangeText={setContent} value={content} />
      <Button onPress={haddleSave} title="Guardar" />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    backgroundColor: 'white',
    width: '80%',
  },
});
