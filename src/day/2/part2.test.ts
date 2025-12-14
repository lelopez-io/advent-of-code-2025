import { test, expect, describe } from 'bun:test'
import { part2Initial, validateRange } from './part2'
import { loadInput } from './loadInput'

describe('part2 - integration', () => {
    test.each([
        { fn: part2Initial, name: 'part2Initial' },
    ])('$name', async ({ fn }) => {
        const solution = fn(await loadInput())
        expect(solution).toMatchInlineSnapshot(`14582313461`)
    })
})

describe('part2 - unit', () => {
    test.each([
        { start: 11, end: 22, expected: [11, 22] },
        { start: 95, end: 115, expected: [99, 111] },
        { start: 998, end: 1012, expected: [999, 1010] },
        { start: 1188511880, end: 1188511890, expected: [1188511885] },
        { start: 222220, end: 222224, expected: [222222] },
        { start: 1698522, end: 1698528, expected: [] },
        { start: 446443, end: 446449, expected: [446446] },
        { start: 38593856, end: 38593862, expected: [38593859] },
        { start: 565653, end: 565659, expected: [565656] },
        { start: 824824821, end: 824824827, expected: [824824824] },
        { start: 2121212118, end: 2121212124, expected: [2121212121] },
    ])('validateRange($start, $end) returns $expected', ({ start, end, expected }) => {
        expect(validateRange(start, end)).toEqual(expected)
    })
})
