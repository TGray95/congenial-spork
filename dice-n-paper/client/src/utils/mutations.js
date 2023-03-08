import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_PROFILE_BIO = gql`
  mutation addProfileBio($userId: ID!, $bioText: String!) {
    addProfileBio(userId: $userId, bioText: $bioText) {
      _id
      profile {
        bio
      }
    }
  }
`;
export const ADD_GROUP = gql`
  mutation addGroup(
    $groupName: String!
    $game: String!
    $groupCreator: String!
  ) {
    addGroup(groupName: $groupName, game: $game, groupCreator: $groupCreator) {
      _id
      groupName
    }
  }
`;
export const ADD_GROUP_MEMBER = gql`
mutation addGroupMember($groupId: ID!) {
  addGroupMember(groupId: $groupId) {
    _id
    groupName
  }
}`