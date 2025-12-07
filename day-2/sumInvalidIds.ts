import { parseRange } from './parseRange'

export const sumInvalidIds = (
    lines: string[],
    validateRange: (rangeStart: number, rangeEnd: number) => number[]
): number => {
    let sum = 0

    for (const line of lines) {
        const range = parseRange(line)
        if (!range) continue

        const invalidIds = validateRange(range[0], range[1])
        sum += invalidIds.reduce((acc, n) => acc + n, 0)
    }

    return sum
}
