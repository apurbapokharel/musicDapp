import React, { useState, useEffect, Component } from 'react';
import './SongRow.css';
import {Grid, Paper} from '@material-ui/core';
import Aux from '../../../hoc/Auxiliary';
import { useContext } from 'react';
import playerContext from '../../../../context/playerContext';
import { getSongKey, purchaseSong, getPurchaseList } from '../../../API Caller/RESTFetcher';
import fleek from '@fleekhq/fleek-storage-js';
import crypto from 'crypto-js';

function SongRow(props) {

    const[imageURL, setImageURL] = useState()
    const { SetCurrent, setCurrentSong, setCurrentArtist, setSongSource, setCurrentSongImageURL } = useContext(playerContext)
    const[aesKey, setAESKey] = useState() 
    const[iv, setIV] = useState()
    const[costPerStream, setCostPerStream] = useState("1")
    const[songCount, setSongCount] = useState()
    const[downloadStatus, setDownloadStatus] = useState()

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
                setIV(result[2])
                setCostPerStream(result[3])
            })
            .catch((result) => {
                console.log("error", result);
            })  
        })()
    }, [props])

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
        const decrypted = crypto.AES.decrypt(str, aesKey, { iv: iv }).toString(crypto.enc.Utf8)
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
        props.contractAddress.methods.musicTip(songCount, props.music.musicIdentifier, costPerStream*10**10).send({ from : props.currentAccount })
        .on('error', () => {
            window.alert('Cannot listen without paying streaming amount');
        })
        .on('confirmation', async() => {
            console.log('success');
            await decrypt()
            SetCurrent((songCount))
            setCurrentSong(props.music.musicName)
            setCurrentArtist(props.music.artistName)
            setCurrentSongImageURL(imageURL)
        })
    }

    return (
        <Grid container className="songRowLayout">
            <Grid item xs={10}>
                <div className="songRow" onClick={() => assignVarToState()}>
                    <img 
                        className="songRow__album"
                        src={imageURL}
                        alt=""
                    />   
                    <div className="songRow__infoAndDuration">
                        <div className="songRow__info">
                            <h1>{props.music.musicName}</h1>
                            <p>
                                {props.music.artistName}
                            </p>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2} className="track__duration">
                <p>1 MSIC per stream</p>
            </Grid>
        </Grid>
    )
}

export default SongRow;
