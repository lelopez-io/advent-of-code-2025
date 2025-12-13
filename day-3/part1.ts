export const getOptimalRaitingCombo = (ratings: string) => {
    let max1: [number, number] = [-1, -1] // value, index
    let max2: [number, number] = [-1, -1] // value, index

    for (let i = 0; i <= ratings.length - 1; i++) {
        const val: number = parseInt(ratings[i] ?? '')
        if (isNaN(val)) break
        if (val > max1[0]) {
            max1[0] = val
            max1[1] = i
        }
    }

    for (let i = max1[1] + 1; i <= ratings.length; i++) {
        const val: number = parseInt(ratings[i] ?? '')
        if (isNaN(val)) break
        if (val > max1[0]) {
            max1[0] = val
            max1[1] = i
        }
    }

    const optimalRating = parseInt(`${max1[0]}${max2[0]}`)

    return isNaN(optimalRating) ? null : optimalRating
}

export const part1Initial = (lines: string[]): number => {
    throw Error('not implemented')
}
