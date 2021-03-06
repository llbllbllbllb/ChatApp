import React,{useEffect, useState, useRef} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import {Typography, Grid, Button, TextField, Container} from '@material-ui/core'

import TelegramIcon from '@material-ui/icons/Telegram';

import chatStyle from '../styles/chatStyle'

import Message from './Message/Message'

let socket;



const Chat = ({location}) => {
    const style = chatStyle()
    const messagesEndRef = useRef(null);
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
            // addNew(message)
            // var tmpMessages = [...messages];
            // tmpMessages.push(message);
            // setMessages(tmpMessages);
            setMessages(messages => [ ...messages, message ]);
        })
    },[]);

    // when receive new message, scroll to bottom
    useEffect(() => {
        console.log("triggered")
        // messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
        messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;

    },[messages])

    const addNew = (message) => {
        var tmpMessages = [...messages];
        tmpMessages.push(message);
        setMessages(tmpMessages);
    }

    // handling send message
    const sendMessage = (e) => {
        
        e.preventDefault();
        
        
        if(message.length === 0){
            return
        }
        socket.emit('sendMessage', message, ()=>{
            setMessage('')
        });
        console.log(message)
        console.log(messages);
    }



    return(
        <div className={style.outerContainer}>
            <div className={style.chatBox}>
                <Typography>{room}</Typography>
                <div className={style.chatHistory} style={{display:"flex", flexDirection:"column"}} ref={messagesEndRef}>
                    
                    {messages.map((m,idx) => <Message isCurrentUser={m.user === name.toLowerCase()} m={m} key={idx} style={{display:"inline"}}/>)}
                    {/* <Message isCurrentUser={true} m={{user:"Ivan", text:"Hello Okf lkjfklsadjklfjas fdsfjklj  fdakl jfkldjfk ldjsfkljldlkf jlkasdjf lkjasdlkjfj"}} style={{display:"flex", justifyContent:"flex-end"}}/> */}
                    {/* <Message isCurrentUser={false} m={{user:"Helen", text:"Yo"}}/> */}
                </div>
                <div className={style.inputBox}>
                    <TextField label="Send Message" 
                        variant="outlined"
                        className={style.textInput} 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
                        />
                    <TelegramIcon className={style.sendIcon} onClick={(e) => sendMessage(e)}/>
                </div>
            </div>
        </div>
    );
}

export default Chat