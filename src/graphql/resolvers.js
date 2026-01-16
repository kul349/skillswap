import User from "@/models/User";
import Skill from "@/models/Skill";
import SwapRequest from "@/models/SwapRequest";

const resolver = {
  Query: {
    // Get all users with their offered and wanted skills
    users: async () => {
      return await User.find()
        .populate("skillsOffered")
        .populate("skillsWanted");
    },

    // Get a single user by ID with populated skills
    user: async (_, { id }) => {
      return await User.findById(id)
        .populate("skillsOffered")
        .populate("skillsWanted");
    },

    // Get all swap requests for a user with nested Skill + User info
    swapRequests: async (_, { userId }) => {
      return await SwapRequest.find({
        $or: [{ fromUser: userId }, { toUser: userId }],
      }).populate([
        { path: "fromUser", populate: ["skillsOffered", "skillsWanted"] },
        { path: "toUser", populate: ["skillsOffered", "skillsWanted"] },
        { path: "offeredSkill", populate: { path: "owner" } },
        { path: "requestedSkill", populate: { path: "owner" } },
      ]);
    },
  },

  Mutation: {
    // Create a new user
    createUser: async (_, { name, email }) => {
      return await User.create({ name, email });
    },

    // Update offered and wanted skills
    updateSkills: async (
      _,
      { userId, skillsOffered = [], skillsWanted = [] }
    ) => {
      return await User.findByIdAndUpdate(
        userId,
        { skillsOffered, skillsWanted },
        { new: true }
      )
        .populate("skillsOffered")
        .populate("skillsWanted");
    },

    // Create a swap request
    sendSwapRequest: async (
      _,
      { fromUserId, toUserId, offeredSkill, requestedSkill }
    ) => {
      // Optional: validate skills exist
      const offered = await Skill.findById(offeredSkill);
      const requested = await Skill.findById(requestedSkill);
      if (!offered || !requested)
        throw new Error("One or more skills not found");

      return await SwapRequest.create({
        fromUser: fromUserId,
        toUser: toUserId,
        offeredSkill,
        requestedSkill,
      });
    },

    // Accept a swap request
    acceptSwapRequest: async (_, { id }) =>
      await SwapRequest.findByIdAndUpdate(
        id,
        { status: "accepted" },
        { new: true }
      ).populate([
        { path: "fromUser" },
        { path: "toUser" },
        { path: "offeredSkill", populate: { path: "owner" } },
        { path: "requestedSkill", populate: { path: "owner" } },
      ]),

    // Reject a swap request
    rejectSwapRequest: async (_, { id }) =>
      await SwapRequest.findByIdAndUpdate(
        id,
        { status: "rejected" },
        { new: true }
      ).populate([
        { path: "fromUser" },
        { path: "toUser" },
        { path: "offeredSkill", populate: { path: "owner" } },
        { path: "requestedSkill", populate: { path: "owner" } },
      ]),

    // Start a swap
    startSwap: async (_, { id }) =>
      await SwapRequest.findByIdAndUpdate(
        id,
        { status: "in_progress" },
        { new: true }
      ).populate([
        { path: "fromUser" },
        { path: "toUser" },
        { path: "offeredSkill", populate: { path: "owner" } },
        { path: "requestedSkill", populate: { path: "owner" } },
      ]),

    // Complete a swap
    completeSwap: async (_, { id }) =>
      await SwapRequest.findByIdAndUpdate(
        id,
        { status: "completed" },
        { new: true }
      ).populate([
        { path: "fromUser" },
        { path: "toUser" },
        { path: "offeredSkill", populate: { path: "owner" } },
        { path: "requestedSkill", populate: { path: "owner" } },
      ]),
  },
};

export default resolver;
