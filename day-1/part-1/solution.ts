const file = Bun.file(`${import.meta.dir}/input`)
const text = await file.text()
const lines = text.split('\n')

const STARTING_POINT = 50

let currentPosition = STARTING_POINT
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
        remainder = endPosition % 99
        endPosition = 0 + remainder
    }

    if (endPosition < 0) {
        remainder = endPosition % 99
        endPosition = 100 + remainder
    }

    if (endPosition == 0) {
        solution++
    }

    console.log(
        `currentPosition: ${currentPosition}, ${op} to ${val}, endPosition: ${endPosition}`
    )

    currentPosition = endPosition
}

console.log(`solution: ${solution}`)
