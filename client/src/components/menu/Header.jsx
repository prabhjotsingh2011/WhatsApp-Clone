import React,{useContext,useState} from 'react'
import {AccountContext} from '../../context/AccountProvider'

import {Box,makeStyles} from '@material-ui/core';
import {Chat} from '@material-ui/icons'
import HeaderMenu from './HeaderMenu';
import Drawer from '../Drawer/InfoDrawer';


const useStyles=makeStyles({
    header:{
        display: 'flex',
        height:35,
        background:' #ededed',
        padding:'10px 16px',
        alignItems:'center  '
    },
    avatar:{
        heigth:37,
        width:37,
        borderRadius:'50%'
    },
    icons:{
      marginLeft:'auto',
      '& > *':{
          marginLeft:2,
          padding:8,
          color:'#919191'
      },
      '&:first-child':{
          fontSize:22,
          marginRight:8,
          marginTop:3
      }
    }
})

const Header = () => {

    const {account}=useContext(AccountContext);
    const [open, setOpen] = useState(false);
    const classes=useStyles();
    const toggleDrawer=()=>{
        setOpen(true);
    }

    return (
        <>
            <Box className={classes.header}>
                <img src={account.imageUrl} alt="DP"  onClick={()=>toggleDrawer()} className={classes.avatar} />
                <Box className={classes.icons}>
                    <Chat/>
                    <HeaderMenu/>
                </Box>
            </Box>
            <Drawer open={open}
                setOpen={setOpen}
            />
        </>
    )
}

export default Header
