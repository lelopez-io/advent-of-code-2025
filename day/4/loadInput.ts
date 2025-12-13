export const loadInput = async () => {
    const FILE = Bun.file(`${import.meta.dir}/input`)
    const TEXT = await FILE.text()
    return TEXT.split('\n')
}
