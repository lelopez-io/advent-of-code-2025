import { test, expect, describe } from 'bun:test'
import { buildLargestNumber, part2Initial } from './part2'
import { loadInput } from './loadInput'

describe('integration tests', () => {
    test('part1Initial', async () => {
        const solution = part2Initial(await loadInput())
        expect(solution).toMatchInlineSnapshot(`168575096286051`)
    })
})

describe('unit tests - sample cases', () => {
    test('buildLargestNumber - example1', () => {
        expect(buildLargestNumber('987654321111111')).toEqual(987654321111)
    })
    test('buildLargestNumber - example1', () => {
        expect(buildLargestNumber('811111111111119')).toEqual(811111111119)
    })
    test('buildLargestNumber - example1', () => {
        expect(buildLargestNumber('234234234234278')).toEqual(434234234278)
    })
    test('buildLargestNumber - example1', () => {
        expect(buildLargestNumber('818181911112111')).toEqual(888911112111)
    })

    test('buildLargestNumber - example1', () => {
        expect(buildLargestNumber('987654321111111', 2)).toEqual(98)
    })
    test('buildLargestNumber - example1', () => {
        expect(buildLargestNumber('811111111111119', 2)).toEqual(89)
    })
    test('buildLargestNumber - example1', () => {
        expect(buildLargestNumber('234234234234278', 2)).toEqual(78)
    })
    test('buildLargestNumber - example1', () => {
        expect(buildLargestNumber('818181911112111', 2)).toEqual(92)
    })
})
