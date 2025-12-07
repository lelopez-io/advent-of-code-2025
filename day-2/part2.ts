const parseRange = (line: string): [number, number] | null => {
    const parts = line.split('-')
    if (parts.length !== 2) return null

    const start = parseInt(parts[0] ?? '')
    const end = parseInt(parts[1] ?? '')
    process.env.DEBUG && console.debug(`\tstart: ${start}`)
    process.env.DEBUG && console.debug(`\tend: ${end}`)

    if (isNaN(start) || isNaN(end)) return null

    return [start, end]
}

export const validateRange = (rangeStart: number, rangeEnd: number) => {
    let invalidIds = []

    for (let i = rangeStart; i <= rangeEnd; i++) {
        const idString = `${i}`
        const idLength = idString.length

        if (idLength % 2 != 0) {
            continue
        }

        if (
            idString.substring(0, idLength / 2) ===
            idString.substring(idLength / 2)
        ) {
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
