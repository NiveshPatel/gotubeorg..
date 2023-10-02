import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoThumbnailUrl,demoChannelTitle,demoVideoTitle,demoChannelUrl, demoVideoUrl } from '../utils/contants'
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import ChannelDetail from './ChannelDetail'


const VideoCard = ({video :{id:{videoId},snippet}}) => 
    
   (
    <Card sx={{width:
        {xs:"100%",sm:'358px',md:'311px',},
    boxShadow:'none',borderRadius:0}}>
        <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
        <CardMedia image ={snippet?.thumbnails?.high?.url} alt={snippet?.title}
        sx={{width:{
            xs:'100%',
            sm:'358px',
            md:'311px'
        },height:180}}/>
        </Link>
        <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
            <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
             <Typography
             variant='subtitle1'
             fontWeight='bold'
             color='#fff'
             >
                {snippet?.title.slice(0,60) || 
                demoVideoTitle.slice(0,60)
                }

             </Typography>

            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` :demoVideoUrl}>
             <Typography
             variant='subtitle2'
            
             color='gray'
             >
                {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{fontSize:'12px' , color:'gray', ml:'5px'}}/>
             </Typography>
                 
            </Link>

        </CardContent>
    </Card>
  )


export default VideoCard
