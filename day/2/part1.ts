import { sumInvalidIds } from './sumInvalidIds'

const isRepeatingPattern = (id: number): boolean => {
    const idString = String(id)

    if (
        idString.length % 2 === 0 &&
        idString.substring(0, idString.length / 2) ===
            idString.substring(idString.length / 2)
    ) {
        process.env.DEBUG && console.debug(`substring match - pushing ${id}`)
        return true
    }

    return false
}

export const validateRange = (rangeStart: number, rangeEnd: number) => {
    let invalidIds = []

    for (let i = rangeStart; i <= rangeEnd; i++) {
        if (isRepeatingPattern(i)) {
            invalidIds.push(i)
        }
    }

    return invalidIds
}

export const part1Initial = (lines: string[]): number => {
    return sumInvalidIds(lines, validateRange)
}
