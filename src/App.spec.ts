import { handler, paper } from '../testing/GraphQLHandler'

it('should render users list', () => {
  cy.intercept('POST', '/api', async (request) => {
    const { body } = request

    if (!body) {
      return request.reply({
        statusCode: 400,
        body: {
          errors: [
            {
              message: `No request body provided`,
            },
          ],
        },
      })
    }

    const { query, variables } = body

    if (!query) {
      return request.reply({
        statusCode: 400,
        body: {
          errors: [
            {
              message:
                'No "query" provided in request body but is required for querying with graphql-mocks graphql handler',
            },
          ],
        },
      })
    }

    const result = await handler.query(query, variables)
    request.reply(200, result)
  })

  cy.visit('/')

  paper.data.User.forEach((user) => {
    cy.findByText(user.name).should('exist')
    cy.findByText(user.email).should('exist')
    cy.findByText(user.username).should('exist')
  })
})
