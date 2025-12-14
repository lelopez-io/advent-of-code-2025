export const part1SolutionInitial = (
    startingPosition: number,
    lines: string[]
) => {
    let currentPosition = startingPosition
    let solution = 0
    for (const line of lines) {
        const [op, val] = [line[0], line.substring(1)]

        if (!op) {
            continue
        }

        let endPosition =
            currentPosition + parseInt(`${op == 'L' ? '-' : '+'}${val}`)

        let remainder = 0

        if (endPosition > 99) {
            remainder = endPosition % 100
            endPosition = remainder
        }

        if (endPosition < 0) {
            remainder = Math.abs(endPosition) % 100
            endPosition = remainder === 0 ? 0 : 100 - remainder
        }

        if (endPosition == 0) {
            solution++
        }

        process.env.DEBUG &&
            console.debug(
                `currentPosition: ${currentPosition}, ${op} to ${val}, endPosition: ${endPosition}`
            )

        currentPosition = endPosition
    }

    return solution
}

export const part1SolutionOptimized = (
    startingPosition: number,
    lines: string[]
) => {
    let currentPosition = startingPosition
    let solution = 0

    for (const line of lines) {
        if (!line) continue

        // handle turns greater than 100 clicks (full turns)
        const delta = (line[0] === 'L' ? -1 : 1) * parseInt(line.substring(1))
        const effectiveDelta = delta % 100

        // handle converting the change back to valid position (in range)
        currentPosition += effectiveDelta
        if (currentPosition >= 100) currentPosition -= 100
        if (currentPosition < 0) currentPosition += 100

        // check if zero
        if (currentPosition === 0) solution++
    }

    return solution
}
