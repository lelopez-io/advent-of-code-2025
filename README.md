# Advent of Code 2025

Solutions for [Advent of Code 2025](https://adventofcode.com/2025) using Bun and TypeScript.

## Prerequisites

This project uses [Bun](https://bun.sh) - a fast all-in-one JavaScript runtime.

Runtime versions are managed with [mise](https://mise.jdx.dev/), which will automatically install Bun.

**Install mise:**

```bash
# macOS
brew install mise

# Or see https://mise.jdx.dev/getting-started.html for other platforms
```

**First-time setup:**

```bash
mise trust
mise run setup
```

This installs Bun, project dependencies, and sets up git hooks (auto-push on commit).

**Optional - For input backup (maintainer only):**

```bash
brew install age sops 1password-cli
```

## Project Structure

```
src/
└── day/
    ├── 1/
    │   ├── input           # puzzle input
    │   ├── loadInput.ts    # input loader
    │   ├── part1.ts        # part 1 solution
    │   ├── part1.test.ts   # part 1 tests
    │   ├── part2.ts        # part 2 solution
    │   └── part2.test.ts   # part 2 tests
    ├── 2/
    └── ...
```

## Quick Start

Initialize a new day:

```bash
bun run init-day <day-number>
```

This creates the directory structure with template files. If `AOC_SESSION` environment variable is set, it will auto-download the puzzle input.

```bash
export AOC_SESSION=your_session_cookie
bun run init-day 4
```

## Running Tests

```bash
# Run all tests
bun test

# Run tests for specific day
bun test src/day/4

# Run only part 1 tests
bun test src/day/4 -t "part1"

# Run only integration tests
bun test src/day/4 -t "integration"

# Run specific test
bun test src/day/4 -t "part2 - integration"
```

## Getting Solution Values

When you complete a solution, run the integration test to see the answer in the error output, then update the snapshot:

```bash
bun test src/day/4 -t "part2 - integration"
bun test src/day/4 -t "part2 - integration" -u
```

## Solution Pattern

Each solution follows a consistent pattern:

- `processLine()` - helper that processes a single line/item
- `part1Initial()` / `part2Initial()` - main solution
- `part1Optimized()` / `part2Optimized()` - optimized version (optional)

Tests use `test.each` for parametrized testing and separate integration/unit tests.

## Input Backup (Maintainer Only)

Per [Advent of Code policy](https://adventofcode.com/2025/about#faq_copying), puzzle inputs should not be redistributed. This repo uses SOPS + age encryption for personal backup only.

**Note:** Encrypted inputs in this repo are personal and won't work for others. You'll need to download your own inputs using your AOC session cookie.

**Personal backup workflow:**

```bash
# Download input for an existing day
bun run download-input 4

# Encrypt it (creates input.enc)
./scripts/encrypt-input.sh 4

# Batch operation for multiple days
for day in {1..4}; do
  bun run download-input $day && ./scripts/encrypt-input.sh $day
done

# On new machine: decrypt all inputs (requires 1Password access)
bun run decrypt-inputs
```
