const express = require('express')
const sockeio = require('socket.io')
const http = require('http')

const PORT = process.env.PORT || 5000;

const router = require('./router')
const {addUser, removeUser, getUser, getUsersInRoom} = require('./users');


const app = express()

const server = http.createServer(app);
const io = sockeio(server);

io.on('connection', (socket)=>{
    console.log("we have a connection!!!")

    socket.on('join', ({name,room}, callback) => {
        
        const {user,error} = addUser({id:socket.id,name,room});

        if(error) return callback(error);
        // const error = true;
        // if(error) {
        //     callback({error: 'error'})
        // }

        //welcome message
        socket.emit('message', {user:'admin', text:`${user.name}, welcome to ${user.room}`});
        socket.broadcast.to(user.room).emit('message', {user:'admin', text:`${user.name} has joined the room`});
        socket.join(user.room);

        callback();

    })

    socket.on('sendMessage',(message,callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message',{user:user.name, text:message});

        callback();

    });

    socket.on("disconnect",()=>{
        console.log("user has left!!!")
    })
})

app.use(router)

server.listen(PORT, ()=>{
    console.log(`Server has started at ${PORT}`)
})
