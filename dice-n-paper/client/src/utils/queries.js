import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query users {
    users {
      username
      profile {
        bio
        games
      }
      _id
      friends {
        username
        _id
      }
    }
  }
`

export const QUERY_USER = gql`
query user($userId: ID!) {
    user(userId: $userId) {
      username
      friends {
        username
      }
      profile {
        bio
        games
      }
    }
  }
`
export const QUERY_GROUPS = gql`
query groups {
    groups {
    groupName
    game
    groupCreator
    _id
    members {
      _id
      username
    }
    }
  }`

  export const QUERY_GROUP = gql`
  query Group($groupId: ID!) {
    group(groupId: $groupId) {
      _id
      groupName
      
    }
  }
`