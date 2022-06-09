import { graphql } from 'react-relay'

export const AllUsers = graphql`
  query AllUsersQuery {
    users {
      id
      username
      name
      email
    }
  }
`
