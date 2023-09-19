
import React, { useState } from "react";
import logo1 from "../../img/logo1.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { useEffect } from "react";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />,
          },
          {
            text: "About",
            icon: <InfoIcon />,
          },
          {
            text: "Testimonials",
            icon: <CommentRoundedIcon />,
          },
          {
            text: "Contact",
            icon: <PhoneRoundedIcon />,
          },
    ];

    const [scrolled,setScrolled]=React.useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 200 ){
        setScrolled(true);
        }
        else{
        setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })
    let navbarClasses=['navbar'];
    if(scrolled){
        navbarClasses.push('scrolled');
    }


  return (
    <nav className={navbarClasses.join(" ")} id="Navbar">
        <div className="nav-logo-container">
            <img src={logo1} alt="" />
        </div>
        <div className="navbar-links-container">
            <a href="#Home">Home</a>
            <a href="#Features">Features</a>
            <a href="#About">About</a>                        
            <a href="#Contact">Contact</a>
            <a href="">
            </a>
        </div>

        <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>

    </nav>
  )
}


export default Navbar