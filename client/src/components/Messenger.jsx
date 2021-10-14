import React,{useContext} from 'react'
import { AppBar, Toolbar, makeStyles, Box } from '@material-ui/core'

import Login from './account/Login';
import ChatBox from './account/ChatBox'


import {AccountContext} from '../context/AccountProvider'

const useStyles = makeStyles({
    component: {
        background: '#DCDCDC',  
        heigth: '100vh'
    },
    loginHeader: {
        height: 200,
        background: '#00bfa5',
        boxShadow: 'none '
    },
    Header: {
        height: 115,
        background: '#00bfa5',
        boxShadow: 'none '
    },

})
const Messenger = () => {
    const classes = useStyles();
    const  {account}=useContext(AccountContext)
    console.log('====================================');
    console.log(account);
    console.log('====================================');
    return (
        <>
            <Box className={classes.component}>
                <AppBar className={account?classes.Header: classes.loginHeader}>
                    <Toolbar>messenger</Toolbar>
                </AppBar>
                {account ? <ChatBox/>:<Login />}
            </Box>
        </>
    )
}

export default Messenger
