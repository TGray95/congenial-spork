const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    friends: [User]!
  }

  type Group {
    _id: ID
    groupName: String
    groupCreator: String
    game: String
    members: [User]
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    groups: [Group]
    group(groupId: ID!): Group
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    removeUser(userId: ID!): User
    addFriend(userId: ID!, friendId: ID!): User
    removeFriend(userId: ID!, friendId: ID!): User
    addGroup(groupName: String!, game: String!, groupCreator: String!): Group
    removeGroup(groupId: ID!): Group
    addGroupMember(groupId: ID!, userId: ID!): Group
    removeGroupMember(groupId: ID!, userId: ID!): Group
  }
`;

module.exports = typeDefs;
