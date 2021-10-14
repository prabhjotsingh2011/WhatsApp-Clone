import React, { useEffect, useState,useContext } from 'react'
import { getUser } from '../../service/api';
import { Box,makeStyles } from '@material-ui/core'
// import user from '../../../../server/model/user';
import Conversation from './Conversation';
import {AccountContext} from '../../context/AccountProvider';


    const useStyles=makeStyles({
        component:{
            height:'81vh',
            overflow: 'overlay'
        }
    })


const Conversations = ({text}) => {

    const classes=useStyles();

    const {account,socket,setActiveUsers}=useContext(AccountContext)

    const [users, setUsers] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const data = await getUser();
            // console.log(data);
            const filterData=data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
            setUsers(filterData);
        };
        fetchData()
    }, [text]);

    useEffect(() => {
        socket.current.emit('addUser',account.googleId);
        socket.current.on('getUsers',(users) => {
            setActiveUsers(users);
        })  
    }, [account]);

    return (
       <Box className={classes.conponent}>
          {
               users.map(user=>(
                   user.googleId!==account.googleId &&
                    <Conversation user={user}/>
               )) 
          }
       </Box>
    )
}

export default Conversations
