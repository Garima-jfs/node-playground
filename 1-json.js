const fs = require('fs')

// const book = {
//     title : 'The Alchemist',
//     author : 'Paulo Cohelo'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)


data.title = 'Testing'

const changeJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',changeJSON)