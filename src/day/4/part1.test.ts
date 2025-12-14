import { test, expect, describe } from 'bun:test'
import { part1Initial, processLine } from './part1'
import { loadInput } from './loadInput'

describe('part1 - integration', () => {
    test.each([{ fn: part1Initial, name: 'part1Initial' }])(
        '$name',
        async ({ fn }) => {
            const solution = fn(await loadInput())
            expect(solution).toMatchInlineSnapshot()
        }
    )
})

describe('part1 - unit', () => {
    test.each([
        { input: [undefined, '..@@.@@@@.', '@@@.@.@.@@'], expected: 5 },
    ])('processLine($input) returns $expected', ({ input, expected }) => {
        expect(processLine(input)).toEqual(expected)
    })
})
