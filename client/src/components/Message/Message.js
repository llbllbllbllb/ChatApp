import React from 'react'

import {Typography} from '@material-ui/core'

import messageStyle from '../../styles/messageStyle';

const Message = ({m,idx, isCurrentUser}) => {

    const style = messageStyle()

    return(
        <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-start"}}>
            <Typography className={isCurrentUser ? `${style.right}` : `${style.left}`}>{m.user}</Typography>
            <div className={isCurrentUser ? `${style.right}` : `${style.left}`}>
                <Typography className={isCurrentUser ? `${style.isCurrentUser} ${style.message}` : `${style.notCurrentUser} ${style.message}`}>{m.text}</Typography>
            </div>
            
        </div>
        
    );
}

export default Message;