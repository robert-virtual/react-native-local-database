import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Post} from '../schema/Schema';

interface Props {
  post: Post;
}

export const PostFC: React.FC<Props> = ({post}) => {
  return (
    <View style={styles.box}>
      <Text>{post.content}</Text>
      <Text>User: {post.assignee}</Text>
      <Text>Date: {post.createdAt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    padding: 10,
  },
});
