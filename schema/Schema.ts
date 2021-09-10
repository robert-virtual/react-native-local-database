import Realm, {BSON} from 'realm';

export class Post {
  content!: string;
  assignee!: Realm.Results<User>;
  createdAt?: Date;
  //
  static schema: Realm.ObjectSchema = {
    name: 'Post',
    properties: {
      content: 'string',
      user: 'User?',
      assignee: {
        type: 'linkingObjects',
        objectType: 'User',
        property: 'posts',
      },
      createdAt: {type: 'date', default: new Date()},
    },
  };
}
export class User {
  _id!: BSON.ObjectId;
  name!: string;
  email!: string;
  password!: string;
  posts!: Realm.List<Post>;
  createdAt?: Date;
  //
  static schema: Realm.ObjectSchema = {
    name: 'User',
    primaryKey: '_id',
    properties: {
      _id: {type: 'objectId'},
      name: 'string',
      email: 'string',
      password: 'string',
      posts: 'Post[]',
      createdAt: {type: 'date', default: new Date()},
    },
  };
}

export const realmMain = new Realm({
  schema: [Post, User],
  schemaVersion: 3,
});
