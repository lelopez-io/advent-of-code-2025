import { test, expect, describe } from 'bun:test'
import { part1Initial, getOptimalRatingCombo, part1Optimized } from './part1'
import { loadInput } from './loadInput'

describe('integration tests', () => {
    test('part1Initial', async () => {
        const solution = part1Initial(await loadInput())
        expect(solution).toMatchInlineSnapshot(`17031`)
    })
    test('part1Optimized', async () => {
        const solution = part1Optimized(await loadInput())
        expect(solution).toMatchInlineSnapshot(`17031`)
    })
})

describe('unit tests - sample cases', () => {
    test('getOptimalRatingCombo - example1', () => {
        expect(getOptimalRatingCombo('987654321111111')).toEqual(98)
    })
    test('getOptimalRatingCombo - example1', () => {
        expect(getOptimalRatingCombo('811111111111119')).toEqual(89)
    })
    test('getOptimalRatingCombo - example1', () => {
        expect(getOptimalRatingCombo('234234234234278')).toEqual(78)
    })
    test('getOptimalRatingCombo - example1', () => {
        expect(getOptimalRatingCombo('818181911112111')).toEqual(92)
    })
})
