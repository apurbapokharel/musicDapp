import React, { Component } from 'react';
import './nayanavbar.css';
import IconButton from "@material-ui/core/IconButton";
import applogo from '../../../assets/applogo.png';

class NayaNavbar extends Component {
    render() {
        return (
            <div class="nayanavcontainer">
                <nav>
                    <div class="logo">
                    {/* <Typography  align="center" color="textinherit" gutterBottom>
                        <img src={applogo6} style={{height:"35px"}}/>Music on Blockchain
                    </Typography> */}
                    <IconButton  color="inherit" aria-label="menu" className="icon_btn">
                    <img src={applogo} style={{height:"35px", marginRight:"7px"}}/>Music on Blockchain
                    </IconButton>
                    </div>
                    <ul>
                        <li><a href="#" class="nayanava active">Home</a></li>
                        <li class="milauni"><a href="/musichome" >Library</a></li>
                        <li class="milauni"><a href="https://metamask.io/">Log In</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default NayaNavbar;