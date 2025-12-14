// 0,  1,  2,  3,  4
// 5,  6,  7,  8,  9
// 10, 11, 12, 13, 14
//
// if i care about i = 8
// n1 = i - 6 // len + 1
// n2 = i - 5 // len
// n3 = i - 4 // len - 1
// n4 = i - 1
// n5 = i + 1
// n6 = i + 4 // len - 1
// n7 = i + 5 // len
// n8 = i + 6 // len + 1
//

// 0,  1,  2,  3,  4,  5,  6,
// 7,  8,  9,  10, 11, 12, 13
// 14, 15, 16, 17, 18, 19, 20
//
// if i care about i = 11
// n1 = i - 8 // len + 1
// n2 = i - 7 // len
// n3 = i - 6 // len - 1
// n4 = i - 1
// n5 = i + 1
// n6 = i + 6 // len - 1
// n7 = i + 7 // len
// n8 = i + 8 // len + 1
//

export const processLine = (line: string, len: number): [string, number] => {
    let chars = line.split('')
    let count = 0

    for (let i = 0; i < chars.length; i++) {
        const c1 = chars[i - (len + 1)]
        const c2 = chars[i - len]
        const c3 = chars[i - (len - 1)]
        const c4 = chars[i - 1]
        const c5 = chars[i + 1]
        const c6 = chars[i + (len - 1)]
        const c7 = chars[i + len]
        const c8 = chars[i + (len + 1)]

        const sum = [c1, c2, c3, c4, c5, c6, c7, c8].filter(
            (c) => c === '@' || c === 'x'
        ).length

        if (sum < 4) {
            chars[i] = 'x'
            count++
        }
    }

    return [chars.join(''), count]
}

export const part2Initial = (lines: string[]): number => {
    const len = lines[0]?.length ?? 0

    let line = lines.join('')
    let solution = 0
    let loop = true

    while (loop) {
        const [l, c] = processLine(line, len)
        process.env.DEBUG && console.debug(`count: ${c}`)

        if (c == 0) loop = false

        line = l
        solution += c
    }

    return solution
}
