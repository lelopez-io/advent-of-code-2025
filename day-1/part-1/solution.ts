const FILE = Bun.file(`${import.meta.dir}/input`)
const TEXT = await FILE.text()
const LINES = TEXT.split('\n')

const STARTING_POINT = 50

const part1SolutionInitial = () => {
    let currentPosition = STARTING_POINT
    let solution = 0
    for (const line of LINES) {
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

console.log(`part1SolutionInitial:\t${part1SolutionInitial()}`)

const part1SolutionOptimized = () => {
    let currentPosition = STARTING_POINT
    let solution = 0

    for (const line of LINES) {
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

console.log(`part1SolutionOptimized:\t${part1SolutionOptimized()}`)

const countTransientZeros = (currentPosition: number, delta: number) => {
    if (delta === 0) return 0

    let count = 0

    const endDelta = currentPosition + delta
    if (delta > 0) {
        const minDelta = 100 - currentPosition
        if (Math.abs(delta) < minDelta) return 0
        count++
    } else {
        const minDelta = currentPosition
        if (Math.abs(delta) < minDelta) return 0
        count++
    }

    return count + Math.floor(Math.abs(endDelta) / 100)
}

const part2SolutionInitial = () => {
    let currentPosition = STARTING_POINT
    let solution = 0

    for (const line of LINES) {
        if (!line) continue

        // handle turns greater than 100 clicks (full turns)
        const delta = (line[0] === 'L' ? -1 : 1) * parseInt(line.substring(1))
        solution += countTransientZeros(currentPosition, delta)

        // handle converting the change back to valid position (in range)
        const effectiveDelta = delta % 100
        currentPosition += effectiveDelta
        if (currentPosition >= 100) currentPosition -= 100
        if (currentPosition < 0) currentPosition += 100
    }

    return solution
}

console.log(`part2SolutionInitial:\t${part2SolutionInitial()}`)
