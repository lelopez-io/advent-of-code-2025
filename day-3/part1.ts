export const getOptimalRatingCombo = (ratings: string) => {
    let max1: [number, number] = [-1, -1] // value, index
    let max2: [number, number] = [-1, -1] // value, index

    for (let i = 0; i <= ratings.length - 2; i++) {
        const val: number = parseInt(ratings[i] ?? '')
        // process.env.DEBUG && console.debug(val)
        if (isNaN(val)) break
        if (val > max1[0]) {
            max1[0] = val
            max1[1] = i
        }
    }

    // process.env.DEBUG && console.debug(max1)

    for (let i = max1[1] + 1; i <= ratings.length - 1; i++) {
        const val: number = parseInt(ratings[i] ?? '')
        // process.env.DEBUG && console.debug(val)
        if (isNaN(val)) break
        if (val > max2[0]) {
            max2[0] = val
            max2[1] = i
        }
    }

    const optimalRating = parseInt(`${max1[0]}${max2[0]}`)

    if (optimalRating < 10) {
        throw Error(`not double digit! '${optimalRating}' - ${ratings}`)
    }

    return optimalRating
}

export const part1Initial = (lines: string[]): number => {
    let solution = 0

    for (const line of lines) {
        if (!line) continue
        process.env.DEBUG && console.debug(line)
        const optimalCombo = getOptimalRatingCombo(line) ?? 0
        process.env.DEBUG && console.debug(optimalCombo)

        solution += optimalCombo
    }

    return solution
}

const CHAR_CODE_ZERO = 48 // '0' = 48 in ASCII, for 0-9 we expect 48-57

export const getOptimalRatingComboOptimized = (ratings: string) => {
    let max1Val = -1,
        max1Idx = -1

    for (let i = 0, len = ratings.length - 1; i < len; i++) {
        const val = ratings.charCodeAt(i) - CHAR_CODE_ZERO
        if (val < 0 || val > 9) throw Error(`Found non-int: ${val}`)
        if (val > max1Val) {
            max1Val = val
            max1Idx = i
        }
    }

    let max2Val = -1
    for (let i = max1Idx + 1, len = ratings.length; i < len; i++) {
        const val = ratings.charCodeAt(i) - CHAR_CODE_ZERO
        if (val < 0 || val > 9) throw Error(`Found non-int: ${val}`)
        if (val > max2Val) {
            max2Val = val
        }
    }

    return max1Val * 10 + max2Val
}

export const part1Optimized = (lines: string[]): number => {
    return lines.reduce((acc, line) => {
        if (!line) return acc
        return acc + getOptimalRatingComboOptimized(line)
    }, 0)
}
