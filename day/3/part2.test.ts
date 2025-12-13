import { test, expect, describe } from 'bun:test'
import { buildLargestNumber, part2Initial } from './part2'
import { loadInput } from './loadInput'

describe('integration tests', () => {
    test.each([
        { fn: part2Initial, name: 'part2Initial' },
    ])('$name', async ({ fn }) => {
        const solution = fn(await loadInput())
        expect(solution).toMatchInlineSnapshot(`168575096286051`)
    })
})

describe('unit tests - sample cases', () => {
    test.each([
        { input: '987654321111111', expected: 987654321111 },
        { input: '811111111111119', expected: 811111111119 },
        { input: '234234234234278', expected: 434234234278 },
        { input: '818181911112111', expected: 888911112111 },
    ])('buildLargestNumber($input) returns $expected', ({ input, expected }) => {
        expect(buildLargestNumber(input)).toEqual(expected)
    })

    test.each([
        { input: '987654321111111', expected: 98 },
        { input: '811111111111119', expected: 89 },
        { input: '234234234234278', expected: 78 },
        { input: '818181911112111', expected: 92 },
    ])('buildLargestNumber($input, 2) returns $expected', ({ input, expected }) => {
        expect(buildLargestNumber(input, 2)).toEqual(expected)
    })
})
