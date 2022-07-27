import { AppBar, Avatar, Badge, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { InputBase } from '@mui/material';
import React, { useState } from 'react'
const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
})
const Search = styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width: "40%",
}));
const Icons = styled("Box")(({theme})=>({
   display:"none",
   gap:"20px",
   alignItems:"center",
   [theme.breakpoints.up('sm')]:{
    display:"flex",
   }
}));
const UserBox = styled("Box")(({theme})=>({
    display:"flex",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up('sm')]:{
        display:"none",
       }
 }));
 
const Navbar = () => {
    const [open,setOpen] = useState(false);
  return (
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography varient="h6" sx={{display:{xs:"none",sm:"block"}}}>
                FACEBOOK
            </Typography>
            <MenuBookOutlinedIcon sx={{display:{xs:"block",sm:"none"}}}></MenuBookOutlinedIcon>
            <Search ><InputBase placeholder="Search..."/> </Search>
            <Icons >
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <NotificationsIcon />
                </Badge>
                <Avatar 
                onClick={()=>{setOpen(true); }}
                 sx={{width:30,height:30}} alt="Remy Sharp" src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" />
            </Icons>
            <UserBox onClick={()=>{
                    setOpen(true);
                }} >
                <Avatar  sx={{width:30,height:30}} alt="Remy Sharp" src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" />
                <Typography variat="span">Ravi Sharma</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        right
        open={open}   
        onClose={()=>{setOpen(false);}}  
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem  >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar