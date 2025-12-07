import { parseRange } from './parseRange'

const isRepeatingPattern = (idString: string): boolean => {
    return /^(\d+)\1+$/.test(idString)
}

export const validateRange = (rangeStart: number, rangeEnd: number) => {
    let invalidIds = []

    for (let i = rangeStart; i <= rangeEnd; i++) {
        const idString = `${i}`

        if (isRepeatingPattern(idString)) {
            process.env.DEBUG && console.debug(`substring match - pushing ${i}`)
            invalidIds.push(i)
        }
    }

    return invalidIds
}

export const part2Initial = (lines: string[]) => {
    const solution = []

    for (const line of lines) {
        process.env.DEBUG && console.debug(`line: ${line}`)

        const range = parseRange(line)
        if (!range) continue
        process.env.DEBUG && console.debug(`range: ${range}`)

        const invalidIds = validateRange(range[0], range[1])

        if (invalidIds.length) {
            process.env.DEBUG && console.debug(`invalidIds: ${invalidIds}`)
            solution.push(invalidIds)
        }
    }

    return solution.flat().reduce((acc, n) => acc + n, 0)
}

export const part2Optimized = (lines: string[]) => {
    throw Error('not implemented')
}
