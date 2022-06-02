import { graphql } from 'react-relay'

export const AllUsers = graphql`
  query AllUsersQuery {
    users {
      data {
        id
        username
        name
        email
        posts {
          data {
            id
            title
          }
        }
      }
    }
  }
`
