import React,{ useState } from 'react'
import {Link} from 'react-router-dom'

import {withStyles} from '@material-ui/core/styles'

import TelegramIcon from '@material-ui/icons/Telegram';

import {Typography, Grid, Button, TextField, Container} from '@material-ui/core'

import joinStyle from '../styles/joinStyle'

const Join = () => {

    const style = joinStyle()

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return(
        <div className={style.root}>
          <Container className={style.container} direction="column">
            <TelegramIcon className={style.icon} />
            <Typography className={style.title}>Join a Chat Room</Typography>
            <TextField label="Name" className={style.textInput} value={name} onChange={(e) => setName(e.target.value)}/>
            <TextField label="Room" className={style.textInput} value={room} onChange={(e) => setRoom(e.target.value)}/>
            <Link onClick={(e) => {if(!name || !room)e.preventDefault()}} to={`/chat?name=${name}&room=${room}`} style={{textDecoration:"none"}}>
              <Button className={style.button}>Join now!</Button>
            </Link>
          </Container>
        </div>

    );
}

export default Join