import {
  Environment,
  FetchFunction,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'

const API_URL = 'https://graphqlzero.almansi.me/api'

async function fetchGraphQL(
  text?: string | null,
  variables?: Record<string, any>,
) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  })

  return await response.json()
}

const fetchRelay: FetchFunction = async (params, variables) => {
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`)

  return fetchGraphQL(params.text, variables)
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
})
