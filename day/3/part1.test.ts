import { test, expect, describe } from 'bun:test'
import {
    part1Initial,
    getOptimalRatingCombo,
    part1Optimized,
    getOptimalRatingComboOptimized,
} from './part1'
import { loadInput } from './loadInput'

describe('integration tests', () => {
    test.each([
        { fn: part1Initial, name: 'part1Initial' },
        { fn: part1Optimized, name: 'part1Optimized' },
    ])('$name', async ({ fn }) => {
        const solution = fn(await loadInput())
        expect(solution).toMatchInlineSnapshot(`17031`)
    })
})

describe('unit tests - sample cases', () => {
    test.each([
        { input: '987654321111111', expected: 98 },
        { input: '811111111111119', expected: 89 },
        { input: '234234234234278', expected: 78 },
        { input: '818181911112111', expected: 92 },
    ])('getOptimalRatingCombo($input) returns $expected', ({ input, expected }) => {
        expect(getOptimalRatingCombo(input)).toEqual(expected)
    })

    test.each([
        { input: '987654321111111', expected: 98 },
        { input: '811111111111119', expected: 89 },
        { input: '234234234234278', expected: 78 },
        { input: '818181911112111', expected: 92 },
    ])('getOptimalRatingComboOptimized($input) returns $expected', ({ input, expected }) => {
        expect(getOptimalRatingComboOptimized(input)).toEqual(expected)
    })
})
