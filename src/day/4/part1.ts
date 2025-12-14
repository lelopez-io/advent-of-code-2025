export const processLine = (
    lines: ReadonlyArray<string | undefined>
): number => {
    let solution = 0

    for (let i = 0; i < lines[1]!.length; i++) {
        if (lines[1]![i] !== '@') continue

        const topSlice = (lines[0] ?? '')
            .substring(i - 1, i + 2)
            .split('')
            .filter((c) => c === '@').length

        const bottomSlice = (lines[2] ?? '')
            .substring(i - 1, i + 2)
            .split('')
            .filter((c) => c === '@').length

        const left = lines[1]![i - 1] == '@' ? 1 : 0
        const right = lines[1]![i + 1] == '@' ? 1 : 0

        if (topSlice + bottomSlice + left + right < 4) {
            solution++
        }
    }

    return solution
}

export const part1Initial = (lines: string[]): number => {
    throw new Error('Not implemented')
}
