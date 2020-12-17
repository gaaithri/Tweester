import React from 'react';
import './sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Button } from '@material-ui/core';
function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon />
            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Mail" />
            <SidebarOption Icon={ListAltIcon} text="Alt" />
            <SidebarOption Icon={PermIdentityIcon} text="identity" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <Button variant="outlined" className="sidebar__tweet" fullWidth> Tweet</Button>




            {/* <button> </button> */}
        </div>
    );
}

export default Sidebar;
