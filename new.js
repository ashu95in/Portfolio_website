
const http = require('http')
const readline = require('readline')
const querystring = require('querystring')
const rl = readline.createInterface({ input: process.stdin })
rl.on('line', line =>
http.get(
`http://localhost:1337/chat?${querystring.stringify({ message: line })}`
)
)
