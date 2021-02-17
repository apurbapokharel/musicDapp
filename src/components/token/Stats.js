import React, { useState, useEffect, Component } from 'react';
import './stat.css'
import { getSongCount, searchSong } from '../API Caller/RESTFetcher'

const Stats = (props) => {
    const[songCount, setSongCount] = useState()
    const[songStats, setSongStats] = useState()

    useEffect(() => {
        (async() => {
            await getSongCount()
            .then((result) => {
                setSongCount(result)
            })
            .catch((bool) => {
                console.log('fail');
            })
            await searchSong({
                "searchItem": props.songName
            })
            .then((result) => {
                setSongStats(result)
            })
            .catch((bool) => {
                console.log('fail');
            })
        })()
    }, [])
    return (            
        <div className="wrapper">
            <div className="panel">
                {songStats 
                ?
                <div className="panel-body">
                    <div className="categories">
                        <div className="category">
                            <span>Total songs in the network</span>
                            <span>{songCount}</span>
                        </div>
                        <div className="category">
                            <span>Total streams</span>
                            <span>{songStats[0].streamCount}</span>
                        </div>
                        <div className="category">
                            <span>Total Downloads</span>
                            <span>{songStats[0].downloadCount}</span>
                        </div>
                    </div>

                    <div className="chart">
                        <div className="categories">
                            <div className="category">
                                <span>All revenue are in MSIC</span>
                            </div>
                            <div className="category">
                                <span>Revenue from Tip</span>
                                <span>{songStats[0].revenueFromTip} </span>
                            </div>
                            <div className="category">
                                <span>Revenue from Stream</span>
                                <span>{songStats[0].streamCount * songStats[0].costPerStream } </span>
                            </div>
                            <div className="category">
                                <span>Revenue from Dwonloads</span>
                                <span>{songStats[0].downloadCount * songStats[0].costPerDownload } </span>
                            </div>
                            <div className="category">
                                <span>Total Revenus Generated so far</span>
                                <span>
                                    {songStats[0].revenueFromTip + 
                                    songStats[0].streamCount * songStats[0].costPerStream + 
                                    songStats[0].downloadCount * songStats[0].costPerDownload } 
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                : 
                <div className="panel-body">
                    <div className="categories">
                        <div className="category">
                            <span>Total songs in the network</span>
                            <span>Loading...</span>
                        </div>
                        <div className="category">
                            <span>Total streams</span>
                            <span>Loading...</span>
                        </div>
                        <div className="category">
                            <span>Total Downloads</span>
                            <span>Loading...</span>
                        </div>
                    </div>

                    <div className="chart">
                        <div className="categories">
                            <div className="category">
                                <span>Revenue from Tip</span>
                                <span>Loading...</span>
                            </div>
                            <div className="category">
                                <span>Revenue from Stream</span>
                                <span>Loading...</span>
                            </div>
                            <div className="category">
                                <span>Revenue from Dwonloads</span>
                                <span>Loading...</span>
                            </div>
                            <div className="category">
                                <span>Total Revenus Generated so far</span>
                                <span>Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
                }

            </div>
        </div>
    );
}

export default Stats;