import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import { Avatar, Button, ButtonGroup, TextField, Typography } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CollectionsIcon from '@mui/icons-material/Collections';

const StyledModal =styled(Modal)({
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
    
})
const UserBox= styled(Box)({
    display:"flex",
    alignItems: "center",
    gap:"10px",
    marginButtom:"20px",
})

function Add(){
    const [open,setOpen] = useState(false);
    return(<>
        <Tooltip onClick={()=>{setOpen(true)}} title="Delete" sx={{position:"fixed",bottom:20,left:{xs:"calc(50%)", md:30}}}>
        <Fab color="primary" aria-label="add">
             <AddIcon />
        </Fab>
    </Tooltip>
    <StyledModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={()=>{setOpen(false)}}     
      >
        
          <Box width={400} height={280} padding={3} borderRadius={5} bgcolor={"background.default"} color={"text.primary"}>
            <Typography variant="h6" color="gray" textAlign="center">
                Create Post
            </Typography>
            <UserBox>
                <Avatar
                    src="https://mui.com/static/images/avatar/1.jpg"
                    sx={{width:30, height:30}}>
                </Avatar>
                <Typography fontWeight={500} variant="span">
                    Prakash Kumar
                </Typography>
            </UserBox>
            <TextField
            sx={{width:"100%"}}
                id="standard-multiline-static"
                multiline
                rows={3}
                placeholder="What's on your mind?"
                variant="standard"
                width={200}
                />
                <Stack direction="row" spacing={1} mt={2} mb={3}>
                    <EmojiEmotionsIcon color='vivid orange'/>
                    <CollectionsIcon color={'success'}/>
                    <VideoCameraBackIcon color={'secondary'} />
                    <PersonAddIcon color={'primary'}/>
                    <FmdGoodIcon  color={'error'}/>
                </Stack>
                <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                    <Button >Post</Button>
                    <Button sx={{width:'100px'}}><DateRangeIcon /></Button>
                   
                </ButtonGroup>
          </Box>
            
        
      </StyledModal>
    </>)
}

export default Add;