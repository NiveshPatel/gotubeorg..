import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Box, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/contants'


const ChannelCard = ({ChannelDetail,marginTop}) => {
  return (
    <Box sx={{
        boxShadow:'none',
        borderRadius:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:{xs:'356px',md:'311px'},
        height:'326px',
        margin:'auto',
        marginTop
    }}>
      <Link to={`/channel/${ChannelDetail?.id?.channelId}`}>
        <CardContent sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            textAlign:'center',
            color:'#fff',
            alignItems:'center'
        }}>
       <CardMedia
        image={ChannelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
        alt={ChannelDetail?.snippet?.title}
        sx={{borderRadius:'50%',height:'180px',width:'180px',mb:'6',border:'1px solid #e3e3e3'}}
       />
       <Typography
           variant='h6'
       >
           {ChannelDetail?.snippet?.title}
           <CheckCircleIcon sx={{fontSize:'15' , color:'gray'}}/>
       </Typography>
       {ChannelDetail?.statistics?.subscriberCount && (
                    <Typography>
                        {parseInt(ChannelDetail?.statistics.subscriberCount).toLocaleString('en-US')} Subscribers
                    </Typography>
                 )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard