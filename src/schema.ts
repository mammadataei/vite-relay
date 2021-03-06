export const schema = `
type Query {
  users: [User]
  user(id: ID!): User
}

type User {
  id: ID!
  name: String
  username: String
  email: String
  phone: String
  website: String
}
`