import { Card, makeStyles, Tooltip, Typography } from "@material-ui/core";
import React from 'react'

const useStyle = makeStyles({
    img: {
       height: '400px',
       width: '100%',
       objectFit: "cover"
       
       
    }
})


function Character({ item }) {
    const classes= useStyle();
    return (
      <Card>
          <Tooltip title={
              <>
               <Typography>Name: {item.name}</Typography>
               <Typography>Date of Birth: {item.birthday}</Typography>
               <Typography> Occupation: {item.occupation}</Typography>
               <Typography>Status: {item.status}</Typography>
               <Typography>Nick Name: {item.nickname}</Typography>
               <Typography>Real Name: {item.portrayed}</Typography>
               <Typography>Appearnce: {item.appearance}</Typography>
              </>
          }>
         <img className={classes.img} src={item.img} alt = "character" /> 
         </Tooltip>
      </Card>
    )
}

export default Character
