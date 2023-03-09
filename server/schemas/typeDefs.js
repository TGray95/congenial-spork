const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    bio: String
    games: [String]
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    friends: [User]
    profile: Profile
  }

  type Group {
    _id: ID
    groupName: String
    groupCreator: String
    game: String
    description: String
    members: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    me: User

    groups: [Group]
    group(groupId: ID!): Group
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    removeUser(userId: ID!): User
    addFriend(userId: ID!, friendId: ID!): User
    removeFriend(userId: ID!, friendId: ID!): User
    addProfileBio(userId: ID!, bioText: String!): User
    addProfileGame(userId: ID!, game: String!): User

    addGroup(groupName: String!, game: String!, groupCreator: String!, description: String!): Group
    removeGroup(groupId: ID!): Group
    addGroupMember(groupId: ID!): Group
    removeGroupMember(groupId: ID!, userId: ID!): Group
  }
`;

module.exports = typeDefs;
