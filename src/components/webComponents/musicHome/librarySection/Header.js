import React from 'react'
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input 
                    placeholder="Search for songs and artists"
                    type="text"
                />
            </div>
            <div className="header__right">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQElkWA44urLoqZh1_hjDV9ES3XJyusvP52Iw&usqp=CAU" alt="RQ" />
                <h4>Taylor Swift</h4>
            </div>
        </div>
    )
}

export default Header;
