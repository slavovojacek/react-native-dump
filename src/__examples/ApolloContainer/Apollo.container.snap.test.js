import React from 'react'

import { ApolloContainer } from './Apollo.container'

import { assertSnapshots } from '../../TestUtils/snapshots'

jest.mock('./Apollo.container.view', () => null)

describe('ApolloContainer Snapshots', () => {
  const config = []
  assertSnapshots(ApolloContainer, config)
})