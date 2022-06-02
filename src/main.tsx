import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { loadQuery, RelayEnvironmentProvider } from 'react-relay/hooks'
import RelayEnvironment from './RelayEnvironment'
import { AllUsers } from './queries/AllUsers'
import { AllUsersQuery } from './queries/__generated__/AllUsersQuery.graphql'

const preloadedQuery = loadQuery<AllUsersQuery>(RelayEnvironment, AllUsers, {})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={'Loading...'}>
      <App preloadedQuery={preloadedQuery} />
    </Suspense>
  </RelayEnvironmentProvider>,
)
