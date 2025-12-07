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

export const countZeroCrossings = (currentPosition: number, delta: number) => {
    if (delta === 0) return 0

    const initialCrossing = currentPosition === 0 ? 0 : 1
    if (delta > 0) {
        const distanceToZero = currentPosition == 0 ? 0 : 100 - currentPosition
        if (delta < distanceToZero) return 0

        const remainingAfterZero = delta - distanceToZero
        return initialCrossing + Math.floor(remainingAfterZero / 100)
    } else {
        const distanceToZero = currentPosition == 0 ? 0 : currentPosition
        if (Math.abs(delta) < distanceToZero) return 0

        const remainingAfterZero = Math.abs(delta) - distanceToZero
        return initialCrossing + Math.floor(remainingAfterZero / 100)
    }
}

export const part2SolutionInitial = (
    startingPosition: number,
    lines: string[]
) => {
    let currentPosition = startingPosition
    let solution = 0

    for (const line of lines) {
        if (!line) continue

        // handle turns greater than 100 clicks (full turns)
        const delta = (line[0] === 'L' ? -1 : 1) * parseInt(line.substring(1))
        solution += countZeroCrossings(currentPosition, delta)

        // handle converting the change back to valid position (in range)
        const effectiveDelta = delta % 100
        currentPosition += effectiveDelta
        if (currentPosition >= 100) currentPosition -= 100
        if (currentPosition < 0) currentPosition += 100
    }

    return solution
}
