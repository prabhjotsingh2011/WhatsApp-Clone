
import { Box,Typography,makeStyles } from "@material-ui/core"
import moment from 'moment';
import { useContext } from "react";

import { AccountContext } from "../context/AccountProvider";

const useStyles=makeStyles({
    wrapper:{
        background: '#FFFFFF',
        padding: 5,
        maxWidth:'60%',
        display:'flex',
        borderRadius:10,
        width: 'fit-content',
        wordBreak:'break-word'
    },
    text:{
        fontSize:14,
        padding:'0 25px 0 5px'
    },
    time:{
        fontSize:10,
        marginTop:'auto',
        marginTop:6,
        color:'#919191',
        wordBreak:'keep-all'
    },
    own:{
        background: '#dcf8c6',
        padding: 5,
        maxWidth:'60%',
        display:'flex',
        borderRadius:10,
        width: 'fit-content',
        wordBreak:'break-word',
        marginLeft:'auto'
        
    }
})
const Message = ({message}) => {


    const {account} =useContext(AccountContext);

    const formatdate=()=>{

    }

    const classes=useStyles()
    return (
        <Box className={account.googleId === message.sender? classes.own: classes.wrapper}>
            <Typography className={classes.text}>{message.text}</Typography>
            <Typography className={classes.time}>{moment(message.createdAt).format(' h:mm a')}</Typography>
        </Box>
    )
}

export default Message
