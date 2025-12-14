const dayNum = process.argv[2]
if (!dayNum) {
    console.error('Usage: bun run download-input <day-number>')
    process.exit(1)
}

const session = process.env.AOC_SESSION
if (!session) {
    console.error('✗ AOC_SESSION environment variable not set')
    process.exit(1)
}

const dayDir = `${process.cwd()}/src/day/${dayNum}`
const inputFile = `${dayDir}/input`

if (!(await Bun.file(`${dayDir}/part1.ts`).exists())) {
    console.error(`✗ Day ${dayNum} doesn't exist. Run: bun run init-day ${dayNum}`)
    process.exit(1)
}

console.log(`Downloading input for day ${dayNum}...`)

const response = await fetch(`https://adventofcode.com/2025/day/${dayNum}/input`, {
    headers: { 'Cookie': `session=${session}` }
})

if (response.ok) {
    await Bun.write(inputFile, await response.text())
    console.log('✓ Downloaded input')
    console.log('')
    console.log('Encrypt with: ./scripts/encrypt-input.sh', dayNum)
} else {
    console.error(`✗ Download failed: ${response.status}`)
    process.exit(1)
}
