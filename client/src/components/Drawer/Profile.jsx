import React, { useContext } from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core';
import { AccountContext } from '../../context/AccountProvider'

const useStyle = makeStyles({
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',

    },
    DisplayPicture: {
        width: 200,
        height: 200,
        borderRadius: '50%',
        padding: '18px 0'
    },
    nameContainer: {
        background: '#ffffff',
        padding:'12px 30px 8px',
        boxShadow:'0 1px 3px rgba(0,0,0,0.08)',
        '& :first-child':{
            fontSize:18,
            color:'#009688'
        },
        
        '& :last-child':{
            fontSize:16,
            color:'#4A4A4A',
            margin:'12px 0'
        },

    },
    description:
    {
        padding: '10px 20px 28px 30px',
        '& > *':{
            fontSize:12,
            color:'rgba(0,0,0,0.45)'
        }
    }

})

const Profile = () => {

    const classes = useStyle()
    const { account } = useContext(AccountContext);
    return (
        <>
            <Box className={classes.imageContainer}>
                <img src={account.imageUrl} alt="dp" className={classes.DisplayPicture} />
            </Box>


            <Box className={classes.nameContainer}>
                <Typography>
                    Your Name
                </Typography>
                <Typography>
                    {account.name}
                </Typography>
            </Box>



            <Box className={classes.description}>
                <Typography>
                    This is not your username or pin.This name will be visible to your whatsapp and contacts
                </Typography>
            </Box>


            <Box className={classes.nameContainer}>
                <Typography>
                    Your About
                </Typography>
                <Typography>
                        {' Eat->Code->Sleep->repeat'}
                </Typography>
            </Box>
        </>
    )
}

export default Profile
