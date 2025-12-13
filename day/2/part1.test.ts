import { test, expect, describe } from 'bun:test'
import { part1Initial, validateRange } from './part1'
import { loadInput } from './loadInput'

describe('integration tests', () => {
    test.each([
        { fn: part1Initial, name: 'part1Initial' },
    ])('$name', async ({ fn }) => {
        const solution = fn(await loadInput())
        expect(solution).toMatchInlineSnapshot(`13919717792`)
    })
})

describe('unit tests - sample cases', () => {
    test.each([
        { start: 11, end: 22, expected: [11, 22] },
        { start: 95, end: 115, expected: [99] },
        { start: 998, end: 1012, expected: [1010] },
        { start: 1188511880, end: 1188511890, expected: [1188511885] },
        { start: 222220, end: 222224, expected: [222222] },
        { start: 1698522, end: 1698528, expected: [] },
        { start: 446443, end: 446449, expected: [446446] },
        { start: 38593856, end: 38593862, expected: [38593859] },
    ])('validateRange($start, $end) returns $expected', ({ start, end, expected }) => {
        expect(validateRange(start, end)).toEqual(expected)
    })
})
