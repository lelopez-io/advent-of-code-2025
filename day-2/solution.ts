export const validateRange = (rangeStart: number, rangeEnd: number) => {
    console.log(`${rangeStart} to ${rangeEnd}`)

    return [rangeStart, rangeEnd]
}

export const part1Initial = (lines: string[]) => {
    for (const line of lines) {
        const [rangeStart, rangeEnd] = line.split('-')

        const invalidIds = validateRange(rangeStart, rangeEnd)
    }
}

export const part1Optimized = (lines: string[]) => {
    throw Error('not implemented')
}

export const part2Initial = (lines: string[]) => {
    throw Error('not implemented')
}
