import { test, expect, describe } from 'bun:test'
import { part2SolutionInitial, countZeroCrossings } from './part2'
import { loadInput } from './loadInput'

describe('integration tests', () => {
    test.each([{ fn: part2SolutionInitial, name: 'part2SolutionInitial' }])(
        '$name',
        async ({ fn }) => {
            const solution = fn(50, await loadInput())
            expect(solution).toMatchInlineSnapshot(`6638`)
        }
    )
})

describe('unit tests', () => {
    test.each([
        { pos: 50, delta: 50, expected: 1, desc: 'reaches zero exactly' },
        { pos: 50, delta: 30, expected: 0, desc: "doesn't reach zero" },
        { pos: 50, delta: 150, expected: 2, desc: 'crosses zero twice' },
    ])('moving right - $desc', ({ pos, delta, expected }) => {
        expect(countZeroCrossings(pos, delta)).toBe(expected)
    })

    test.each([
        { pos: 50, delta: -50, expected: 1, desc: 'reaches zero exactly' },
        { pos: 50, delta: -30, expected: 0, desc: "doesn't reach zero" },
        { pos: 50, delta: -150, expected: 2, desc: 'crosses zero twice' },
    ])('moving left - $desc', ({ pos, delta, expected }) => {
        expect(countZeroCrossings(pos, delta)).toBe(expected)
    })

    test.each([
        { pos: 99, delta: 1, desc: 'start at 99, move right 1' },
        { pos: 1, delta: -1, desc: 'start at 1, move left 1' },
    ])('edge-case - $desc', ({ pos, delta }) => {
        expect(countZeroCrossings(pos, delta)).toBe(1)
    })

    test.each([
        { delta: 5, expected: 0, desc: 'move right small' },
        { delta: -5, expected: 0, desc: 'move left small' },
        { delta: 100, expected: 1, desc: 'move right full loop' },
        { delta: -100, expected: 1, desc: 'move left full loop' },
        { delta: 250, expected: 2, desc: 'move right multiple loops' },
        { delta: -250, expected: 2, desc: 'move left multiple loops' },
    ])('start at 0 - $desc', ({ delta, expected }) => {
        expect(countZeroCrossings(0, delta)).toBe(expected)
    })
})
