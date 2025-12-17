const express = require('express')
const myServer = express()
const fileSystemModule = require("fs")
const path = require ("path")


const PORT = 3000
const HOST = 'localhost'

function getContentFromFile(fileName) {
    const fileContentAsString = fileSystemModule.readFileSyn(path.join(__dirname, fileName), 'utf8')
    return JSON.parse(fileContent)
}

myServer.get('/api', (request, response) => {
    const date = new Date()
    console.log('verzoek op de server', request.body)
    response.status(200)
    // response.send(`antwoord van de server ${date}`)
    response.json({
        name: "Adriaan"
    })
})

myServer.get('/api/recipes', (request, response) =>{

    response.json(getContentFromFile('recipes.json'))
})

myServer.listen(PORT, HOST,() => {
    console.log(`Server staat aan op http://${HOST}:${PORT}`)
})

console.log('server bestand')