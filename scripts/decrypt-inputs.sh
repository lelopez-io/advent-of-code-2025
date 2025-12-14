#!/bin/bash
set -e

echo "Fetching SOPS key from 1Password..."

COUNT=0
for ENC_FILE in src/day/*/input.enc; do
    if [ ! -f "$ENC_FILE" ]; then
        continue
    fi

    INPUT_FILE="${ENC_FILE%.enc}"
    DAY=$(basename $(dirname "$ENC_FILE"))

    echo "Decrypting day $DAY..."
    SOPS_AGE_KEY_FILE=<(op document get "sops-key | advent-of-code-2025") \
        sops -d "$ENC_FILE" > "$INPUT_FILE"

    ((COUNT++))
done

if [ $COUNT -eq 0 ]; then
    echo "No encrypted inputs found"
else
    echo ""
    echo "✓ Decrypted $COUNT input(s)"
fi
