import { test, expect, describe } from 'bun:test'
import { part1Initial, validateRange } from './part1'

const loadInput = async () => {
    const FILE = Bun.file(`${import.meta.dir}/input`)
    const TEXT = await FILE.text()
    return TEXT.split(',')
}

describe('integration tests', () => {
    test('part1Initial', async () => {
        const solution = part1Initial(await loadInput())
        expect(solution).toMatchInlineSnapshot(`13919717792`)
    })
})

describe('unit tests - sample cases', () => {
    test('validateRange - example1', () => {
        expect(validateRange(11, 22)).toEqual([11, 22])
    })

    test('validateRange - example2', () => {
        expect(validateRange(95, 115)).toEqual([99])
    })

    test('validateRange - example3', () => {
        expect(validateRange(998, 1012)).toEqual([1010])
    })

    test('validateRange - example4', () => {
        expect(validateRange(1188511880, 1188511890)).toEqual([1188511885])
    })

    test('validateRange - example5', () => {
        expect(validateRange(222220, 222224)).toEqual([222222])
    })

    test('validateRange - example6', () => {
        expect(validateRange(1698522, 1698528)).toEqual([])
    })

    test('validateRange - example7', () => {
        expect(validateRange(446443, 446449)).toEqual([446446])
    })

    test('validateRange - example8', () => {
        expect(validateRange(38593856, 38593862)).toEqual([38593859])
    })
})
