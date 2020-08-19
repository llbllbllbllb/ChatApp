import React,{ useState } from 'react'
import Link from 'react-router-dom'

import {Typography, Grid, Button, TextField} from '@material-ui/core'

import joinStyle from '../styles/joinStyle'

const Join = () => {

    const style = joinStyle()

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return(
        <Grid container className={style.root} direction="column">
            <TextField label="Name" />
            <TextField label="Room" className={style.textInput}/>
            <Button className={style.button}>Join</Button>
        </Grid>

    );
}

export default Join