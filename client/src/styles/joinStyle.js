import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: "rgba(0,128,0,0.5)",
        height: "100vh",
        
    },
    container: {
      display:"flex",
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center',
      height: "50vh",
      width: "50vh",
      background: "white",
      borderRadius: "8%",
      border: "0.5rem solid green",
    },
    icon:{
      fontSize: "5rem",
      color: "green",
    },
    title: {
        color: 'green',
        fontSize: '3vh',
        marginBottom: '.5rem',
        fontWeight: "bold",
    },
    textInput: {
        width: "40vh",
        paddingBottom: "1rem",
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
    button: {

      background: 'green',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(114, 209, 0, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      marginTop: "1rem",

      // position: 'relative',
      transition: 'transform .2s',
      borderRadius: "0.5rem",
      '&:hover' :{
        background: 'green',
        transform: 'scale(1.1)',
      }
    },

  });
  
  export default useStyles;