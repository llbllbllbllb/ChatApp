import React,{ useState } from 'react'
import Link from 'react-router-dom'

import {withStyles} from '@material-ui/core/styles'

import {Typography, Grid, Button, TextField} from '@material-ui/core'

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
        <Grid container className={style.root} direction="column">
            <Typography variant='h4' className={style.title}>Join a Chat Room</Typography>
            <CssTextField label="Name" className={style.textInput}/>
            <CssTextField label="Room" className={style.textInput}/>
            <Button className={style.button}>Join now!</Button>
        </Grid>

    );
}

export default Join