import React, { useState } from 'react'
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useSelector } from 'react-redux';

function Header() {
    const currentAccount = useSelector(state => state.currentAccount)
    const[searchItem, setSearchItem] = useState()
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <form onSubmit={(event) => {
                    event.preventDefault()
                }}>
                    <input 
                    type="text"
                    placeholder="search song or artist"
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}  
                    />
                </form>
            
            </div>
            <div className="header__right">
                {/* <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQElkWA44urLoqZh1_hjDV9ES3XJyusvP52Iw&usqp=CAU" alt="RQ" /> */}
                <h4>{currentAccount}</h4>
            </div>
        </div>
    )
}

export default Header;
