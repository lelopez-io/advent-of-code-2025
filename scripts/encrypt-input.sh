#!/bin/bash
set -e

DAY=$1
if [ -z "$DAY" ]; then
    echo "Usage: bun run encrypt-input <day-number>"
    exit 1
fi

INPUT_FILE="src/day/$DAY/input"
ENC_FILE="$INPUT_FILE.enc"

if [ ! -f "$INPUT_FILE" ]; then
    echo "✗ Input file not found: $INPUT_FILE"
    exit 1
fi

if [ -f "$ENC_FILE" ]; then
    echo "✗ Already encrypted: $ENC_FILE"
    exit 0
fi

echo "Encrypting day $DAY input..."
SOPS_AGE_KEY_FILE=<(op document get "sops-key | advent-of-code-2025") \
    sops -e "$INPUT_FILE" > "$ENC_FILE"

echo "✓ Encrypted to $ENC_FILE"
