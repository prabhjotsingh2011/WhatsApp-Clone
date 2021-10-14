

import { Box,makeStyles } from '@material-ui/core'
import React from 'react'


const useStyles=makeStyles({
    component:{
        background:'#f8f9fa',
        height:'100%',
        padding:'50px 0',
        textAlign:'center'
    }
})

const EmptyChat = () => {
    const classes=useStyles();
    const url='https://ik.imagekit.io/ag/wp-content/uploads/2015/01/QR-connected.png'
    return (
        <>
          <Box className={classes.component}>
              <img src={url} alt="empty" />
          </Box>
        </>
    )
}

export default EmptyChat
