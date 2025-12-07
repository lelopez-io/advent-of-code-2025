import { test, expect, describe } from 'bun:test'
import { part1Initial, part1Optimized, part2Initial } from './solution'

const loadInput = async () => {
    const FILE = Bun.file(`${import.meta.dir}/input`)
    const TEXT = await FILE.text()
    return TEXT.split(',')
}

describe('integration tests', () => {
    test('part1Initial - works', async () => {
        const solution = part1Initial(await loadInput())
        expect(solution).toMatchInlineSnapshot(`1129`)
    })

    test('part1Optimized- works', async () => {
        const solution = part1Optimized(await loadInput())
        expect(solution).toMatchInlineSnapshot(`1129`)
    })

    test('part2Initial - works', async () => {
        const solution = part2Initial(await loadInput())
        expect(solution).toMatchInlineSnapshot(`6638`)
    })
})

describe('unit tests', () => {
    test('', () => {})
})
