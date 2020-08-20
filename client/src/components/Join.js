import React,{ useState } from 'react'
import Link from 'react-router-dom'

import {withStyles} from '@material-ui/core/styles'

import TelegramIcon from '@material-ui/icons/Telegram';

import {Typography, Grid, Button, TextField, Container} from '@material-ui/core'

import joinStyle from '../styles/joinStyle'

const Join = () => {

    const style = joinStyle()

    const CssTextField = withStyles({
        root: {
          '& label.Mui-focused': {
            color: 'green',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
          },
          '& .MuiInput-underline:hover:not($disabled):before': {
            borderBottomColor: 'green',
          },
        },
      })(TextField);

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return(
        <div className={style.root}>
          <Container className={style.container} direction="column">
            <TelegramIcon className={style.icon}/>
            <Typography className={style.title}>Join a Chat Room</Typography>
            <CssTextField label="Name" className={style.textInput}/>
            <CssTextField label="Room" className={style.textInput}/>
            <Button className={style.button}>Join now!</Button>
          </Container>
        </div>

    );
}

export default Join