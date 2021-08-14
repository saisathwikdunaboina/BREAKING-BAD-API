import React from 'react'
import { AppBar, Toolbar, makeStyles, Box, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css";

const useStyle = makeStyles({
    headerbar: {
        background: "#000",
        padding: 5
    },
    search: {
     backgroundColor: 'rgba(255, 255, 255, 0.15)',
     marginLeft: 100,
     borderRadius: 5,
     position: "relative"
    },
    inputBox: {
          color: 'inherit',
          margin: '0 50px'
    },
    searchicon: {
          position: 'absolute',
          marginLeft: 10,
          top: 3
    }
})

function Header({ getText}) {
    const classes = useStyle();
    return (
        <div className="header">
            <AppBar className={classes.headerbar} position="static">
                <Toolbar>
                  <img className="logo" src="https://www.nicepng.com/png/full/56-568500_breaking-bad-logo-png.png" alt="" />
                 <Box className={classes.search}>
                     <Box>
                         <SearchIcon className={classes.searchicon} />
                     </Box>
                     <InputBase placeholder="Say My Name" autoFocus classes = {{ root : classes.inputBox }}
                                onChange={(e) => getText(e.target.value)}
                                /> 
                            
                 </Box> 
                      
                </Toolbar>
            </AppBar>
   
            
        </div>
    )
}

export default Header
 