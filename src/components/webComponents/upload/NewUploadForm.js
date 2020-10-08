import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { useSelector, useDispatch } from 'react-redux';
import fleek from '@fleekhq/fleek-storage-js';
import crypto from 'crypto-js';
import randomKeyGenerator from 'random-token'
import CircularIndeterminate from './Spinner'
import { addMusicToOrbit } from '../../../helpers/musicDB/musicDb';

require('dotenv/config');

//TODO testing required!
function Index()
{
    const[title, setTitle] = useState("")
    const[singerName, setSingerName] = useState("")
    const[singerRevenue, setSingerRevenue] = useState("")
    const[singerPublicKey, setSingerPublicKey] = useState("")
    const[producerName, setProducerName] = useState("")
    const[producerRevenue, setProducerRevenue] = useState("")
    const[producerPublicKey, setProducerPublicKey] = useState("")
    const[writerName, setWriterName] = useState("")
    const[writerRevenue, setWriterRevenue] = useState("")
    const[writerPublicKey, setWriterPublicKey] = useState("")
    const[cost, setCost] = useState("")
    const[costPerStream, setCostPerStream] = useState("")
    const[songData, setSongData] = useState()
    const[songImage, setSongImage] = useState()
    const[aesKey, setAesKey] = useState()
    const[musicIdentifier, setMusicIdentifer] = useState()
    const[musicHash, setMusicHash] = useState()
    const[imageHash, setImageHash] = useState()
    const[loading, setLoading] = useState(false)
    const musicContract = useSelector(state => state.musicContract);
    const musicDb = useSelector((state) => state.musicDb.music_db);
    useEffect(() => {
      writeToMusicDb(musicDb);
    }, [musicHash]);
   
    const captureMusic = (event) => {
      event.preventDefault();
      const file = event.target.files[0];
      const reader = new window.FileReader();
      reader.readAsArrayBuffer(file);
      reader.onloadend = () => {
        console.time("encrypt");
        const wordArray = crypto.lib.WordArray.create(Buffer(reader.result));
        const str = crypto.enc.Hex.stringify(wordArray);
        var aesKey = randomKeyGenerator(32);
        setAesKey(aesKey);
        console.log(aesKey);
        const ct = crypto.AES.encrypt(str, aesKey)
        var ctstr = ''
        ctstr = ct.toString();
        ctstr = Buffer.from(ctstr)
        console.timeEnd("encrypt")
        setSongData(ctstr)
      }
    }

    const captureImage = (event) => {
      event.preventDefault() 
      const file = event.target.files[0] 
      const reader = new window.FileReader() 
      reader.readAsArrayBuffer(file)  
      reader.onloadend = () => {
        setSongImage(Buffer(reader.result))
      }
    }

    const uploadMusicToIPFS = async () => {
      console.log("react api secret", process.env.REACT_APP_API_SECRET);
      console.log("react api key", process.env.REACT_APP_API_KEY);
      const input = {
        apiKey: new String(process.env.REACT_APP_API_KEY),
        apiSecret: new String(process.env.REACT_APP_API_SECRET),
        key: `my-folder/${String(title + singerName)}/song`,
        data: songData,
      };
      console.time("upload to ipfs");
      const result = await fleek.upload(input);
      setMusicHash(result.hash);
      console.timeEnd("upload to ipfs");
      console.log("Music Hash from reasult is", result.hash);
      console.log("Music hash from context is", musicHash);
    }

    const uploadImageToIPFS = async () => {
      const input = {
        apiKey: new String(process.env.REACT_APP_API_KEY),
        apiSecret: new String(process.env.REACT_APP_API_SECRET),
        key: `my-folder/${String(title + singerName)}/image`,
        data: songImage,
      };
      console.time("upload to ipfs");
      const result = await fleek.upload(input);
      setImageHash(result.hash);
      console.timeEnd("upload to ipfs");
      console.log("Image hash is", imageHash);

    }
    
    const uploadToIPFS = async() =>{
      await uploadMusicToIPFS()
      await uploadImageToIPFS()
    } 
  
  const writeToMusicDb = (musicDb=musicDb) => {

      console.log("write music to db", musicDb);
      addMusicToOrbit(musicDb, {
        "musicHash": musicHash,
        "title": title,
        "singerName": singerName,
        "singerRevenue": singerRevenue,
        "singerPublicKey": singerPublicKey,
        "producerName": producerName,
        "producerRevenue": producerRevenue,
        "producerPublicKey": producerPublicKey,
        "writerName": writerName,
        "writerRevenue": writerRevenue,
        "writerPublicKey": writerPublicKey,
        "cost": cost,
        "costPerStream": costPerStream,
        // "songData": songData,
        // "songImage": songImage,
        "aesKey": aesKey,
        "musicIdentifier": musicIdentifier,
        "imageHash": imageHash,
      }).then(data => {
        console.log("Added music to db I guess", data)
      }).catch(error => {
        console.log("Error encountered ", error);
      }).finally(() => {
        console.log("Finally done everything");
      });
    
  } 
    const handleSubmit = async() => {
      setLoading(true)
      await uploadToIPFS();
      // console.log(String(title + singerName));
      musicContract.methods.musicAdd(title, singerName, cost, String(title + singerName), aesKey).send({from : singerPublicKey})
      setLoading(false)
    }
    return(
          <div className="upload-wrapper">
            <div className="form-wrapper">
              <h1>Song Upload Form</h1>
              <form onSubmit={(event) => {
                event.preventDefault()
                handleSubmit()
              }} >
                <div className="title">
                  <label htmlFor="songTitle">Title</label>
                  <input 
                    type="text"
                    name="songTitle"
                    placeholder="song title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}                  
                    required
                    />
                </div>
    
                <div className="download">
                  <label htmlFor="singerName">Singer Name</label>
                  <input
                    type="text"
                    placeholder="singer name"
                    name="singerName"
                    value={singerName}
                    onChange={(e) => setSingerName(e.target.value)}   
                    required              
                  />
                </div>
    
                <div className="stream">
                  <label htmlFor="singerRevPercent">Singer revenue</label>
                  <input
                    placeholder="revenue for singer in percent eg 20"
                    type="number"
                    min="0"
                    name="singerRevPercent"
                    value={singerRevenue}
                    onChange={(e) => setSingerRevenue(e.target.value)}  
                  />
                </div>
    
                <div className="title">
                  <label htmlFor="singerPublicKey">Singer public key</label>
                  <input 
                    type="text"
                    name="singerPublicKey"
                    placeholder="singer's public key"
                    value={singerPublicKey}
                    onChange={(e) => setSingerPublicKey(e.target.value)}  
                    required
                  />
                </div>
    
                <div className="download">
                  <label htmlFor="producerName">Producer Name</label>
                  <input
                    placeholder="producer name"
                    type="text"
                    name="producerName"
                    value={producerName}
                    onChange={(e) => setProducerName(e.target.value)}  
                  />
                </div>
    
                <div className="stream">
                  <label htmlFor="producerRevPercent">Producer revenue</label>
                  <input
                    placeholder="producer's revenue in percentage"
                    type="number"
                    min="0"
                    name="producerRevPercent"
                    value={producerRevenue}
                    onChange={(e) => setProducerRevenue(e.target.value)}  
                  />
                </div>
    
                <div className="title">
                  <label htmlFor="producerPulicKey">Producer public key</label>
                  <input 
                    type="text"
                    name="producerPulicKey"
                    placeholder="producer's public key"
                    value={producerPublicKey}
                    onChange={(e) => setProducerPublicKey(e.target.value)}  
                  />
                </div>
    
                <div className="download">
                  <label htmlFor="writerName">Writer Name</label>
                  <input
                    placeholder="writer name"
                    type="text"
                    name="writerName"
                    value={writerName}
                    onChange={(e) => setWriterName(e.target.value)}  
                  />
                </div>
    
                <div className="stream">
                  <label htmlFor="writerRevPercent">Writer revenue</label>
                  <input
                    placeholder="writer's revenue in percent"
                    type="number"
                    min="0"
                    name="writerRevPercent"
                    value={writerRevenue}
                    onChange={(e) => setWriterRevenue(e.target.value)}  
                  />
                </div>
    
                <div className="title">
                  <label htmlFor="writerPulicKey">Writer public key</label>
                  <input 
                    type="text"
                    name="writerPulicKey"
                    placeholder="writer's public key"
                    value={writerPublicKey}
                    onChange={(e) => setWriterPublicKey(e.target.value)}  
                  />
                </div>
    
                <div className="download">
                  <label htmlFor="downloadCost">Cost per download</label>
                  <input
                    placeholder="no. of tokens"
                    type="number"
                    min="0"
                    name="downloadCost"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}  
                    required
                  />
                </div>
                
                <div className="stream">
                  <label htmlFor="streamCost">Cost per stream</label>
                  <input
                    placeholder="no. of tokens"
                    type="number"
                    min="0"
                    name="streamCost"
                    value={costPerStream}
                    onChange={(e) => setCostPerStream(e.target.value)}  
                  />
                </div>            
                
                <div className="download">
                  <label htmlFor="track">Select Track</label>
                  <input
                    placeholder="select the track"
                    type="file"
                    name="track"
                    onChange={captureMusic}
                  />
                </div>
    
                <div className="stream">
                  <label htmlFor="songImage">Select song Image</label>
                  <input
                    placeholder="walpaper for your song"
                    type="file"
                    name="songImage"
                    onChange={captureImage}
                  />
                </div>
                
                <div className="createAccount">
                  <button 
                    type="submit"

                  >
                    Upload to Ehtereum Network
                  </button>
                  {loading ? <CircularIndeterminate/> : null}
                  <small>By submitting this you agree all the terms and conditions.</small>
                </div>
              </form>
            </div>
           </div>
    )
}

export default Index
