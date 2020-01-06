import { gql } from 'apollo-server'

const typeDefs = gql`
  type Listing {
    id: ID!
    description: String!
    title: String!
  }
  type Query {
    listings: [Listing!]!
  }
`

export default typeDefs
