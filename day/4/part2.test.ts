import { test, expect, describe } from 'bun:test'
import { part2Initial, processLine } from './part2'
import { loadInput } from './loadInput'

describe('integration tests', () => {
    test.each([
        { fn: part2Initial, name: 'part2Initial' },
    ])('$name', async ({ fn }) => {
        const solution = fn(await loadInput())
        expect(solution).toMatchInlineSnapshot()
    })
})

describe('unit tests', () => {
    test.each([
        // { input: 'example', expected: 42 },
    ])('processLine($input) returns $expected', ({ input, expected }) => {
        expect(processLine(input)).toEqual(expected)
    })
})
