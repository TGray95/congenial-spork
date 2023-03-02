const { User, Group } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("friends");
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate("friends");
    },
    groups: async () => {
      return Group.find().populate("members");
    },
    group: async (parent, { groupId }) => {
      return Group.findOne({ _id: groupId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      return { user };
    },
    removeUser: async (parent, { userId }) => {
        const user = await User.findOneAndDelete({
          _id: userId,
        });

        return { user };
      
    },
    addGroup: async (parent, { groupName, game, groupCreator, description }) => {
        const group = await Group.create({ groupName, game, groupCreator, description });
        return { group };
      },
    addGroupMember: async (parent, {groupId, userId}) => {
      return Group.findOneAndUpdate(
        { _id: groupId },
        {
          $addToSet: { members: userId },
        }
        );
    }
  },
};

module.exports = resolvers;