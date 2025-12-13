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
