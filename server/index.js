const express = require('express')
const sockeio = require('socket.io')
const http = require('http')

const PORT = process.env.PORT || 5000;

const router = require('./router')


const app = express()

const server = http.createServer(app);
const io = sockeio(server);

io.on('connection', (socket)=>{
    console.log("we have a connection!!!")
    socket.on("disconnect",()=>{
        console.log("user has left!!!")
    })
})

app.use(router)

server.listen(PORT, ()=>{
    console.log(`Server has started at ${PORT}`)
})
