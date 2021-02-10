import React, { useState } from 'react'
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { searchSong } from '../../../API Caller/RESTFetcher';
import SongRow from './SongRow';
import { useContext } from 'react';
import playerContext from '../../../../context/playerContext';

function Header() {
    const musicContract = useSelector(state => state.musicContract)
    const currentAccount = useSelector(state => state.currentAccount)
    const[searchItem, setSearchItem] = useState('')
    const[searchStatus, setSearchStatus] = useState(false)
    const[searchResult, setSearchResult] = useState()
    const musics = useSelector(state => state.musics)
    const { SetCurrent, currentSong, songs } = useContext(playerContext)

    return (
        <div className="home__body">
            <div className="header">
                <div className="header__left">
                    <SearchIcon />
                    <form onSubmit={async(event) => {
                        event.preventDefault()
                        if(searchItem == ''){
                            setSearchStatus(false)
                        }
                        else{
                            await searchSong({
                                'searchItem': searchItem
                            })
                            .then((result) => {
                                setSearchResult(result)
                                setSearchStatus(true)
                                console.log('success', result)
                            })
                            .catch((bool) => {
                                setSearchResult(bool)
                                setSearchStatus(true)
                                console.log('fail', bool)
                            })
                        }
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
            {!searchStatus 
                ?
                <>
                    <div className="library__body__info">
                        <div className="library__body__infoText">
                            <h2>All Songs</h2>
                        </div>
                    </div>

                    <div className="library__body__songs">
                        <ul className="libraryBody__loi">
                            {
                                musics.map((song, i) =>
                                <li>
                                    <SongRow
                                        music={song}
                                        contractAddress={musicContract}
                                        currentAccount={currentAccount}
                                    />
                                </li>
                                )
                            }
                        </ul>
                    </div>     
                </>
                :
                <>
                    <div className="library__body__info">
                        <div className="library__body__infoText">
                            <h2>Searched Songs</h2>
                        </div>
                    </div>
                    
                    {!searchResult
                    ?
                    <div className="library__body__infoText">
                        <h2>Not Found</h2>
                    </div>
                    :
                    <div className="library__body__songs">
                        <ul className="libraryBody__loi">
                            {
                                searchResult.map((song, i) =>
                                <li>
                                    <SongRow
                                        music={song}
                                        contractAddress={musicContract}
                                        currentAccount={currentAccount}
                                    />
                                </li>
                                )
                            }
                        </ul>
                    </div> 
                    }
                   
                </>
            }
        </div>
        
    )
}

export default Header;
