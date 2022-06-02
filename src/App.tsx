import { PreloadedQuery, usePreloadedQuery } from 'react-relay'
import { AllUsers } from './queries/AllUsers'
import { AllUsersQuery } from './queries/__generated__/AllUsersQuery.graphql'

export default function App(props: {
  preloadedQuery: PreloadedQuery<AllUsersQuery>
}) {
  const data = usePreloadedQuery<AllUsersQuery>(AllUsers, props.preloadedQuery)

  return (
    <div className="App">
      {data.users?.data?.map(
        (user) =>
          user && (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <p>
                {user.username}: {user.email}
              </p>
              <p>posts written: {user.posts?.data?.length}</p>
            </div>
          ),
      )}
    </div>
  )
}
