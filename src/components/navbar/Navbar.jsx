import React from 'react'
import "./navbar.css"
import FlagIcon from '@mui/icons-material/Flag';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useState } from 'react';

const Navbar = () => {
    const[click,setClick]=useState(false);
    const handleClick=()=>setClick(!click)
    return (
        <div className="navbar">
            <div className="container">
              
                    <div className="logo">
                        <FlagIcon className="icon" fontSize="large"/>
                        <span className="bayrak">bayrak.com</span>
                    </div>
                    <div className="auth">
                        <ul className="nav-menu">
                            <li className="nav-item" onClick={handleClick}>My Account
                                <ul className={click?"popup active":"popup"} >
                                    <li className="popup-item">Profile</li>
                                    <li className="popup-item">Logout</li>
                                </ul>
                            
                            </li>
                            <li className="nav-item">Support</li>
                            <li className="nav-item">
                                <SearchIcon/>
                            </li>
                            <li className="nav-item">
                                <ShoppingCartOutlinedIcon/>
                            </li>
                        </ul>
                    </div>
                
            </div>
        </div>
    )
}

export default Navbar
