import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFromApi } from '../utils/fetchFromApi'
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();
useEffect(() => {
  const fetchResults = async () => {
    const data = await fetchFromApi(`channels?part=snippet&id=${id}`);

    setChannelDetail(data?.items[0]);

    const videosData = await fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);

    setVideos(videosData?.items);
  };

  fetchResults();
}, [id]);
  // console.log(channelDetail,videos)
  return (
   <Box minHeight="95vh">
    <Box>
<div
  style={{background: "linear-gradient(90deg, rgba(66,8,139,1) 57%, rgba(2,0,36,1) 100%)",
 zIndex:10,
 height:'300px'
}}


/>
<ChannelCard ChannelDetail={channelDetail} marginTop="-120px"/>
    </Box>
    <Box display="flex" p="2">
      <Box sx={{mr:{sm:'100px'}}}/>
      <Videos videos={videos}/>
    </Box>
   </Box>
  )
}

export default ChannelDetail