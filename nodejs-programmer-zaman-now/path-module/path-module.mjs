import path from "path";

// Data dummy
const myFile = "/home/Bondan/Documents/index.html"

console.info(`Separator : ${path.sep}`)
console.info(`Dirname : ${path.dirname(myFile)}`)
console.info(`Basename : ${path.basename(myFile)}`)
console.info(`Extension Name : ${path.extname(myFile)}`)
console.info(path.parse(myFile))