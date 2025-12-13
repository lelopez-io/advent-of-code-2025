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

export const part1Optimized = (lines: string[]): number => {
    return lines.reduce((acc, line) => {
        if (!line) return acc
        return acc + getOptimalRatingCombo(line)
    }, 0)
}
