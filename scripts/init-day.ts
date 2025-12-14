const dayNum = process.argv[2]
if (!dayNum) {
    console.error('Usage: bun run init-day <day-number>')
    process.exit(1)
}

const dayDir = `${process.cwd()}/src/day/${dayNum}`

// Check if day already exists
if (await Bun.file(`${dayDir}/part1.ts`).exists()) {
    console.error(`Day ${dayNum} already exists`)
    process.exit(1)
}

const templatesDir = `${process.cwd()}/src/templates`

await Bun.write(`${dayDir}/loadInput.ts`, Bun.file(`${templatesDir}/loadInput.ts`))
await Bun.write(`${dayDir}/part1.ts`, Bun.file(`${templatesDir}/part1.ts`))
await Bun.write(`${dayDir}/part1.test.ts`, Bun.file(`${templatesDir}/part1.test.ts`))
await Bun.write(`${dayDir}/part2.ts`, Bun.file(`${templatesDir}/part2.ts`))
await Bun.write(`${dayDir}/part2.test.ts`, Bun.file(`${templatesDir}/part2.test.ts`))

console.log(`✓ src/day/${dayNum}`)

// Download input if AOC_SESSION is set
const session = process.env.AOC_SESSION
if (session) {
    console.log('')
    console.log('Downloading input...')
    const response = await fetch(`https://adventofcode.com/2025/day/${dayNum}/input`, {
        headers: { 'Cookie': `session=${session}` }
    })

    if (response.ok) {
        await Bun.write(`${dayDir}/input`, await response.text())
        console.log('✓ Downloaded input')
        console.log('')
        console.log('Encrypt with: ./scripts/encrypt-input.sh', dayNum)
    } else {
        console.log(`✗ Download failed: ${response.status}`)
    }
} else {
    console.log('')
    console.log('⚠ Set AOC_SESSION to auto-download input')
}
