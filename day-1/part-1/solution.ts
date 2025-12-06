const file = Bun.file(`${import.meta.dir}/input`)
const text = await file.text()

console.log(text)
