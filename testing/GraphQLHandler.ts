import { Paper } from 'graphql-paper'
import { GraphQLHandler } from 'graphql-mocks'
import { Resolvers } from '../src/resolvers-types'

const schema = ``
const resolvers: Resolvers = {
  Query: {
    // ...
  },
  User: {
    id: (user) => user.id,
    username: (user) => user.username,
  },
}

const paper = new Paper(schema)

paper.mutate(({ create }) => {
  create('User', {})
})

const handler = new GraphQLHandler({
  resolverMap: resolvers,

  dependencies: {
    graphqlSchema: schema,
    paper,
  },
})
