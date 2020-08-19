import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '100px 50px',
    },
    title: {
        color: 'green',
        marginBottom: '2rem',
    },
    textInput: {
        width: "20rem",
        paddingBottom: "1rem",
    },
    button: {
      background: 'green',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(114, 209, 0, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      marginTop: "2rem",
      position: 'relative',
      transition: 'transform .2s',
      top: '50%',
      borderRadius: "0.5rem",
      '&:hover' :{
        background: 'green',
        transform: 'scale(1.1)',
      }
    },

  });
  
  export default useStyles;