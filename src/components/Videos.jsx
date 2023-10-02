import { Box, Stack } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
const Videos = ({videos,direction}) => {
    // console.log(videos)
if(!videos?.length) return 'Loading'
  return (
    <Stack 
    direction={direction||"row"}
    flexWrap="wrap" 
    alignItems="start"
    justifyContent="start" 
    gap={2}>
       {videos.map((e,i)=>(
        <Box key={i}>
      {e.id.videoId && <VideoCard video= {e}/>}
      {e.id.channelId && <ChannelCard ChannelDetail= {e}/>}
        </Box>
       ))}
    </Stack>
  )
}

export default Videos