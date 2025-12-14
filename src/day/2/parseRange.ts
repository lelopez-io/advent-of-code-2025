export const parseRange = (line: string): [number, number] | null => {
    const parts = line.split('-')
    if (parts.length !== 2) return null

    const start = parseInt(parts[0] ?? '')
    const end = parseInt(parts[1] ?? '')
    process.env.DEBUG && console.debug(`\tstart: ${start}`)
    process.env.DEBUG && console.debug(`\tend: ${end}`)

    if (isNaN(start) || isNaN(end)) return null

    return [start, end]
}
