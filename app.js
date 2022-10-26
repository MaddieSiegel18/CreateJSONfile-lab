const express = require("express")
const app = express()
const PORT = 5500

app.listen(PORT, () => {
    console.log('[server] running on ${PORT}')
})
app.get('/', (request, response) =>{
    response.sendFile(__dirname+"/api/answers.json")})
