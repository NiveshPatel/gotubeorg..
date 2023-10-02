import {Stack} from "@mui/material"
import {Link} from "react-router-dom"
import React from 'react'
import {logo} from "../utils/contants"
import SearchBar from "./SearchBar"
import {Typography} from '@mui/material'

const Navbar = () => {
   return(
    <Stack direction="row"
     alignItems="center"
    p={2}
      sx={{position:'sticky' ,backgroundColor:'#000',justifyContent:"space-between",
    top:'0'}}>
    <Link to="/" style={{display:'flex',alignItems:'center'}}>
      <img  src={logo} alt="logo" height={45} />
      <Typography
      variant="h5"
      
       sx={{color:'red',fontSize:{xs:'10px',sm:'20px',md:'27.5px'}}}>
      GOTUBE
      </Typography>
    </Link>
    <SearchBar/>
    </Stack>
  )
   }

export default Navbar