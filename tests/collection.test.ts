import { describe, it, expect } from 'vitest'
import { getCollection } from '../src'

class TestCollectionItem {
    test: string = ''
    'test-select': string = ''
}

describe('Collection', () => {
  it('should fetch collection', async () => {
    const collection = await getCollection('test', TestCollectionItem)
    expect(collection).toHaveLength(3)
  })
})
