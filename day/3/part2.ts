const CHAR_CODE_ZERO = 48 // '0' = 48 in ASCII, for 0-9 we expect 48-57

export const buildLargestNumber = (
    ratings: string,
    length: number | undefined = 12
) => {
    let solution = 0
    let solutionIdx = -1

    for (let pos = length - 1; pos >= 0; pos--) {
        let maxPosVal = -1
        let maxPosIdx = -1

        for (
            let i = solutionIdx + 1, len = ratings.length - pos;
            i < len;
            i++
        ) {
            const val = ratings.charCodeAt(i) - CHAR_CODE_ZERO
            if (val < 0 || val > 9) throw Error(`Found non-int: ${val}`)
            if (val > maxPosVal) {
                maxPosVal = val
                maxPosIdx = i
            }
        }

        solution += maxPosVal * 10 ** pos
        solutionIdx = maxPosIdx
    }

    return solution
}

export const part2Initial = (lines: string[]): number => {
    return lines.reduce((acc, line) => {
        if (!line) return acc
        return acc + buildLargestNumber(line, 12)
    }, 0)
}
