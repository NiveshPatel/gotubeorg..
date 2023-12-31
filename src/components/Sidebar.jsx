import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/contants'


const Sidebar = ({selectedCategory,setselectedCategory}) => 
   (
    <Stack direction="row"
    sx={{
        overflow:'auto',
        height:{sx:'auto',md:'95%'},
        flexDirection:{md:'column'}
    }}
    >
    {categories.map((category)=>(
        <button
        onClick={()=>setselectedCategory(category.name)}
        className="category-btn"
        style={{
            background:category.name === selectedCategory && '#FC1503',
            color:'#fff'
        }}
        key={category.name}
        >
            <span style = {{color:category.name === selectedCategory ? 'white' : 'red',marginRight:'15px'}}>{category.icon}</span>
            <span style={{opacity:category.name===selectedCategory?'1': '0.7'}}>{category.name}</span>
        </button>
    ))}
    </Stack>
  )


export default Sidebar