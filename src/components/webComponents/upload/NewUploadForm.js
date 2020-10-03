// import React, { Component } from "react";
// import { connect } from 'react-redux';
// import * as actionTypes from '../../../store/actions';
// import axios from 'axios';
// import uuid from 'react-uuid'
// import Aux from '../../hoc/Auxiliary';
// import SongCard from '../songCard/SongCard';
// import "./SongDetail2.css";

// class NewUploadForm extends Component {
//     constructor(props) {
//     super(props);

//     this.state = {
//       // items: [],
//       currentItem: {
//         songTitle: '',
//         singerName: '',
//         singerRevPercent: '',
//         // singerPublicKey: '',
//         // producerName: '',
//         // producerRevPercent: '',
//         // producerPublicKey: '',
//         // writerName: '',
//         // writerRevPercent: '',
//         // writerPublicKey: '',
//         // costPerDownload: '',
//         // costPerStream: '',
//         // track: '',
//         // songImage: '',
//         // singerImage: '',
//         // producerImage: '',
//         // writerImage: '',
//         date: Date.now()
//     }
//   }
// }

//   // postDataHandler = () => {
//     // const data = {
//       // songTitle: this.state.songTitle,
//       // costPerDownload: this.state.costPerDownload,
//       // costPerStream: this.state.costPerStream,
//       // singerName: this.state.singerName,
//       // singerRevPercent: this.state.singerRevPercent,
//       // singerPublicKey: this.state.singerPublicKey,
//       // producerName: this.state.producerName,
//       // producerRevPercent: this.state.producerRevPercent,
//       // producerPublicKey: this.state.producerPublicKey,
//       // writerName: this.state.writerName,
//       // writerRevPercent: this.state.writerRevPercent,
//       // writerPublicKey: this.state.writerPublicKey,
//       // track: this.state.track,
//       // songImage: this.state.songImage,
//       // singerImage: this.state.singerImage,
//       // producerImage: this.state.producerImage,
//       // writerImage: this.state.writerImage,
//     // };

//     // URL to send data to the database
//     // axios.post('https://jsonplaceholder.typicode.com/posts', data)
//       // .then(response => {
//         // console.log(response);
//       // });
//   // }

//       handleChange =(e) => {
//         // IF I MISSED THE []
//         // let name = e.target.name;
//         this.setState({
//           currentItem : {
//           [e.target.name] : e.target.value
//           }
//         })
//       }
//   // }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     // const newItem = this.state.currentItem;
//     // console.log(newItem);
//     // if((newItem.songTitle !== "") &&
//     //   (newItem.costPerDownload !== "")) {
//     //     const newItems = [...this.state.items, newItem];
//     //     this.setState ({
//     //       items: newItems,
//     //       currentItem: {
//     //         songTitle: '',
//     //         key: ''
//     //       }
//     //     })
//     //   }
//     console.log("submitted");
//     };

//   render() {

//     return (
//       <Aux>
//       <div className="upload-wrapper">
//         <div className="form-wrapper">
//           <h1>Song Upload Form</h1>
//           <form onSubmit={this.handleSubmit} >

//           <h1>Hello {this.state.songTitle} {this.state.singerName}</h1>

//             <div className="title">
//               <label htmlFor="songTitle">Title</label>
//               <input 
//                 type="text"
//                 name="songTitle"
//                 placeholder="song title"
//                 // noValidate
//                 value={this.state.currentItem.songTitle}
//                 onChange={this.handleChange}
//               />
//             </div>

//             <div className="download">
//               <label htmlFor="singerName">Singer Name</label>
//               <input
//                 type="text"
//                 placeholder="singer name"
//                 name="singerName"
//                 // noValidate
//                 value={this.state.currentItem.singerName}
//                 onChange={this.handleChange}
//               />
//             </div>

//             <div className="stream">
//               <label htmlFor="singerRevPercent">Singer revenue</label>
//               <input
//                 placeholder="revenue for singer in percent"
//                 type="number"
//                 value={this.state.currentItem.singerRevPercent}
//                 min="0"
//                 name="singerRevPercent"
//                 // noValidate
//                 onChange={this.handleChange}
//               />
//             </div>

//             <div className="title">
//               <label htmlFor="singerPublicKey">Singer public key</label>
//               <input 
//                 type="text"
//                 value={this.state.currentItem.singerPublicKey}
//                 name="singerPublicKey"
//                 placeholder="singer's public key"
//                 // noValidate
//                 onChange={this.handleChange}
//               />
//             </div>

//             <div className="download">
//               <label htmlFor="producerName">Producer Name</label>
//               <input
//                 placeholder="producer name"
//                 type="text"
//                 value={this.state.currentItem.producerName}
//                 name="producerName"
//                 // noValidate
//                 onChange={this.handleChange}
//               />
//             </div>

//             <div className="stream">
//               <label htmlFor="producerRevPercent">Producer revenue</label>
//               <input
//                 placeholder="producer's revenue in percentage"
//                 value={this.state.currentItem.producerRevPercent}
//                 type="number"
//                 min="0"
//                 name="producerRevPercent"
//                 // noValidate
//                 onChange={this.handleChange}
//               />
//             </div>

//             <div className="title">
//               <label htmlFor="producerPulicKey">Producer public key</label>
//               <input 
//                 type="text"
//                 value={this.state.currentItem.producerPublicKey}
//                 name="producerPulicKey"
//                 placeholder="producer's public key"
//                 // noValidate
//                 onChange={this.handleChange}
//               />
//             </div>

//             <div className="download">
//               <label htmlFor="writerName">Writer Name</label>
//               <input
//                 placeholder="writer name"
//                 type="text"
//                 value={this.state.currentItem.writerName}
//                 name="writerName"
//                 // noValidate
//                 onChange={this.handleChange}
//               />
//             </div>

//             <div className="stream">
//               <label htmlFor="writerRevPercent">Writer revenue</label>
//               <input
//                 placeholder="writer's revenue in percent"
//                 type="number"
//                 value={this.state.currentItem.writerRevPercent}
//                 min="0"
//                 onRateChange= "5"
//                 name="writerRevPercent"
//                 // noValidate
//                 onChange={this.handleChange}
//               />
//             </div>

//             <div className="title">
//               <label htmlFor="writerPulicKey">Writer public key</label>
//               <input 
//                 type="text"
//                 value={this.state.currentItem.writerPublicKey}
//                 name="writerPulicKey"
//                 placeholder="writer's public key"
//                 // noValidate
//                 onChange={this.handleChange}
//               />
//             </div>

//             <div className="download">
//               <label htmlFor="downloadCost">Cost per download</label>
//               <input
//                 placeholder="no. of tokens"
//                 type="number"
//                 value={this.state.currentItem.downloadCost}
//                 min="0"
//                 name="downloadCost"
//                 // noValidate
//                 onChange={this.handleChange}
//               />
//             </div>

//             <div className="stream">
//               <label htmlFor="streamCost">Cost per stream</label>
//               <input
//                 placeholder="no. of tokens"
//                 type="number"
//                 value={this.state.currentItem.streamCost}
//                 min="0"
//                 name="streamCost"
//                 // noValidate
//                 onChange={this.handleChange}
//               />
//             </div>            
            
//             <div className="download">
//               <label htmlFor="track">Select Track</label>
//               <input
//                 placeholder="select the track"
//                 type="file"
//                 value={this.state.currentItem.track}
//                 name="track"
//                 // noValidate
//                 onChange={this.handleChange}
//               />
//             </div>

//             <div className="stream">
//               <label htmlFor="songImage">Select song Image</label>
//               <input
//                 placeholder="walpaper for your song"
//                 type="file"
//                 value={this.state.currentItem.songImage}
//                 name="songImage"
//                 // noValidate
//                 onChange={this.handleChange}
//               />
//             </div>

//             <div className="createAccount">
//               <button 
//                 type="submit"
//                 // onClick={this.postDataHandler}
//                 // onClick={() => this.props.onAddSong(this.state.songTitle, this.state.singerName)}
//                 // songAdded IS HANDLED IN ALL SONGS FILE
//                 // onClick={() => this.props.songAdded(this.state.currentItem.songTitle, this.state.currentItem.singerName, this.state.currentItem.singerRevPercent)}
//                 onClick={() => this.props.onAddedSong(this.state.currentItem.songTitle,
//                                                       this.state.currentItem.singerName,
//                                                       this.state.currentItem.singerRevPercent)}
//               >
//                 Upload Now
//               </button>
//               <small>By submitting this you agree all the terms and conditions.</small>
//             </div>
//           </form>
//         </div>
//       </div>
//       {/* <SongCard items = {this.state.items} /> */}
//       </Aux>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddedSong: (songTitle, singerName, singerRevPercent) => dispatch ({
//       type:'ADD_SONG', songData:{songTitle: songTitle, singerName: singerName, singerRevPercent: singerRevPercent}
//     })
//   }
// }

// export default connect(null, mapDispatchToProps)(NewUploadForm);

import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { useSelector, useDispatch } from 'react-redux';
import fleek from '@fleekhq/fleek-storage-js';
import crypto from 'crypto-js';
import randomKeyGenerator from 'random-token';
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
      await uploadToIPFS();
      // console.log(String(title + singerName));
      musicContract.methods.musicAdd(title, singerName, cost, String(title + singerName), aesKey).send({from : singerPublicKey})
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
                    // noValidate
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
                    // noValidate
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
                  <small>By submitting this you agree all the terms and conditions.</small>
                </div>
              </form>
            </div>
           </div>
    )
}

export default Index
