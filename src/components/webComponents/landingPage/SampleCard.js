import React, { useState, useEffect, Component } from 'react';
import './sampleCard.css';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import QueueIcon from '@material-ui/icons/Queue';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TimerIcon from '@material-ui/icons/Timer';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { Grid, Tooltip } from '@material-ui/core';
import Modal from './Modal';
import Aux from '../../hoc/Auxiliary';
import GroupAvatars from '../songCard/AvatarGroup';
import ReactDOM from 'react-dom'
import { useContext } from 'react';
import playerContext from '../../../context/playerContext';
import fleek from '@fleekhq/fleek-storage-js';
import crypto from 'crypto-js';
import { getSongKey, purchaseSong, getPurchaseList } from '../../API Caller/RESTFetcher';

function SongCard(props) {

    const[showMe, setShowMe] = useState(false)
    const[imageURL, setImageURL] = useState()
    const[aesKey, setAESKey] = useState() 
    const[songCount, setSongCount] = useState()
    const[downloadStatus, setDownloadStatus] = useState()
    const { SetCurrent, setCurrentSong, setCurrentArtist, setSongSource, setCurrentSongImageURL } = useContext(playerContext)

    useEffect(() => {
        (async() => {
            console.log('props passed', props, props.music.musicIdentifier)
            var str = props.music.musicIdentifier
            console.log(props.music.musicIdentifier);
            var str2 = str.replace(/\s/g, '%20')
            var url = `https://apurbapokharel-team-bucket.storage.fleek.co/my-folder/${str2}/image`
            setImageURL(new String(url))
            //get aes key
            await getSongKey({
                'songIdentifier': props.music.musicIdentifier
            })
            .then((result) => {
                // console.log("aes key", result);
                setAESKey(result[0])
                setSongCount(result[1])
            })
            .catch((result) => {
                console.log("error", result);
            })
            //check to see if song is already purchased
            await getPurchaseList({
                'userPublicKey': props.currentAccount
            })
            .then((result) => {
                // console.log('reult', result)
                const renderDownloadStatus = result.find(song => song.songIdentifier == props.music.musicIdentifier)
                setDownloadStatus(renderDownloadStatus)
            })
            .catch((result) => {
                console.log("error", result);
            })  
        })()
    }, [])

    const clickHandler = () => {
        const doesShow = showMe
        setShowMe(!doesShow)
    }

    const modalCancelHandler = () => {
        setShowMe(false)
    }

    const renderModal = () => {
        ReactDOM.render(
        <Modal 
            name={props.music.musicName} 
            musicIdentifier={props.music.musicIdentifier}
            id={songCount} 
            contractAddress={props.contractAddress}
            currentAccount={props.currentAccount}
        />, 
        document.getElementById("modal")
        )
    }

    function uintToString(uintArray) {
        var decodedStr = new TextDecoder('utf-8').decode(uintArray)
        return decodedStr  
    }

    function wordToByteArray(word, length) {
        var ba = [],xFF = 0xFF
        if (length > 0)
         ba.push(word >>> 24)
        if (length > 1)
         ba.push((word >>> 16) & xFF)
        if (length > 2)
         ba.push((word >>> 8) & xFF)
        if (length > 3)
         ba.push(word & xFF)
        return ba
    }
      
    function wordArrayToByteArray(wordArray, length) {
        if (wordArray.hasOwnProperty("sigBytes") && wordArray.hasOwnProperty("words")) {
            length = wordArray.sigBytes
        wordArray = wordArray.words
        }
    
        var result = [],bytes,i = 0
        while (length > 0) {
            bytes = wordToByteArray(wordArray[i], Math.min(4, length))
            length -= bytes.length
            result.push(bytes)
            i++
        }
    return result.flat(Infinity) 
    }

    const decrypt = async() => {
        //get data
        const input = {
            apiKey: new String(process.env.REACT_APP_API_KEY),
            apiSecret: new String(process.env.REACT_APP_API_SECRET),
            key: `my-folder/${String(props.music.musicIdentifier)}/song`,
            getOptions: ['hash', 'data', 'publicUrl', 'key']      
        };
        console.time("get file");
        const result = await fleek.get(input);
        console.timeEnd("get file");
        //decrypt
        console.time("decrypt")
        var str = uintToString(result.data)
        const decrypted = crypto.AES.decrypt(str, aesKey).toString(crypto.enc.Utf8)
        // str = decrypted.toString(crypto.enc.Utf8) //convert word array to string of base utf8
        const wordArray = crypto.enc.Hex.parse(decrypted) //c8 new word array
        var text =  await wordArrayToByteArray(wordArray, wordArray.length )
        console.timeEnd("decrypt")
        console.log(text)
        //c8ting blob
        var arrayBufferView = new Uint8Array(text)
        var blob = new Blob( [ arrayBufferView ], { type: 'music/mp3' } )
        var songSrc = URL.createObjectURL(blob)
        setSongSource(songSrc)
    }

    const assignVarToState = async() => {
        await decrypt()
        SetCurrent((songCount))
        setCurrentSong(props.music.musicName)
        setCurrentArtist(props.music.artistName)
        setCurrentSongImageURL(imageURL)
    }

    const purchaseMusic = async() => {
        await purchaseSong({
            'songIdentifier': props.music.musicIdentifier,
            'userPublicKey': props.currentAccount
          })
          .then((bool) => {
            console.log('success');
          })
          .catch((bool) => {
            console.log('fail');
          })
        props.contractAddress.methods.musicPurchase(songCount, props.music.musicIdentifier).send({ from : props.currentAccount })

    }
    return (
        <Aux>
        <div className="sample__game" key="item.key">
            <div className="sampleCard__rank" onClick={()=>{console.log('fav pressed')}}>
                <FavoriteBorderIcon />
            </div>

            <div className="sample__front">
                <img className="sample__thumbnail" src={imageURL} alt="" />
                <h3 className="sample__name">{props.music.musicName}</h3>
                <Grid container className="sample__stats__streamers">
                    <Grid item xs={8} className="sample__stats">
                        <p>{props.music.artistName}</p>
                    </Grid>              
                </Grid>
            </div>

            <div className="sample__back">
                <div className="sample__streaming__info">
                    <p className="sample__game__stat">89.5k<span>Streams</span></p>
                    <p className="sample__game__stat">21.7k<span>Downloads</span></p>
                </div>

                <button 
                    className="sample__btn"
                    onClick={() => clickHandler()}
                >
                    View Song Details
                </button>

                <div className="sample__streamer">
                    {downloadStatus 
                    ? null
                    :
                    <div className="sample__card__streamer1">
                    <Tooltip title="purchase" onClick={() => purchaseMusic()}>
                        <CloudDownloadIcon />
                    </Tooltip>
                    </div> 
                    }            
                    <div className="sample__card__streamer2">
                    <Tooltip title="play" onClick={() => assignVarToState()}>
                        <PlayCircleFilledWhiteIcon />
                    </Tooltip>
                    </div> 
                    {/* <div className="sample__card__streamer2">
                    <Tooltip title="add to favourite">
                        <FavoriteIcon />
                    </Tooltip>
                    </div>                 */}
                    {/* <div className="sample__card__streamer1">
                    <Tooltip title="add to queue">
                        <QueueIcon />
                    </Tooltip>
                    </div> */}
                    <div className="sample__card__streamer1">
                    <Tooltip title="tip artist" onClick={() => renderModal()}>
                        <MonetizationOnIcon />
                    </Tooltip>
                    </div>

                </div>
            </div>
            <div id="modal"></div>
            <div className="sample__back__background"></div>
    </div>
    </Aux>
    )
}
export default SongCard;