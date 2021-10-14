

import React, { createContext } from 'react'
import {ThemeProvider,createTheme} from '@material-ui/core';

// export  const TemplateContext=createContext(null);
export const TemplateContext = createContext(null);
const TemplateProvider = ({children}) => {

    const theme=createTheme({
        overrides:{
            MuiDrawer: {
                paperAnchorLeft: {
                    left: 62,
                    top: 17,
                    height: '95%',
                    width: '28%',
                    boxShadow: 'none'
                }
            }
        }
    })

    return (
            <TemplateContext.Provider>
                <ThemeProvider  theme={theme}>
                    {children}
                </ThemeProvider>        
            </TemplateContext.Provider>
    )
}

export default TemplateProvider
