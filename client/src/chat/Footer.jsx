import React from 'react'
import { Box,makeStyles,InputBase } from '@material-ui/core'
import { EmojiEmotions,AttachFile,Mic, SettingsOverscanOutlined } from '@material-ui/icons'

const useStyle =makeStyles(theme=>({
    footer:{
        height:55,
        width: '100%',
        background: '#ededed',
        display: 'flex',
        alignItems:'center',
        padding: '0 15px',
        '& >*':{
            margin:5,
            color:'#919191'
        }
    },
    clipIcon:{
        transform: 'rotate(40deg)'
    },
    inputRoot:{
        // color: 'inherit',
        width: '100%'
        
    },
    inputInput:{
        padding:theme.spacing(1,1,1,0),
        paddingLeft:25,
        fontSize:14,
        width:'100%',
        height:20    
    },
    searchBox:{
        backgroundColor:'#ffffff',
        borderRadius:18,
        width:'calc(95% - 100px)'
    }
}))

const Footer = ({sendText,setValue,value}) => {
    const classes=useStyle();
    return (
        <>
            <Box className={classes.footer}>
                <EmojiEmotions/>
                <AttachFile className={classes.clipIcon}/>
                <Box className={classes.searchBox}>
                    <InputBase 
                        placeholder='Type a message'
                        classes={{
                            root:classes.inputRoot,
                            input:classes.inputInput,
                        }}
                        inputProps={{'aria-label':'serach'}}
                        onKeyPress={(e)=> {
                            sendText(e);
                            
                            }
                        }
                        onChange={(e)=> setValue(e.target.value)}
                        value={value}
                    />
                </Box>
                <Mic/>
            </Box>
        </>
    )
}

export default Footer
