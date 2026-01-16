import gql from "graphql-tag";

const typeDefs = gql`
  type Skill {
    id: ID!
    name: String!
    level: String!
    owner: User!
    createdAt: String
  }

  type User {
    id: ID!
    name: String!
    email: String!
    skillsOffered: [Skill!]
    skillsWanted: [Skill!]
    rating: Float
    createdAt: String
  }

  type SwapRequest {
    id: ID!
    fromUser: User!
    toUser: User!
    offeredSkill: Skill!
    requestedSkill: Skill!
    status: String!
    createdAt: String
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    swapRequests(userId: ID!): [SwapRequest!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!

    updateSkills(userId: ID!, skillsOffered: [ID!], skillsWanted: [ID!]): User!

    sendSwapRequest(
      fromUserId: ID!
      toUserId: ID!
      offeredSkill: ID!
      requestedSkill: ID!
    ): SwapRequest!

    acceptSwapRequest(id: ID!): SwapRequest!
    rejectSwapRequest(id: ID!): SwapRequest!
    startSwap(id: ID!): SwapRequest!
    completeSwap(id: ID!): SwapRequest!
  }
`;

export default typeDefs;
