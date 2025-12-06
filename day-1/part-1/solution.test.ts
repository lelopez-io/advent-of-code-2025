import { test, expect } from 'bun:test'
import {
    countZeroCrossings,
    part1SolutionInitial,
    part1SolutionOptimized,
    part2SolutionInitial,
} from './solution'

const loadInput = async () => {
    const FILE = Bun.file(`${import.meta.dir}/input`)
    const TEXT = await FILE.text()
    return TEXT.split('\n')
}

test('part1SolutionInitial - works', async () => {
    expect(part1SolutionInitial(50, await loadInput())).toBe(1129)
})

test('part1SolutionOptimized- works', async () => {
    expect(part1SolutionOptimized(50, await loadInput())).toBe(1129)
})

test('part2SolutionInitial - works', async () => {
    expect(part2SolutionInitial(50, await loadInput())).toBe(6638)
})

test('moving right - reaches zero exactly', () => {
    expect(countZeroCrossings(50, 50)).toBe(1)
})

test("moving right - doesn't reach zero", () => {
    expect(countZeroCrossings(50, 30)).toBe(0)
})

test('moving right - crosses zero twic', () => {
    expect(countZeroCrossings(50, 150)).toBe(2)
})

test('moving left - reaches zero exactly', () => {
    expect(countZeroCrossings(50, -50)).toBe(1)
})

test("moving left - doesn't reach zero", () => {
    expect(countZeroCrossings(50, -30)).toBe(0)
})

test('moving left - crosses zero twice', () => {
    expect(countZeroCrossings(50, -150)).toBe(2)
})

test('edge-case - start at 99, move right 1', () => {
    expect(countZeroCrossings(99, 1)).toBe(1)
})

test('edge-case - start at 1, move left 1', () => {
    expect(countZeroCrossings(1, -1)).toBe(1)
})

test('start at 0 - move right small', () => {
    expect(countZeroCrossings(0, 5)).toBe(0)
})

test('start at 0 - move left small', () => {
    expect(countZeroCrossings(0, -5)).toBe(0)
})

test('start at 0 - move right full loop', () => {
    expect(countZeroCrossings(0, 100)).toBe(1)
})

test('start at 0 - move left full loop', () => {
    expect(countZeroCrossings(0, -100)).toBe(1)
})

test('start at 0 - move right multiple loops', () => {
    expect(countZeroCrossings(0, 250)).toBe(2)
})

test('start at 0 - move left multiple loops', () => {
    expect(countZeroCrossings(0, -250)).toBe(2)
})
