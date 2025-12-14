import { test, expect, describe } from 'bun:test'
import { part1SolutionInitial, part1SolutionOptimized } from './part1'
import { loadInput } from './loadInput'

describe('part1 - integration', () => {
    test.each([
        { fn: part1SolutionInitial, name: 'part1SolutionInitial' },
        { fn: part1SolutionOptimized, name: 'part1SolutionOptimized' },
    ])('$name', async ({ fn }) => {
        const solution = fn(50, await loadInput())
        expect(solution).toMatchInlineSnapshot(`1129`)
    })
})
