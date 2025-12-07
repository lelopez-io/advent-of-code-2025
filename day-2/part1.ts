import { sumInvalidIds } from './sumInvalidIds'

const isRepeatingPattern = (id: number): boolean => {
    const idString = `${id}`
    const idLength = idString.length

    if (idLength % 2 != 0) {
        return false
    }

    if (
        idString.substring(0, idLength / 2) === idString.substring(idLength / 2)
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

export const part1Initial = (lines: string[]) => {
    return sumInvalidIds(lines, validateRange)
}
