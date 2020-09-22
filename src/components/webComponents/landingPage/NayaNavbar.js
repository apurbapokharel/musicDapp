import React, { Component } from 'react';
import './nayanavbar.css';
import IconButton from "@material-ui/core/IconButton";
import applogo from '../../../assets/applogo.png';
import { Link } from 'react-router-dom'

class NayaNavbar extends Component {
    render() {
        return (
            <div className="nayanavcontainer">
                <nav>
                    <div className="logo">
                    {/* <Typography  align="center" color="textinherit" gutterBottom>
                        <img src={applogo6} style={{height:"35px"}}/>Music on Blockchain
                    </Typography> */}
                    <IconButton  color="inherit" aria-label="menu" className="icon_btn">
                    <img src={applogo} style={{height:"35px", marginRight:"7px"}}/>Music on Blockchain
                    </IconButton>
                    </div>
                    <ul>
                        <Link to='/'>
                            <li className="milauni">Home</li>
                        </Link>  
                        <Link to='/musichome'>
                            <li className="milauni">Library</li>
                        </Link>  
                        <Link to='/buyTokens'>
                            <li className="milauni">Buy Tokens</li>
                        </Link> 
                        <Link to='/trackTokens'>
                            <li className="milauni">Track Tokens</li>
                        </Link> 
                        <Link to='/trackTokens'>
                            <li className="milauni">View Stats</li>
                        </Link> 
                        
                        {/* <li><a href="#" className="nayanava active">Home</a></li>
                        <li className="milauni"><a href="/musichome" >Library</a></li>
                        <li className="milauni"><a href="/buyTokens">Buy Tokens</a></li>
                        <li className="milauni"><a href="/trackTokens">Track Tokens</a></li>
                        <li className="milauni"><a href="/viewStats">View Stats</a></li>
                        <li className="milauni"><a href="https://metamask.io/">Log In</a></li> */}
                    </ul>
                </nav>
            </div>
        )
    }
}
export default NayaNavbar;