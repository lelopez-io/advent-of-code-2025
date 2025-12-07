import { sumInvalidIds } from './sumInvalidIds'

const isRepeatingPattern = (idString: number): boolean => {
    return /^(\d+)\1+$/.test(`${idString}`)
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

export const part2Initial = (lines: string[]) => {
    return sumInvalidIds(lines, validateRange)
}
