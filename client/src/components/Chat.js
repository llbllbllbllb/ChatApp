import React,{useEffect, useState} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import {Typography, Grid, Button, TextField, Container} from '@material-ui/core'

import joinStyle from '../styles/joinStyle'

let socket;



const Chat = ({location}) => {
    const style = joinStyle()

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000'

    useEffect(() =>{
        const {name,room} = queryString.parse(location.search);
        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);
        console.log(socket);
        socket.emit('join', {name, room}, ()=>{
            
        });
        // unmounting: disconnect
        return ()=>{
            socket.emit('disconnect');
            socket.off();
        }
    },[ENDPOINT, location.search]);

    // handling get message
    useEffect(() => {
        socket.on('message',(message)=>{
            setMessages([...messages,message]);
        })
    },[messages]);

    // handling send message
    const sendMessage = (e) => {
        e.preventDefault();
        socket.emit('sendMessage', message, ()=>setMessage(''));
        console.log(message)
        console.log(messages);
    }



    return(
        <>
            <h1>Chat</h1>
            <TextField label="Send Message" 
                className={style.textInput} 
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
                />
            {messages.map((m,idx) => <Typography key={idx}>{m.user + ": " + m.text}</Typography>)}
        </>
    );
}

export default Chat