import { Dialog,withStyles,Box,Typography,List, ListItem, makeStyles } from '@material-ui/core'
import React,{useContext} from 'react'
import {GoogleLogin} from 'react-google-login';
import {AccountContext} from '../../context/AccountProvider'
import { addUser } from '../../service/api';

const useStyles=makeStyles({
    component:{
        display:'flex',
        
    },
    leftComponent: {
        padding:'56px 0 56px 56px'
    },
    qrcode:{
        height:264,
        width:264,
        padding:'50px 0 0 56px'
    },
    title:{
        fontSize:26,
        marginBottom:'25px',
        color:'#525252',
        fontFamily:'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeigth:500
    },
    list:{
        '& > *':{
            fontSize:18,
            padding:0,
            marginTop:15,
            lineHeight:'28px',
            color:'#4A4A4A'
        }
    }
})


const style={
    dialogPaper:{
        height:'95%',
        width:'60%',
        marginTop:'12%',
        boxShadow:'none',
        borderRadius:0,
        maxHeight:'100%',
        maxWidth:'100%',
        background: '#ebe8eb',
        overflow:'hidden'
    }
}

const Login = ({classes}) => {
    const classname=useStyles();
    const url='https://qrcode.tec-it.com/API/QRCode?data=QR+Code+Generator+by+TEC-IT'
    const clientID='168129104902-bvtqkn3q3k7uims4ojt83nh5jl1e378i.apps.googleusercontent.com'


    const {account,setAccount} = useContext(AccountContext)


    const onLoginSuccess=async(res)=>{
        console.log(res);
        setAccount(res.profileObj);
        await addUser(res.profileObj)
    }
    const onLoginFailure=()=>{
        console.log('====================================');
        console.log("login fail");
        console.log('====================================');
    }


    return (
        <Dialog 
            open={true}
            classes={{paper: classes.dialogPaper}}
            BackdropProps={{style:{backgroundColor:'unset'}}}
        >
            <Box className={classname.component}>
                <Box className={classname.leftComponent}>
                    <Typography className={classname.title}>To uise WhatsApp on your computer: </Typography>
                    <List className={classname.list}>
                        <ListItem>1. Open whatsapp on your phone</ListItem>
                        <ListItem>2. Tap Menu or settings and select linked device</ListItem>
                        <ListItem>1. Point your Phone to this screen to capture the code</ListItem>
                    </List>
                </Box>
                <Box style={{position:'relative'}}>   
                    <img src={url} alt='qr' className={classname.qrcode}/>
                    <Box style={{position:'absolute',left:'50%',top:'50%'}}>
                    <GoogleLogin
                        clientId={clientID}
                        buttonText=""
                        isSignedIn={true}
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                    </Box>
                </Box>
            </Box>
        </Dialog>
    )
}

export default withStyles(style)(Login)
