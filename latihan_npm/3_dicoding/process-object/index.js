// import process from 'node:process'
const process = require('node:process')

const memori = process.memoryUsage()
// const environment = process.env()

console.log(`${memori}`)

