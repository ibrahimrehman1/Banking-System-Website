import React from "react";
import WebsiteLogo from "./../assets/website-logo.png";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


function Navbar(){
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <nav className="navbar">
            <div className="website-img">
                <img src={WebsiteLogo} alt="Payonta" />
            </div>
            <div>
                <ul className="nav-list">
                    {["Home", "Services", "Contact"].map((link, index)=>{
                        return(<li key={index}>
                            <a href="#" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>{link}</a>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </li>
                        )
                    })}
                </ul>
            </div>
    
        </nav>
    )
}

export {Navbar};