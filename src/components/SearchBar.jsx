import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Search} from '@mui/icons-material'
import {Paper,IconButton} from '@mui/material'
const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState("")
  const navigate = useNavigate()
  const submitHandler = (e)=>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      setsearchTerm('')
    }
  }
  return (
    <Paper
     component="form"
     onSubmit={submitHandler}
        sx={{
            borderRadius:20,
            border:'1px solid #e3e3e3',
            pl:2,
            boxShadow:'none',
            mr:{sm:5}

        }}
    >
          <input value={searchTerm}
          className='search-bar' onChange={(e)=>setsearchTerm(e.target.value)} type="text" placeholder='Search..'/>
        
        <IconButton type='submit' sx={{
            p:'10px',
            color:'red'
        }} aria-label='search'>
            <Search/>
        </IconButton>
       
    </Paper>
  )
}

export default SearchBar