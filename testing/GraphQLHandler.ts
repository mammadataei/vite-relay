import { Paper } from 'graphql-paper'
import { GraphQLHandler } from 'graphql-mocks'
import { Resolvers, User } from './resolvers-types'
import { ResolverMap } from 'graphql-mocks/es/types'
import { schema as graphqlSchema } from '../src/schema'
import { userFactory } from './factories'

export const paper = new Paper(graphqlSchema)

paper.mutate(({ create }) => {
  create('User', userFactory())
  create('User', userFactory())
})

const resolvers: Resolvers & ResolverMap = {
  Query: {
    users: () => paper.data.User as any,
    user: (_, args) =>
      paper.data.User.find((user) => user.id === args.id) as any,
  },
}

export const handler = new GraphQLHandler({
  resolverMap: resolvers,

  dependencies: {
    graphqlSchema,
    paper,
  },
})
