import { test, expect } from 'bun:test'
import { countZeroCrossings } from './solution'

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
