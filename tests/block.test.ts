import { describe, it, expect } from 'vitest'
import { getBlock } from '../src'

describe('Block', () => {
  it('should fetch a block by key', async () => {
    const block = await getBlock('test-block');
    expect(block).toBeDefined();
    expect(block?.content).toBe('Test block content');
  })
})
