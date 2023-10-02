import React, { useEffect, useState } from "react";
import { Box,  Typography } from "@mui/material";

import Videos from './Videos'
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  
  const [videos, setvideos] = useState([])
  const {searchTerm} = useParams()
  useEffect(()=>{
     fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data)=>
setvideos(data.items)
     )
  },[searchTerm])
  return (
    <Box p={2} minHeight="95vh" sx={{ overflowY: "auto", height: "90vh", flex: "2" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{
              color: "#fff",
              
            }}
          >
            Search Result for :  
            <span style={{ color: "#F31503",padding:'10',
           }}>{searchTerm}</span>
          </Typography>
           <Box display="flex" p="2">
      <Box sx={{mr:{sm:'100px'}}}/>
      <Videos videos={videos}/>
    </Box>
      </Box>
  );
};

export default SearchFeed;
