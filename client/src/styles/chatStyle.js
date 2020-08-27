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
    chatHistory:{
      height:"80%",
      overflow:"scroll"
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
    inputBox:{
      // display:"flex",
      // justifyContent:"center",
      // alignItems:"stretch",
      // marginTop: "1rem",
      // paddingBottom: "1rem",
      position:"relative",

    },
    sendIcon:{
      fontSize:"2rem",
      width:"5%",
      height:"95%",
      position:"absolute",
      bottom:"0",
      
      paddingLeft:"0.5rem",
      paddingRight:"0.5rem",
      color:"green",
      transition: 'transform .2s',
      border: "1px solid green",
      borderRadius: ".5rem",
      '&:hover' :{
        background:"green",
        color:"white",
        // transform: 'scale(1.1)',
      }

    },
    textInput: {
        width: "90%",
        marginRight:"0.5rem",
        '& label.Mui-focused': {
          color: 'green',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'green',
        },
        '& .MuiInput-underline:hover:not($disabled):before': {
            borderBottomColor: 'green',
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "green",
          borderRadius:"0.5rem",
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
    message:{
      background: "rgba(0,128,0,0.5)",
    },
    chatBox: {
      height:"80vh",
      width:"80vw",
      padding:"1rem",
      background:"white",
      borderRadius:"1rem",
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
    },
    outerContainer: {
      background:"rgba(0,128,0,0.5)",
      overflow: "auto", 
      height:"100vh",
      display: "flex",
      justifyContent:"center",
      alignItems:"center",
    },

  });
  
  export default useStyles;