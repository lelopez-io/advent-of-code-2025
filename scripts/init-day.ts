const dayNum = process.argv[2]
if (!dayNum) {
    console.error('Usage: bun run init-day <day-number>')
    process.exit(1)
}

const dayDir = `${process.cwd()}/src/day/${dayNum}`
const loadInputTemplate = `export const loadInput = async () => {
    const FILE = Bun.file(\`\${import.meta.dir}/input\`)
    const TEXT = await FILE.text()
    return TEXT.split('\\n')
}
`

const part1Template = `export const processLine = (line: string): number => {
    throw new Error('Not implemented')
}

export const part1Initial = (lines: string[]): number => {
    throw new Error('Not implemented')
}
`

const part1TestTemplate = `import { test, expect, describe } from 'bun:test'
import { part1Initial, processLine } from './part1'
import { loadInput } from './loadInput'

describe('part1 - integration', () => {
    test.each([
        { fn: part1Initial, name: 'part1Initial' },
    ])('$name', async ({ fn }) => {
        const solution = fn(await loadInput())
        expect(solution).toMatchInlineSnapshot()
    })
})

describe('part1 - unit', () => {
    test.each([
        // { input: 'example', expected: 42 },
    ])('processLine($input) returns $expected', ({ input, expected }) => {
        expect(processLine(input)).toEqual(expected)
    })
})
`

const part2Template = `export const processLine = (line: string): number => {
    throw new Error('Not implemented')
}

export const part2Initial = (lines: string[]): number => {
    throw new Error('Not implemented')
}
`

const part2TestTemplate = `import { test, expect, describe } from 'bun:test'
import { part2Initial, processLine } from './part2'
import { loadInput } from './loadInput'

describe('part2 - integration', () => {
    test.each([
        { fn: part2Initial, name: 'part2Initial' },
    ])('$name', async ({ fn }) => {
        const solution = fn(await loadInput())
        expect(solution).toMatchInlineSnapshot()
    })
})

describe('part2 - unit', () => {
    test.each([
        // { input: 'example', expected: 42 },
    ])('processLine($input) returns $expected', ({ input, expected }) => {
        expect(processLine(input)).toEqual(expected)
    })
})
`

await Bun.write(`${dayDir}/loadInput.ts`, loadInputTemplate)
await Bun.write(`${dayDir}/part1.ts`, part1Template)
await Bun.write(`${dayDir}/part1.test.ts`, part1TestTemplate)
await Bun.write(`${dayDir}/part2.ts`, part2Template)
await Bun.write(`${dayDir}/part2.test.ts`, part2TestTemplate)

console.log(`✓ src/day/${dayNum}`)

const session = process.env.AOC_SESSION
if (session) {
    const response = await fetch(`https://adventofcode.com/2025/day/${dayNum}/input`, {
        headers: { 'Cookie': `session=${session}` }
    })

    if (response.ok) {
        await Bun.write(`${dayDir}/input`, await response.text())
        console.log(`✓ input`)
    } else {
        console.log(`✗ input (${response.status})`)
    }
} else {
    console.log(`⚠ Set AOC_SESSION to auto-download input`)
}
