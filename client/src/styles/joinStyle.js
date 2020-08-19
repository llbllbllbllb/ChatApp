import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '100px 50px',
    },
    textInput: {
        width: "20rem",
        paddingBottom: "1rem",
        color: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"


    },
    button: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    //   margin: '0 auto',
    //   display: 'block',
      position: 'relative',
      top: '50%',
    },
  });
  
  export default useStyles;