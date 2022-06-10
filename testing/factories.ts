import * as fake from '@ngneat/falso'
import { User } from './resolvers-types'

export function userFactory(overrides: Partial<User> = {}): User {
  return {
    id: fake.randUuid(),
    name: fake.randFullName(),
    phone: fake.randPhoneNumber(),
    username: fake.randUserName(),
    email: fake.randEmail(),
    website: fake.randDomainName(),
    ...overrides,
  }
}
