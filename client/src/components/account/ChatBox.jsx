import { Dialog, withStyles, Box, makeStyles } from '@material-ui/core'
import React, { useContext } from 'react'
import Chat from '../../chat/Chat'
import { UserContext } from '../../context/UserProvider'
import EmptyChat from '../../chat/EmptyChat'


import Menu from '../menu/Menu'
const style = {
    dialogPaper: {
        height: '95%',
        width: '91%',
        boxShadow: 'none',
        borderRadius: 0,
        maxHeight: '100%',
        maxWidth: '100%',
        background: '#ebe8eb',
        overflow: 'hidden'
    }
}

const useStyles = makeStyles({
    component: {
        display: 'flex'
    },
    leftComponent: {
        minWidth: '380px',
        borderLeft: '1px solid rgba(0,0,0,0.14)'
    },
    rightComponent: {
        borderLeft: '1px solid rgba(0,0,0,0.14)',
        width: '71%',
        minWidth: 300,
        height: '100%'
    }
})

const ChatBox = ({ classes }) => {

    const { person } = useContext(UserContext);
    const classname = useStyles();

    return (
        <>
            <Dialog
                open={true}
                classes={{ paper: classes.dialogPaper }}
                BackdropProps={{ style: { backgroundColor: 'unset' } }}
            >
                <Box className={classname.component}>
                    <Box className={classname.leftComponent}>
                        <Menu />
                    </Box>
                    <Box className={classname.rightComponent}>
                        {
                            Object.keys(person).length ? <Chat /> : <EmptyChat /> 
                        }
                        {/* <Chat /> */}
                    </Box>
                </Box>
            </Dialog>
        </>
    )
}

export default withStyles(style)(ChatBox)
