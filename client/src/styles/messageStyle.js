import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    message:{
        display: "inline-block",
        borderRadius: "0.5rem",
        padding: "0.5rem",
        maxWidth: "20rem",
        wordWrap: "break-word",
    },
    isCurrentUser: {
        background: "rgba(0,128,0,0.5)",
    },
    notCurrentUser: {
        border: "1px solid rgba(0,128,0,0.5)",
    },
    left: {
        display:"flex",
        justifyContent:"flex-start",
        marginLeft: "1rem",
    },
    right: {
        display:"flex",
        justifyContent:"flex-end",
        marginRight: "1rem",
    },


})

export default useStyles;