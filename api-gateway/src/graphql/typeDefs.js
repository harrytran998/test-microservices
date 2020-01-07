import { gql } from 'apollo-server'

const typeDefs = gql`
  scalar Date

  type Listing {
    id: ID!
    description: String!
    title: String!
  }
  type User {
    id: ID!
    email: String!
  }

  type UserSession {
    id: ID!
    user: User!
    createdAt: Date!
    expiresAt: Date!
  }

  type Query {
    listings: [Listing!]!
    users: [User!]!
  }

  type Mutation {
    createUser(email: String!, password: String!): User!
    createUserSession(email: String!, password: String!): UserSession!
  }
`

export default typeDefs
