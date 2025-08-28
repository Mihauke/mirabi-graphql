import { describe, it, expect } from 'vitest'
import { getBlockGroup } from '../src'

describe('BlockGroup', () => {
  it('should fetch a block group by key', async () => {
    const group = await getBlockGroup('test-block-group');
    expect(group).toBeDefined();
    expect(group?.blocks).toHaveLength(1);
  })
})
