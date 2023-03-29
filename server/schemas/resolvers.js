const { User, Group } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require('../utils/auth')

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("friends", "profile");
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate("friends", "profile");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({_id: context.user._id}).populate("friends");
      }
      throw new AuthenticationError('Not logged in!')
    },
    groups: async () => {
      return Group.find().populate("members");
    },
    group: async (parent, { groupId }) => {
      return Group.findOne({ _id: groupId }).populate("members");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user)

      return { token, user };
    },
    removeUser: async (parent, { userId }) => {
        const user = await User.findOneAndDelete({
          _id: userId,
        });

        return { user };
      
    },
    addFriend: async (parent, {userId, friendId}) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { friends: friendId },
        }
        );
    },
    removeFriend: async (parent, {userId, friendId}) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $pull: { friends: friendId },
        }
        );
    },
    addProfileBio: async (parent, {userId, bioText}) => {
      return User.findOneAndUpdate(
        {_id: userId},
        {
          $set: {"profile.bio": bioText}
        }
      )
    },
    addProfileGame: async (parent, {userId, game}) => {
      return User.findOneAndUpdate(
        {_id: userId},
        {
          $addToSet: {"profile.games": game}
        }
      )
    },
    login: async (parent, {email, password}) => {
      const user = await User.findOne({email});
      if (!user) {
        throw new AuthenticationError("No account associated with this email");
      }
      const correctPass = await user.isCorrectPassword(password);
      
      if (!correctPass) {
        throw new AuthenticationError("Incorrect Password");
      }
      const token = signToken(user);
      return {token, user};
    },
    addGroup: async (parent, { groupName, game, groupCreator, description }) => {
        const group = await Group.create({ groupName, game, groupCreator, description });
        return { group };
      },
      removeGroup: async (parent, { groupId }) => {
        const group = await Group.findOneAndDelete({
          _id: groupId,
        });

        return { group };
      
    },
    addGroupMember: async (parent, {groupId}, context) => {
      return Group.findOneAndUpdate(
        { _id: groupId },
        {
          $addToSet: { members: context.user._id },
        }
        );
    },
    removeGroupMember: async (parent, {groupId, userId}) => {
      return Group.findOneAndUpdate(
        { _id: groupId },
        {
          $pull: { members: userId },
        }
        );
    }
  },
};

module.exports = resolvers;