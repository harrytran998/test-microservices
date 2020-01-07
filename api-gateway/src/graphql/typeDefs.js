import { gql } from 'apollo-server'

const typeDefs = gql`
  type Listing {
    id: ID!
    description: String!
    title: String!
  }
  type User {
    id: ID!
    email: String!
  }
  type Query {
    listings: [Listing!]!
    users: [User!]!
  }
  type Mutation {
    createUser(email: String!, password: String!): User!
  }
`

export default typeDefs
