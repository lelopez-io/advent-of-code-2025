import { test, expect, describe } from 'bun:test'
import { part1Initial, getOptimalRaitingCombo } from './part1'
import { loadInput } from './loadInput'

describe('integration tests', () => {
    test('part1Initial', async () => {
        const solution = part1Initial(await loadInput())
        expect(solution).toMatchInlineSnapshot(``)
    })
})

describe('unit tests - sample cases', () => {
    test('getOptimalRaitingCombo - example1', () => {
        expect(getOptimalRaitingCombo('987654321111111')).toEqual(98)
    })
    test('getOptimalRaitingCombo - example1', () => {
        expect(getOptimalRaitingCombo('811111111111119')).toEqual(89)
    })
    test('getOptimalRaitingCombo - example1', () => {
        expect(getOptimalRaitingCombo('234234234234278')).toEqual(78)
    })
    test('getOptimalRaitingCombo - example1', () => {
        expect(getOptimalRaitingCombo('818181911112111')).toEqual(92)
    })
})
