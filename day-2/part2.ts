import { sumInvalidIds } from './sumInvalidIds'

const REPEATING_PATTERN = /^(\d+)\1+$/

const isRepeatingPattern = (idString: number): boolean => {
    return REPEATING_PATTERN.test(String(idString))
}

export const validateRange = (
    rangeStart: number,
    rangeEnd: number
): number[] => {
    let invalidIds = []

    for (let i = rangeStart; i <= rangeEnd; i++) {
        if (isRepeatingPattern(i)) {
            invalidIds.push(i)
        }
    }

    return invalidIds
}

export const part2Initial = (lines: string[]): number => {
    return sumInvalidIds(lines, validateRange)
}
