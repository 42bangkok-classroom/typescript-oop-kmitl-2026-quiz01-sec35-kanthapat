const size = Number(process.argv[2]);
const row = Array.from({length: size},(_, i) => i %2).join("");

for (let i = 0; i < size; i++) {
    console.log(row);
}